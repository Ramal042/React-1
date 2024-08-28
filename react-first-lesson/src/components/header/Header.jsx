import "./header.css"
import Menu from "./Menu";
import NavigationLogo from "./NavigationLogo";

export default function Header(){
    return (
        <header className="header">
        <nav className="header--navigation">
            <NavigationLogo />
            <Menu />
        </nav>
    </header>
);
}