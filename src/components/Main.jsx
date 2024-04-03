import Feature from "./Feature";

import icon1 from "./../img/bench_press_gym.png";
import icon2 from "./../img/fitness_icon.png";
import icon3 from "./../img/bike_icon.png";
import icon4 from "./../img/group_icon.png";


const Main = () => {
    const features = [
        {
            id: '1',
            title: 'WEIGHT ROOM',
            text: 'Build muscle and get stronger in our fully equipped weight room.',
            img: icon1,
        },
        {
            id: '2',
            title: "WOMEN'S GYM",
            text: 'Enjoy a comfortable and confident workout space and meet others with the same goals.',
            img: icon2,
        },
        {
            id: '3',
            title: 'CYCLING ROOM',
            text: 'The perfect low-impact activity for fat burning, weight loss, and strength building.',
            img: icon3,
        },
        {
            id: '4',
            title: 'GROUP CLASSES',
            text: 'Get motivated by fusing music, movement, science, and lots of fun!',
            img: icon4,
        }
    ];

    return (
        <main className="main">
            <div className="hero-block">
                <p>THE GYM YOU</p>
                <p>WON'T WANT TO</p>
                <p>BREAK UP WITH</p>
            </div> 
            <div className="features">
                {
                    features.map(item => <Feature title={ item.title } text={ item.text } img={ item.img} key={ item.id } />)
                }
            </div>
        </main>
    )    
}

export default Main;      