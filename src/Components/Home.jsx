
import HeroSection from "./HeroSection"
import Services from "./Services"
import Trustedpage from "./Trustedpage"
import Featureproducts from "./Featureproducts"
function Home(props) {

    return (
        <>


            <div className="main_home_div">
                <HeroSection name={"Karki Store"} />
                <Featureproducts />
                <Services />
                <Trustedpage />

            </div>


        </>

    )
}

export default Home