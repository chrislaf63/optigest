import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
                if(response.status === 200 || response.status === 201)
            {
                const token = response.data.token;
                localStorage.setItem('authToken', token);
                alert('Vous êtes connecté');
                navigate('/main');
            }
        } catch (error)
            {
                console.error('Erreur :', error);
                alert('Une erreur est survenue');
            }
        };


        return (
            <div className="min-h-screen bg-gray-300 flex flex-col items-center">
                <header className="w-full bg-[#8c4a08] p-6 text-center text-black font-bold text-3xl">
                    OptiGest
                </header>
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#a38f82] p-8 mt-10 w-96 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl mb-6 text-center">
                        Se connecter
                    </h2>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-400 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-400 rounded"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-700"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        );
    }

    export default LoginForm;