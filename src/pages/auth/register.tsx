import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/auth/register', { email, password, name });
            navigate('/login');
        } catch (error) {
            console.error(error);
            toast.error('Registration failed.')
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-blue-50 to-white px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-blue-100">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 text-blue-700 text-2xl font-bold mb-10">
                        {/* <img src="/logo.png" alt="CarpenterBook" className="h-7" /> */}
                        CarpenterBook
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Create your account</h2>
                    <p className="text-sm text-gray-500 mt-1">Register to book your favorite carpenter</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                        required
                    />
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 font-medium hover:underline">
                        Login here
                    </a>
                </p>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-sm text-gray-500 hover:text-blue-600 underline"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
