import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Species = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeSpecie()
    }, [])
    console.log(store.Especies)
    return (
        <div className="card-container">
            {store.Especies.map((item, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/species/${index + 1 <= 17 ? index + 1 == 17 ? 18 : index + 1 : index + 2}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Classification: {item.classification}</p>
                        <p className="card-text">Designation: {item.designation}</p>
                        <p className="card-text">Language: {item.language}</p>
                        <div>
                            <Link to={`/specie/${index+1}`} className="btn btn-outline-dark me-3">Learn more!</Link>
                            <button className="btn btn-outline-warning" to="#" ><i className="fa-regular fa-heart" onClick={()=>{
                                actions.addFavorite(item.name)
                            }} style={{ color: "#ffff00" }}></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};