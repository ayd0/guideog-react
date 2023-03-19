import { useSelector } from "react-redux";
import { Col, Button } from "reactstrap";
import { selectExploreListById } from "./exploreSlice";

const ExploreList = ({ id }) => {
    const list = useSelector(selectExploreListById(id));
    let uuid = id * 100;
    let toggler = true;

    return (
        <>
            {list ? (
                list.map((item) => {
                    return (
                        <Col key={++uuid}>
                            <Button block className={`explore-btn ${toggler ? 'btn-stagger' : 'btn-secondary'}`}>{item}</Button>
                            {toggler = !toggler}
                        </Col>
                    );
                })
            ) : (
                <Col key={++uuid}>
                    <Button block>Error: Failed to Load Content</Button>
                </Col>
            )}
        </>
    );
};

export default ExploreList;