import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="title">{props.title || "Default Title"}</h1>
                <h2 className="subtitle">{props.subtitle}</h2>
            </div>
        </div>);
}

export default Header;