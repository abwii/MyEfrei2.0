import React from 'react';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'blue', padding: '10px' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
                <li><a href="/" style={{ textDecoration: 'none', color: 'white' }}>Accueil</a></li>
                <li><a href="/notes" style={{ textDecoration: 'none', color: 'white' }}>Notes</a></li>
                <li><a href="/planning" style={{ textDecoration: 'none', color: 'white' }}>Planning</a></li>
                <li><a href="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</a></li>
                <li><a href="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
