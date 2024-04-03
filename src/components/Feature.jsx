const Feature = (props) => {

    const { title, text, img } = props;

    return (
        <div className="features__item">
            <img src={ img } alt="" />
            <h3>{ title }</h3>
            <p>{ text }</p>
        </div>
    )
};

export default Feature;