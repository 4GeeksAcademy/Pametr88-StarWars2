import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const DetallePlanet = (props) => {
    const { store, actions } = useContext(Context)
    const params = useParams ()
    useEffect(() => {
        actions.loadOnePlanet(params.id)
    }, [])
    console.log(store.OnePlanet.properties)
    return (
        <div className="card-container">
            {/* <div className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{store.OneCharacter.properties?.name}</h5>
                        <p className="card-text">Gender: {store.OneCharacter.properties?.gender}</p>
                        <p className="card-text">Height: {store.OneCharacter.properties?.height}</p>
                        <p className="card-text">Hair Color: {store.OneCharacter.properties?.hair_color}</p>
                    </div>
                </div> */}
            
        </div>
    );
};