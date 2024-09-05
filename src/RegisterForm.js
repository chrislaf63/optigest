import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier si le mot de passe et la confirmation sont identiques
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        // Préparer les données à envoyer à l'API
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        };

        try {
            // Envoyer les données à l'API Laravel avec Axios
            const response = await axios.post('http://localhost:8000/api/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        } catch (error) {
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
                <h2 className="text-2xl mb-6 text-center">Créer mon compte</h2>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">
                        Nom d'utilisateur
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-400 rounded"
                        required
                    />
                </div>
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
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">
                        Confirmation mot de passe
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border border-gray-400 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-700"
                >
                    Je m'enregistre
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;