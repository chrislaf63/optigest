import React, {useState} from 'react';
import axios from 'axios';

function MainPage() {

    try {
        const response = axios.get('http://localhost:8000/api/login', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
    } catch (error) {
        console.error('Erreur :', error);
        alert('Une erreur est survenue');
    }
        return (
        <div className="min-h-screen bg-gray-300 flex flex-col items-center">
            <header className="w-full bg-[#8c4a08] p-6 text-center text-black font-bold text-3xl">
                OptiGest
            </header>
        </div>
            );
}

            export default MainPage;
