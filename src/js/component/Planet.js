import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Planet = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomePlanet()
    }, [])
    console.log(store.Planets)
    return (
        <div className="card-container">
            {store.Planets.map((item, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index + 1 <= 17 ? index + 1 == 17 ? 18 : index + 1 : index + 2}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Terrain: {item.terrain}</p>
                        <p className="card-text">Diameter: {item.diameter}</p>
                        <p className="card-text">Climate: {item.climate}</p>
                        <div>
                            <Link to={`/planet/${index+1}`} className="btn btn-outline-dark me-3">Learn more!</Link>
                            <Link to="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart" style={{ color: "#ffff00" }}></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
