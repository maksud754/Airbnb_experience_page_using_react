import photogrid from "../images/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero-section">
            <img src={photogrid} alt="photogrid" className="hero-photo" />
            <h1 className="hero-header">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}