import React, { useState, useEffect } from "react";


function UserEffect() {
    const [count, setCount] = useState(0);

    // Le tableau de dépendances
    const [name, setName] = useState('');

    // Ce code s'exécute après chaque rendu
    useEffect(() => {
        document.title = `Hello, ${name}!You clicked ${count} times`;
    },[count, name]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
        </div>
    );
}

export default UserEffect;

// useEffect prend deux arguments :

// Une fonction qui contient le code de l'effet.
// Un tableau de dépendances (optionnel).


// useEffect est un hook en React qui permet d'effectuer des effets secondaires dans des composants fonctionnels. Les effets secondaires peuvent inclure des actions comme :

// Modifier le DOM directement.
// Charger des données depuis une API.
// Abonner/désabonner à des ressources externes.
// Mettre à jour l'état local.