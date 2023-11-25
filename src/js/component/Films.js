import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Films = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeFilm()
    }, [])
    console.log(store.Pelis)
    return (
        <div className="card-container">
            {store.Pelis.map((item, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/films/${index + 1 <= 17 ? index + 1 == 17 ? 18 : index + 1 : index + 2}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Director: {item.director}</p>
                        <div>
                            <Link to="#" className="btn btn-outline-dark me-5">Learn more!</Link>
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