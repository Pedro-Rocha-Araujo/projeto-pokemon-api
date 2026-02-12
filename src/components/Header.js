import React from "react"

function Header() {
    return (
        <header>
            <h1>Pokedex</h1>
            <nav>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
            </nav>
        </header>
    )
}

export default Header