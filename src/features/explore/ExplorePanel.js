import { Col, Navbar, NavItem, Nav, NavLink, Button } from "reactstrap"
import { useSelector } from "react-redux";
import { getNewCategories } from "./exploreSlice";

const ExplorePanel = ({ header }) => {
  const items = useSelector((state) => getNewCategories(state));
  const newCategories = items.filter(item => item.listType === 'categories-new');

  return (
      <Col lg="6" className="text-center">
          <h2 class="display-4">{header}</h2>
          <div class='explore-sub p-5'>
            <Navbar dark expand className='explore-nav'>
              <Nav id={header.toLowerCase()} className='mx-auto'>
                <NavItem>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>New <i className='fa fa-tag fa-2x' /></h5>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>Rising <i className='fa fa-rocket fa-2x' /></h5>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <h5 className='d-flex align-items-center'>Top <i className='fa fa-area-chart fa-2x' /></h5>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <div id={`${header.toLowerCase()}-sub`}>
              <Button block className='text-left'>c/ Programming</Button>
            </div>
          </div>
      </Col>
  );
}

export default ExplorePanel;