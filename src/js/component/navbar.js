import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const removeFromFavorites = (e,nameToRemove) => {
		e.preventDefault ()
		const updatedFavorites = store.favorites.filter(name => name !== nameToRemove);
		actions.updatedFavorites(updatedFavorites)
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3 container" id="navb">
			<Link to="/">
				<img src="data:image/png;base64,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" alt="Star Wars" width="90" height="70" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites && store.favorites.length > 0 ? store.favorites.map((name, index) => {
								return (
									<li className="d-flex align-items-baseline" key={index}>
										<p className="dropdown-item px-3" href="#">{name}</p>
										<i className="fa-solid fa-trash px-3" onClick={(e) => removeFromFavorites (e,name)} style={{ color: "#ff000d" }}></i>
									</li>
								)
							})
								:
								<li className="d-flex align-items-baseline">
									<p className="dropdown-item px-3" href="#">Not favorite</p>

								</li>
							}

						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
