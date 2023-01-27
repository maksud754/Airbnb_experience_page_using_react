import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardphoto from "./images/cardimage.png";
import star from "./images/star.png";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                <Card 
                    img= {cardphoto}
                    star={star}
                    rating= "5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                /> 
                <Card 
                    img= {cardphoto}
                    star={star}
                    rating= "4.5"
                    reviewCount={10}
                    country="Bangladesh"
                    title="Life Lessons with Md Maksudur Rahman"
                    price={100}
                />
                <Card 
                    img= {cardphoto}
                    star={star}
                    rating= "5.0"
                    reviewCount={5}
                    country="Bangladesh"
                    title="Life Lessons with Md Arman Hossen"
                    price={79}
                />
            </div>
        </div>
    )
}