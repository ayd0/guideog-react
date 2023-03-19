import { Container, Col } from "reactstrap";
import GuideogIcon from '../app/assets/img/guideog-l3-icon-alpha.png';

const HomeFooter = () => {
  return (
    <div id='home-footer'>
        <Col className='offset-2'>
            Copyright &copy; 2023 <img id='footer-logo' src={GuideogIcon} /> Guideog
        </Col>
    </div>
  );
};

export default HomeFooter;