import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import PeopleUse from "../PeopleUse/PeopleUse";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Slider from "../Slider/Slider";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <PeopleUse></PeopleUse>
        </div>
    );
};

export default Home;