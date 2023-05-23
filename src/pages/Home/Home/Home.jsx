import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Slider from "../Slider/Slider";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <h3>This is home</h3>
        </div>
    );
};

export default Home;