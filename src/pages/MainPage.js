import '../Main.css';
import Sidebar from '../components/Sidebar';
import { leftSidebarData, rightSidebarData } from '../components/data/SidebarData';

const MainPage = () => {
    document.body.style = 'background: rgb(18,35,43);'
    return (
        <>
            <Sidebar direction='left' sidebarData={leftSidebarData} />
            <Sidebar direction='right' sidebarData={rightSidebarData} />
        </>
    );
};

export default MainPage;
