import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomePeople()
    }, [])
    console.log(store.Character)
    return (
        <div className="card-container">
            {store.Character.map((item, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={'https://starwars-visualguide.com/assets/img/characters/1.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.uid}</p>
                        <div>
                            <Link to="#" className="btn btn-primary">Learn more!</Link>
                            <Link to="#" className="btn btn-primary"><i className="fa-regular fa-heart" style={{ color: "#ffff00" }}></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};