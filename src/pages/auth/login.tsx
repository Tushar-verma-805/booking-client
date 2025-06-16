// src/pages/Login.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/auth/login', {
                email,
                password,
            });

            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('email', res.data.email);

            alert('Login successful!');
            navigate('/');
        } catch (error) {
            alert('Login failed.');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-blue-200">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Welcome Back 👋</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Not registered?{' '}
                    <a href="/register" className="text-blue-600 font-semibold underline">
                        Create an account
                    </a>
                </p>
            </div>
        </div>

    );
};

export default Login;
