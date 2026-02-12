import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h2>{props.nome}</h2>
        </div>
    )
}

export default Card