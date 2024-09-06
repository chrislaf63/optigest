import React from "react";

export function Transaction({id, name, type, amount, user, user_id, onDelete}) {
    return (
        <div className="flex h-24 ">
            <div className="bg-gray-200 p-4 my-2 text-center w-20">
                <p>N° Op.</p>
                <p>{id}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center w-48">
                <p>Opération:</p>
                <p>{name}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center w-52">
                <p>Type d'opération:</p>
                <p>{type}</p>
            </div>
            <div className="bg-gray-200 p-4 my-2 text-center w-32">
                <p>Montant:</p>
                <p>{amount} €</p>
            </div>
            <div className="bg-gray-200 my-2">
                <button className="bg-gray-200 mt-3" onClick={() => console.log("modify")}>
                    🖊️
                </button>
            </div>
            <div className="bg-gray-200 my-2">
                <button className="bg-gray-200 mt-3" onClick={() => onDelete(id)}>❌</button>
            </div>
        </div>
    );
}