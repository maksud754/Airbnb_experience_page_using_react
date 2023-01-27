
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="cardimage" className="card-image" />
            <div className="card-stats">
                <img src={props.star} alt="star" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) &bull;</span>
                <span className="gray"> {props.country}</span>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}