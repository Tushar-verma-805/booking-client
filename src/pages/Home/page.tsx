import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const HomePage: React.FC = () => {
    return (
        <div>
            {/* Navbar */}
            <Header /> 

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-100 to-orange-100 py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Carpenter Services</h1>
                <p className="text-gray-600 mb-6">
                    Book experienced carpenters for your home improvement needs. Quality work, flexible scheduling, trusted professionals.
                </p>
                <Link
                    to="/booking"
                    className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
                >
                    Book a Carpenter Now
                </Link>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 px-4 text-center">
                <h2 className="text-2xl font-bold mb-10">Why Choose Our Service</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 p-6 rounded-lg">
                        <div className="text-3xl mb-2 text-blue-600">👷</div>
                        <h3 className="text-lg font-semibold mb-1">Expert Carpenters</h3>
                        <p className="text-gray-600 text-sm">
                            Skilled professionals with years of experience in woodworking and home improvement.
                        </p>
                    </div>
                    <div className="bg-orange-100 p-6 rounded-lg">
                        <div className="text-3xl mb-2 text-orange-600">🕒</div>
                        <h3 className="text-lg font-semibold mb-1">Flexible Timing</h3>
                        <p className="text-gray-600 text-sm">
                            Book slots from 9 AM to 6 PM at your convenience. Easy rescheduling available.
                        </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg">
                        <div className="text-3xl mb-2 text-green-600">✅</div>
                        <h3 className="text-lg font-semibold mb-1">Quality Assured</h3>
                        <p className="text-gray-600 text-sm">
                            All our carpenters are vetted professionals committed to delivering excellent results.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-orange-500 py-16 text-center text-white">
                <h2 className="text-2xl font-semibold mb-2">Ready to Get Started?</h2>
                <p className="mb-6 text-sm">Browse available carpenters and book your preferred time slot in just a few clicks.</p>
                <Link
                    to="/book"
                    className="bg-white text-blue-700 font-semibold py-2 px-5 rounded shadow hover:bg-gray-100 transition"
                >
                    View Available Slots
                </Link>
            </section>
        </div>
    );
};

export default HomePage;
