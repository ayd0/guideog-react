import { Drawer } from "./styles/Drawer.styled";

const Sidebar = ({ direction, sidebarData }) => {
    return (
        <Drawer direction={direction}>
            <ul>
                {sidebarData().map((item, index) => {
                    return (
                        <li key={index}>
                            {item.direction === "left" ? (
                                <>
                                    {item.title}
                                    {item.icon}
                                </>
                            ) : (
                                <>
                                    {item.icon}
                                    {item.title}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Drawer>
    );
}

export default Sidebar;