import { useSelector } from "react-redux";
import { Col, Button } from "reactstrap";
import { selectExploreListById } from "./exploreSlice";

const ExploreList = ({ id }) => {
    const list = useSelector(selectExploreListById(id));

    return (
        <>
            {list ? (
                list.map((item) => {
                    return (
                        <Col>
                            <Button block>{item}</Button>
                        </Col>
                    );
                })
            ) : (
                <Col>
                    <Button block>Error: Failed to Load Content</Button>
                </Col>
            )}
        </>
    );
};

export default ExploreList;