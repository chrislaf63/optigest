import React from 'react';
import accueilImage from './assets/Accueil.jpg';
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {/* Header Section */}
            <header className="w-full bg-[#8c4a08] flex justify-between items-center p-6">
                <h1 className="text-4xl text-black font-bold">OptiGest</h1>
                <div className="flex space-x-4">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500"
                            onClick={() => navigate('/register')}>
                        S'enregistrer
                    </button>
                    <button className="bg-[#8c4a08] text-white px-4 py-2 rounded-full border border-black hover:bg-[#633605]"
                            onClick={() => navigate('/login')}>
                        Se connecter
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex justify-center items-center">
                <img
                    src={accueilImage}
                    alt="Documents and Calculator"
                    className="max-w-full h-auto"
                />
            </main>
        </div>
    );
}

export default HomePage;