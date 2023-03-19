import { Container } from "reactstrap";
import HomeNav from "../components/HomeNav";
import HomeSection from "../components/HomeSection";
import ExploreSection from '../features/explore/ExploreSection';
import HomeFooter from "../components/HomeFooter";
import { hideSignupErrors } from "../utils/validateSignupForm";

const HomePage = () => {
    return (
        <div className="main-overlay" onClick={hideSignupErrors}>
            <HomeNav />
            <HomeSection />
            <ExploreSection />
            <HomeFooter />
        </div>
    );
}

export default HomePage;