import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import SignupForm from "./SignupForm";

const HomeSection = () => {
    return (
        <header id="home-section" className="text-light">
            <Container className="home-inner">
                <Row>
                    <Col lg="8" className="d-none d-lg-block">
                        <h1 className="display-4">
                            Help others <strong>create</strong> comprehensive
                            and in-depth <strong>guides</strong>
                        </h1>
                        <div className="d-flex">
                            <div className="pt-4 mt-4 algin-self-start">
                                <i className="fa fa-archive fa-2x text-orange"></i>
                            </div>
                            <div className="p-4 mt-4 align-self-end">
                                Explore a vast repository of guides which have
                                been found to be the most valuable for their
                                subject, rated by a vast userbase!
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="pt-4 mt-4 algin-self-start">
                                <i className="fa fa-comment fa-2x text-orange"></i>
                            </div>
                            <div className="p-4 mt-4 align-self-end">
                                Contribute to existing{" "}
                                <a href="#" className="header-link">
                                    guides
                                </a>
                                , branch onto them with new{" "}
                                <a href="#" className="header-link">
                                    steps
                                </a>
                                , and submit new additions to add your own
                                knowledge of your most favorite subjects.
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="pt-4 mt-4 algin-self-start">
                                <i className="fa fa-heart fa-2x text-orange"></i>
                            </div>
                            <div className="p-4 mt-4 align-self-end">
                                Promote other users' content to help link
                                together incredible guides in the best ordser
                                possible.
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <Card className="pb-2 text-center signup-card">
                            <CardBody>
                                <h3>
                                    <label htmlFor="signup-email">
                                        Sign up
                                    </label>
                                </h3>
                                <p>
                                    <label htmlFor="signup-email">
                                        Fill out this form to register
                                    </label>
                                </p>
                                <SignupForm />
                                <p>
                                    <small>
                                        By registering an account you agree to
                                        and aknowledge our{" "}
                                        <a href="#">Terms of Service</a> and
                                        site <a href="#">Rules</a>.
                                    </small>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Button outline color='light' id='learn-btn'>See what's popular</Button>
                </Row>
            </Container>
        </header>
    );
};

export default HomeSection;
