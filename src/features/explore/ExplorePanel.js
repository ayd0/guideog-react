import { useState } from "react";
import { Col, Navbar, NavItem, Nav, NavLink } from "reactstrap";
import ExploreList from "./ExploreList";

const ExplorePanel = ({ header, id }) => {
    const updateListItems = (id) => {
        setListItems(<ExploreList id={id} />);
    };

    const [listItems, setListItems] = useState(<ExploreList id={(id *= 3)} />);

    return (
        <Col lg="6" className="text-center">
            <h2 className="display-4">{header}</h2>
            <div>
                <Navbar dark expand className="explore-nav">
                    <Nav id={header.toLowerCase()} className="mx-auto">
                        <NavItem onClick={() => updateListItems(id)}>
                            <NavLink>
                                <h5 className="d-flex align-items-center link-active left-link">
                                    New <i className="fa fa-tag fa-2x" />
                                </h5>
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => updateListItems(id + 1)}>
                            <NavLink>
                                <h5 className="d-flex align-items-center">
                                    Rising <i className="fa fa-rocket fa-2x" />
                                </h5>
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => updateListItems(id + 2)}>
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
