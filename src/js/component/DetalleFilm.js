import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/detalle.css";

export const DetalleFilm = (props) => {
    const { store, actions } = useContext(Context)
    const params = useParams ()
    useEffect(() => {
        actions.loadOneFilm(params.id)
    }, [])
    console.log(store.OneFilm.properties)
    return (
        <div className="detail">
            <div className="card-container">
                <div className="card carta" style={{ width: "45rem" }}>
                    <div className="row">
                        <div className="col-7">
                        <img src={`https://starwars-visualguide.com/assets/img/films/${params.id}.jpg`} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-4 descript">
                           <h3>Description</h3>
                           <br></br>
                           <p>{store.OneFilm.description}</p>
                        </div>
                    </div>    
                    <div className="card-body">
                        <h5 className="card-title">{store.OneFilm.properties?.title}</h5>
                        <p className="card-text">Created: {store.OneFilm.properties?.created}</p>
                        <p className="card-text">Edited: {store.OneFilm.properties?.edited}</p>
                        <p className="card-text">Producer: {store.OneFilm.properties?.producer}</p>
                    </div>       
                </div>            
            </div>
        </div>
         );
    };