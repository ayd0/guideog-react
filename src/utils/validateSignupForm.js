const validateSignupForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email required.';
    }

    if (!values.password) {
        errors.password = 'Password required.'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'You must confirm your password.';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match.';
    }

    return errors;
};

export default validateSignupForm;