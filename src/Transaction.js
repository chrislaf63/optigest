import React from "react";

export function Transaction({ id, name, type, amount, user, user_id, onDelete }) {
    return (
        <div className="flex">
            <div className="bg-gray-200 p-4 my-2 text-center">
                <p>N° Opération</p>
                <p>{id}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center">
                <p>Opération:</p>
                <p>{name}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center">
                <p>Type d'opération:</p>
                <p>{type}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center">
                <p>Montant:</p>
                <p>{amount}</p>
            </div>
            <button onClick={() => onDelete(id)}>❌</button>
        </div>
    );
}