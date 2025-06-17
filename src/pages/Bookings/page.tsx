import React from 'react';
import Header from '../../components/Header';

interface Booking {
    id: string;
    carpenterName: string;
    specialties: string[];
    rating: number;
    experience: number;
    date: string;
    time: string;
    status: string;
    location: string;
    avatar: string;
}

const mockBookings: Booking[] = [
    {
        id: 'BK1750099574836',
        carpenterName: 'Mike Johnson',
        specialties: ['Flooring', 'Doors', 'Windows'],
        rating: 4.9,
        experience: 12,
        date: 'Monday, June 16, 2025',
        time: '12:00 PM',
        status: 'Pending Confirmation',
        location: 'Your Location (to be confirmed)',
        avatar: 'https://i.pravatar.cc/150?u=mikejohnson'
    }
];

const MyBookings: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">My Bookings</h1>
                <p className="text-center text-gray-500 mb-8">Here are your upcoming carpenter bookings.</p>

                <div className="grid gap-6 max-w-5xl mx-auto">
                    {mockBookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {/* Carpenter Info */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2 text-gray-800">Carpenter Details</h2>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={booking.avatar}
                                        alt={booking.carpenterName}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{booking.carpenterName}</h3>
                                        <p className="text-sm text-gray-600">
                                            ⭐ {booking.rating} &nbsp;•&nbsp; {booking.experience} years experience
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {booking.specialties.map((spec, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Info */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2 text-gray-800">Booking Details</h2>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li>
                                        <strong>Date:</strong> {booking.date}
                                    </li>
                                    <li>
                                        <strong>Time:</strong> {booking.time}
                                    </li>
                                    <li>
                                        <strong>Location:</strong> {booking.location}
                                    </li>
                                    <li>
                                        <strong>Booking ID:</strong> {booking.id}
                                    </li>
                                    <li>
                                        <strong>Status:</strong>{' '}
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                                            {booking.status}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyBookings;
