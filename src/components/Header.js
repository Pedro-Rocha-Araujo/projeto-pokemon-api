import React from "react"

function Header(props) {
    return (
        <header>
            <h1>Pokedex</h1>
            <nav>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" onChange={(e)=> props.pokemonsFiltrados(e.target.value)} />
            </nav>
        </header>
    )
}

export default Header