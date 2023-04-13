import { useState } from "react";
import { Drawer, Compartment } from "./styles/Drawer.styled";

const Sidebar = ({ direction, sidebarData }) => {
    const [showDrawer, setShowDrawer] = useState(true);
    const [showCompartment, setShowCompartment] = useState(
        sidebarData().map((item) => false)
    );
    const toggleShowDrawer = () => setShowDrawer(!showDrawer);
    const toggleShowCompartment = (idx) => {
        let compartmentArr = [...showCompartment];
        compartmentArr[idx] = !compartmentArr[idx];
        setShowCompartment(compartmentArr);
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
                        <li
                            key={index}
                            onClick={() => toggleShowCompartment(index)}
                        >
                            {item.subList ? item.direction === "right" ? (
                                <>
                                    {showCompartment[index] ? item.iconAlt : item.icon}
                                    {item.title}
                                </>
                            ) : (
                                <>
                                    {item.title}
                                    {item.icon}
                                </>
                            ) : (
                                <>
                                    {item.title}
                                </>
                            )}
                            {(() => {
                                if (item.subList) {
                                    return (
                                        <Compartment
                                            show={showCompartment[index]}
                                        >
                                            {item.subList.map((item, idx) => {
                                                return (
                                                    <li key={idx}>{item}</li>
                                                );
                                            })}
                                        </Compartment>
                                    );
                                }
                            })()}
                        </li>
                    );
                })}
            </ul>
        </Drawer>
    );
};

export default Sidebar;
