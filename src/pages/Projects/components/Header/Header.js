import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="pt-10 pb-10 custom-header">
            <h1 className="text-5xl text-green-400 font-bold pb-4">Hire Web Developer</h1>
            <h3 className="pb-2">Hire your favorite web developer who knows different technology</h3>
            <h1 className="text-3xl font-bold">Total Budget: $10M USD</h1>
        </div>
    );
};

export default Header;