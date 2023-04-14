import '../Main.css';
import MainNav from '../components/MainNav';
import Sidebar from '../components/Sidebar';
import { leftSidebarData, rightSidebarData } from '../components/data/SidebarData';

const MainPage = () => {
    document.body.style = 'background: rgb(13,25,31);'
    const navHeight = 50;
    return (
        <>
            <MainNav navHeight={navHeight} />
            <Sidebar direction="left" sidebarData={leftSidebarData} navHeight={navHeight} />
            <Sidebar direction="right" sidebarData={rightSidebarData} navHeight={navHeight} />
        </>
    );
};

export default MainPage;
