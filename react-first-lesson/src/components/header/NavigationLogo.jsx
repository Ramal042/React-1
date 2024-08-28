import "./header.css"

export default function NavigationLogo() {
    return (

        <div className="header--navigation__logo">
            <img src="./electro.png" alt="logo" />
            <span className="logo--name">
                Techno<span className="logo--name__suffix">JET</span>
            </span>
        </div>
    );
}