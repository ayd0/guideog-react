import { useState } from "react";
import { Col, Navbar, NavItem, Nav, NavLink } from "reactstrap";
import ExploreList from "./ExploreList";

const ExplorePanel = ({ header, id }) => {
    const updateListItems = (id) => {
        setListItems(<ExploreList id={id} />);
    };

    const removeActives = () => {
        let links = document.querySelectorAll(`#${header.toLowerCase()} h5`);
        for (let link of links) {
            link.classList.remove("link-active");
        }
    };

    const setActive = (e) => {
        let tar;
        if (e.target.nodeName === "I") {
            tar = e.target.parentNode;
        } else if (e.target.nodeName === "A") {
            tar = e.target.children[0];
        } else {
            tar = e.target;
        }
        removeActives();
        tar.classList.add("link-active");
    };

    const [listItems, setListItems] = useState(<ExploreList id={(id *= 3)} />);

    return (
        <Col lg="6" className="text-center">
            <h2 className="display-4">{header}</h2>
            <div>
                <Navbar dark expand className="explore-nav">
                    <Nav id={header.toLowerCase()} className="mx-auto">
                        <NavItem
                            onClick={(e) => {
                                updateListItems(id);
                                setActive(e);
                            }}
                        >
                            <NavLink>
                                <h5 className="d-flex align-items-center link-active left-link">
                                    New <i className="fa fa-tag fa-2x" />
                                </h5>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            onClick={(e) => {
                                updateListItems(id + 1);
                                setActive(e);
                            }}
                        >
                            <NavLink>
                                <h5 className="d-flex align-items-center">
                                    Rising <i className="fa fa-rocket fa-2x" />
                                </h5>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            onClick={(e) => {
                                updateListItems(id + 2);
                                setActive(e);
                            }}
                        >
                            <NavLink>
                                <h5 className="d-flex align-items-center right-link">
                                    Top <i className="fa fa-area-chart fa-2x" />
                                </h5>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            <div id={`${header.toLowerCase()}-sub`} className="explore-sub p-5">
                {listItems}
            </div>
        </Col>
    );
};

export default ExplorePanel;
