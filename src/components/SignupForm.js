import { Button, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validateSignupForm from "../utils/validateSignupForm";

const SignupForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        resetForm();
    };

    // Add click handling for signup error messages when an item outside the signup card is clicked it will set their display to none, and block when it is clicked
    // This may be able to be achieved by calling resetForm()

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={handleSubmit}
            validate={validateSignupForm}
        >
            <Form>
                <FormGroup row>
                    <Col md="11" className="mx-auto">
                        <Field
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            type="email"
                        />
                        <ErrorMessage name="email">
                            {(msg) => (
                                <p className="text-danger signup-error">
                                    {msg}
                                </p>
                            )}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="11" className="mx-auto">
                        <Field
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            type="password"
                        />
                        <ErrorMessage name="password">
                            {(msg) => (
                                <p className="text-danger signup-error">
                                    {msg}
                                </p>
                            )}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="11" className="mx-auto">
                        <Field
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            type="password"
                        />
                    </Col>
                    <ErrorMessage name="confirmPassword" className="mb-0">
                        {(msg) => (
                            <p className="text-danger signup-error">{msg}</p>
                        )}
                    </ErrorMessage>
                </FormGroup>
                <FormGroup row>
                    <Col md="11" className="mx-auto">
                        <Button type="submit" block outline color="light">
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default SignupForm;