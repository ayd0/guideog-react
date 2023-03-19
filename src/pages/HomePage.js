import { Container } from "reactstrap";
import { useEffect } from "react";
import HomeNav from "../components/HomeNav";
import HomeSection from "../components/HomeSection";
import ExploreSection from '../features/explore/ExploreSection';
import HomeFooter from "../components/HomeFooter";
import { hideSignupErrors } from "../utils/validateSignupForm";
import handleBackgroundScroll from "../utils/handleBackgroundScroll";

const HomePage = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleBackgroundScroll)
  })

    return (
        <div id='home-overlay'>
            <div className="main-overlay" onClick={hideSignupErrors}>
                <HomeNav />
                <HomeSection />
                <ExploreSection />
                <HomeFooter />
            </div>
        </div>
    );
}

export default HomePage;