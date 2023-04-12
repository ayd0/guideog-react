import '../Main.css';
import Sidebar from '../components/Sidebar';

const MainPage = () => {
    document.body.style = 'background: rgb(18,35,43);'
    return (
        <>
            <Sidebar position='left' />
            <Sidebar position='right' />
        </>
    );
};

export default MainPage;
