import "./header.css";

export default function Menu() {
    return <menu className="header-navigation__menu">
        <li className="header-navigation__menu-item">
            <a href="#">Home</a>
        </li>
        <li className="header-navigation__menu-item">
            <a href="#">Products</a>
        </li>
        <li className="header-navigation__menu-item">
            <a href="#">Favoruites</a>
        </li>
        <li className="header-navigation__menu-item">
            <a href="#">About</a>
        </li>
    </menu>
}