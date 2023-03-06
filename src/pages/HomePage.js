import { Container } from "reactstrap";
import HomeNav from "../components/HomeNav";
import HomeSection from "../components/HomeSection";

const HomePage = () => {
  return (
      <div className='main-overlay'>
          <HomeNav />
          <HomeSection />
      </div>
  );
}

export default HomePage;