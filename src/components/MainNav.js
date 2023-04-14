import { Topnav } from "./styles/Topnav.style";
import GuideogLogo from "../app/assets/img/guideog-l3-alpha.png"

const MainNav = ({ navHeight }) => {
    return (
        <Topnav navHeight={navHeight}>
            <a href='/'>
                <img src={GuideogLogo} />
            </a>
        </Topnav>
    );
}

export default MainNav;