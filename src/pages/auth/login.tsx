import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/auth/login', { email, password });
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('email', res.data.email);
            alert('Login successful!');
            navigate('/');
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-blue-50 to-white px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-blue-100">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 text-blue-700 text-2xl font-bold mb-2">
                        <img src="/logo.png" alt="CarpenterBook" className="h-7" />
                        CarpenterBook
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome Back 👋</h2>
                    <p className="text-sm text-gray-500 mt-1">Please sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-600 font-medium hover:underline">
                        Sign up
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

export default Login;
