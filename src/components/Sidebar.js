import { useState } from "react";
import { Drawer } from "./styles/Drawer.styled";

const Sidebar = ({ direction, sidebarData }) => {
    const [showDrawer, setShowDrawer] = useState(true);
    const toggleShowDrawer = () => {
        setShowDrawer(!showDrawer);
        console.log(showDrawer, "clicked");
    };

    return (
        <Drawer direction={direction} showDrawer={showDrawer}>
            <i
                className={`fa fa-angle-double-${
                    showDrawer
                        ? direction
                        : direction === "right"
                        ? "left"
                        : "right"
                } show-btn`}
                onClick={toggleShowDrawer}
            />
            <ul>
                {sidebarData().map((item, index) => {
                    return (
                        <li key={index}>
                            {item.direction === "right" ? (
                                <>
                                    {item.icon}
                                    {item.title}
                                </>
                            ) : (
                                <>
                                    {item.title}
                                    {item.icon}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Drawer>
    );
};

export default Sidebar;
