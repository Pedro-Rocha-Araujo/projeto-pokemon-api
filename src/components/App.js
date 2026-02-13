import React, {useEffect, useState} from "react"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import "./App.css"

function App() {
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        getPokemons()
    }, [])

    const getPokemons = () => {
        let endpoints = []
        for(let i = 1; i<13; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        let response = axios.all(endpoints.map((_,i)=> axios.get(_))).then((res)=>{
            setPokemons(res)
        })
        return response
    }  
    
    const filtrar = (nome) => {
        if(nome === ""){
            getPokemons()
        }
        var pokemonsFiltrados = []
        for(var i = 0; i < pokemons.length; i++){
            if(pokemons[i].data.name.includes(nome)){
                pokemonsFiltrados.push(pokemons[i])
            }
        }
        setPokemons(pokemonsFiltrados)
    } 
    
    
    return (
        <div className="main">
            <Header pokemonsFiltrados={filtrar} />
            <main>
                <div className="container">
                    {pokemons.map((_,i)=>{
                        return <Card key={i} nome={_.data.name} img={_.data.sprites.front_default} />
                    })}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App