import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Transaction} from "./Transaction";

function MainPage() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('authToken'); // Récupérez le token depuis le localStorage

            try {
                const response = await axios.get('http://localhost:8000/api/transactions', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Ajoutez le token aux en-têtes
                    },
                });
                setData(response.data);
                if (response.data.length > 0) {
                    setUser(response.data[0].user);
                }
            } catch (error) {
                console.error('Erreur :', error);
                alert('Une erreur est survenue');
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const type = e.target.type.value;
        const amount = e.target.amount.value;


        const newTransaction = {
            name: name,
            type: type,
            amount: amount,
            user_id: user.id

        };

        const token = localStorage.getItem('authToken'); // Récupérez le token depuis le localStorage

        try {
            const response = await axios.post('http://localhost:8000/api/transactions', newTransaction, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Ajoutez le token aux en-têtes
                },
            });

            console.log('Response status:', response.status);

            if (response.status === 200 || response.status=== 201 || response.status === 204) {
                console.log('Transaction deleted successfully');
                setData([...data, newTransaction]);
            } else {
                alert('Une erreur est survenue lors de l\'ajout');
            }
        } catch (error) {
            console.error('Erreur :', error);
            alert('Une erreur est survenue lors de l\'ajout');
        }

    }

        const onDelete = async (transactionId) => {
            const token = localStorage.getItem('authToken'); // Récupérez le token depuis le localStorage

            try {
                const response = await axios.delete(`http://localhost:8000/api/transactions/${transactionId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Ajoutez le token aux en-têtes
                    },
                });

                console.log('Response status:', response.status);

                if (response.status === 200 || response.status === 201 || response.status === 204) {
                    console.log('Transaction deleted successfully');
                    setData((curr) => curr.filter((transaction) => transaction.id !== transactionId));
                } else {
                    alert('Une erreur est survenue lors de la suppression');
                }
            } catch (error) {
                console.error('Erreur :', error);
                alert('Une erreur est survenue lors de la suppression');
            }
        };


        const TransactionsList = data.map((transaction) => {
            return (
                <Transaction id={transaction.id}
                             name={transaction.name}
                             type={transaction.type}
                             amount={transaction.amount}
                             user={transaction.user}
                             onDelete={(id) => {
                                 onDelete(id)
                             }}
                />
            );
        });
        console.log(TransactionsList);
        return (
            <div className="min-h-screen bg-gray-300 flex flex-col items-center">
                <header className="w-full bg-[#8c4a08] p-6 text-center text-black font-bold text-3xl">
                    OptiGest
                </header>
                {user && <h1>Bonjour {user.name}</h1>}
                <form  onSubmit={handleSubmit} className="flex flex-col w-60 gap-y-1.5">
                    <input type="text" name="name" placeholder="Nom de l'opération"/>
                    <select name="type">
                    <option value="credit" selected>Crédit</option>
                    <option value="debit">Débit</option>
                    </select>
                    <input type="text" name="amount" placeholder="Montant"/>
                    <input className="bg-green-300" type="submit" value="Ajouter"/>
                </form>
                <div>{TransactionsList}</div>
                {user && <p>Solde : {user.balance}</p>}
            </div>
        );
    }

            export default MainPage;
