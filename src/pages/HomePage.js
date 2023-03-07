import { Container } from "reactstrap";
import HomeNav from "../components/HomeNav";
import HomeSection from "../components/HomeSection";
import { hideSignupErrors } from "../utils/validateSignupForm";

const HomePage = () => {

  return (
      <div className='main-overlay' onClick={hideSignupErrors}>
          <HomeNav />
          <HomeSection />
      </div>
  );
}

export default HomePage;