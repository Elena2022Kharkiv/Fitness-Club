import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <div className="join">Join Online</div>
        </header>
    )    
}

export default Header;