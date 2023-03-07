export const validateSignupForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email required.';
    }

    if (!values.password) {
        errors.password = 'Password required.'
    }

    if (!values.confirmPassword && values.password) {
        errors.confirmPassword = 'You must confirm your password.';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match.';
    }

    return errors;
};

export const hideSignupErrors = (e) => {
    let selected = e.target;
    const errors = document.querySelectorAll('.signup-error');

    while (selected) {
        if (`${selected.className}`.includes('signup-card')) {
            for (const error of errors) {
                error.style.display = 'block';
            }
            return;
        }
        selected = selected.parentNode;
    }
    for (const error of errors) {
        error.style.display = 'none';
    }
};