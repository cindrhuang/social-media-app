import "./styles.css"

import {
    NavLink
} from "react-router-dom";
import { Logout } from "../Logout";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-home">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                    the bloggy bog.
                    </NavLink>
                </li>
            </ul>
            <ul className="navbar-list">
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                    home
                    </NavLink>
                    <NavLink activeClassName="nav-selected" to="/new">
                    new post
                    </NavLink>
                    <NavLink activeClassName="nav-selected" to="/me">
                    my profile
                    </NavLink>
                    <Logout/>
            </ul>
        </nav>
    )
}