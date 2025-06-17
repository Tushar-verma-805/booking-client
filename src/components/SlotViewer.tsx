import React, { useState } from 'react';
import moment from 'moment';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBookedSlots } from '../service/carpenter.service';

interface SlotViewerProps {
    carpenter: { id: number; name: string };
    onClose: () => void;
}

const SlotViewer: React.FC<SlotViewerProps> = ({ carpenter, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedTime, setSelectedTime] = useState('');
    const queryClient = useQueryClient();

    // Fetch booked slots for the carpenter on the selected date
    const { data: bookedSlots = [], isLoading } = useQuery<any[]>({
        queryKey: ['bookedSlots', carpenter.id, selectedDate],
        queryFn: () => fetchBookedSlots(carpenter.id, selectedDate),
        staleTime: 5 * 60 * 1000,
    });

    // FIX: Ensure correct parsing of 'HH:mm:ss' to get hour
    const bookedHours = bookedSlots.map((slot: any) =>
        moment(slot.startTime, 'HH:mm:ss').hour()
    );

    const timeSlots = Array.from({ length: 9 }, (_, i) => 9 + i); // 9 AM to 5 PM

    // Handle booking
    const handleBooking = async () => {
        const token = localStorage.getItem('token');
        try {
            await fetch('http://localhost:8000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    carpenterId: carpenter.id,
                    date: selectedDate,
                    time: selectedTime,
                }),
            });

            alert('Booking successful!');
            setSelectedTime('');
            onClose();
        } catch (err) {
            console.error(err);
            alert('Booking failed');
        }
    };

    console.log(bookedSlots);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-blue-700">
                    Slots for {carpenter.name}
                </h2>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">Select Date</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md"
                        value={selectedDate}
                        min={moment().format('YYYY-MM-DD')}
                        max={moment().add(6, 'days').format('YYYY-MM-DD')}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                {isLoading ? (
                    <p className="text-gray-500">Loading slots...</p>
                ) : (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        {timeSlots.map((hour) => {
                            const time = moment(selectedDate).hour(hour).minute(0);
                            const isBooked = bookedHours.includes(hour);
                            const formatted = time.format('hh:mm A');

                            return (
                                <button
                                    key={hour}
                                    disabled={isBooked}
                                    onClick={() => setSelectedTime(formatted)}
                                    className={`py-2 px-4 rounded-lg text-sm ${isBooked
                                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                        : selectedTime === formatted
                                            ? 'bg-green-600 text-white'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {time.format('h A')}
                                </button>
                            );
                        })}
                    </div>
                )}

                <button
                    disabled={!selectedTime}
                    onClick={handleBooking}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Book Slot {selectedTime && `at ${selectedTime}`}
                </button>

                <button
                    onClick={onClose}
                    className="mt-2 text-sm text-blue-600 hover:underline w-full text-center"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SlotViewer;
