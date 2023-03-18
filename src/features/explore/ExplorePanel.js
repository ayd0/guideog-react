import { Col, Navbar, NavItem, Nav, NavLink } from "reactstrap"
import ExploreList from "./ExploreList";

const ExplorePanel = ({ header, id }) => {
  const updateListItems = (id) => <ExploreList id={id} /> 

  let listItems = updateListItems(id *= 3);

  return (
      <Col lg="6" className="text-center">
          <h2 className="display-4">{header}</h2>
          <div className='explore-sub p-5'>
            <Navbar dark expand className='explore-nav'>
              <Nav id={header.toLowerCase()} className='mx-auto'>
                <NavItem onClick={() => listItems = updateListItems(id)}>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>New <i className='fa fa-tag fa-2x' /></h5>
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => listItems = updateListItems(id + 1)}>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>Rising <i className='fa fa-rocket fa-2x' /></h5>
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => listItems = updateListItems(id + 2)}>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>Top <i className='fa fa-area-chart fa-2x' /></h5>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <div id={`${header.toLowerCase()}-sub`}>
              {listItems}
            </div>
          </div>
      </Col>
  );
}

export default ExplorePanel;