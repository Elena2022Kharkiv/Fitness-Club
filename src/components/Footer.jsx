import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__contacts">
          <Logo />
          <div>
            <h4>CONTACT US</h4>
            <p>contact@thefitnessclub.net</p>
          </div>
          <div>            
            <h4>FOLLOW US</h4>
            <p>Facebook</p>
          </div>
        </div>
        <p className="footer__text">The Fitness Club | All Rights Reserved 2024</p>
      </footer>
    )
}

export default Footer;