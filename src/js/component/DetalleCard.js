import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/detalle.css";

export const DetalleCard = (props) => {
    const { store, actions } = useContext(Context)
    const params = useParams ()
    useEffect(() => {
        actions.loadOnePeople(params.id)
    }, [])
    console.log(store.OneCharacter.properties)
    return (
        <div className="detail">
            <div className="card-container">
                <div className="card carta" style={{ width: "45rem" }}>
                    <div className="row">
                        <div className="col-7">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-4 descript">
                           <h3>Description</h3>
                           <br></br>
                           <p>{store.OneCharacter.description}</p>
                        </div>
                    </div>    
                    <div className="card-body">
                        <h5 className="card-title">{store.OneCharacter.properties?.name}</h5>
                        <p className="card-text">Gender: {store.OneCharacter.properties?.gender}</p>
                        <p className="card-text">Height: {store.OneCharacter.properties?.height}</p>
                        <p className="card-text">Hair Color: {store.OneCharacter.properties?.hair_color}</p>
                    </div>       
                </div>            
            </div>
        </div>
    );
};