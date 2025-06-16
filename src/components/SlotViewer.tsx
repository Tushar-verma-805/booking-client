import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

interface SlotViewerProps {
    carpenter: { id: number; name: string };
    onClose: () => void;
}

const SlotViewer: React.FC<SlotViewerProps> = ({ carpenter, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [bookedHours, setBookedHours] = useState<number[]>([]);

    // const fetchBookedSlots = async (date: string) => {
    //     const token = localStorage.getItem('token');
    //     const res = await axios.get(
    //         `http://localhost:8000/slots/booked?carpenterId=${carpenter.id}&date=${date}`,
    //         { headers: { Authorization: `Bearer ${token}` } }
    //     );
    //     const booked = res.data.map((slot: any) => moment(slot.startTime).hour());
    //     setBookedHours(booked);
    // };

    // useEffect(() => {
    //     fetchBookedSlots(selectedDate);
    // }, [selectedDate]);

    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
        timeSlots.push(hour);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Slots for {carpenter.name}</h2>

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

                <div className="grid grid-cols-3 gap-3 mb-4">
                    {timeSlots.map((hour) => {
                        const time = moment(selectedDate).hour(hour).minute(0);
                        const isBooked = bookedHours.includes(hour);

                        return (
                            <button
                                key={hour}
                                disabled={isBooked}
                                className={`py-2 px-4 rounded-lg text-sm ${isBooked
                                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                {time.format('h A')}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={onClose}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SlotViewer;
