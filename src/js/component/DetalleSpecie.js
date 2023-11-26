import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/detalle.css";

export const DetalleSpecie = (props) => {
    const { store, actions } = useContext(Context)
    const params = useParams ()
    useEffect(() => {
        actions.loadOneSpecie(params.id)
    }, [])
    console.log(store.OneSpecie.properties)
    return (
        <div className="detail">
            <div className="card-container">
                <div className="card carta" style={{ width: "45rem" }}>
                    <div className="row">
                        <div className="col-7">
                        <img src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-4 descript">
                           <h3>Description</h3>
                           <br></br>
                           <p>{store.OneSpecie.description}</p>
                        </div>
                    </div>    
                    <div className="card-body">
                        <h5 className="card-title">{store.OneSpecie.properties?.name}</h5>
                        <p className="card-text">Classification: {store.OneSpecie.properties?.classification}</p>
                        <p className="card-text">Designation: {store.OneSpecie.properties?.designation}</p>
                        <p className="card-text">Language: {store.OneSpecie.properties?.language}</p>
                        <p className="card-text">Skin Color: {store.OneSpecie.properties?.skin_colors}</p>
                        <p className="card-text">Hair Color: {store.OneSpecie.properties?.hair_colors}</p>
                        <p className="card-text">Eye Color: {store.OneSpecie.properties?.eye_colors}</p>
                    </div>       
                </div>            
            </div>
        </div>
    );
};