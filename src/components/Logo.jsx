import logoImg from "./../img/gym_sport_running.png";

const Logo = () => {
    return (
        <div className="logo">
          <img src={logoImg} alt="" />
          <span>The</span>
          <p>Fitness Club</p>
        </div>
    )
}

export default Logo;