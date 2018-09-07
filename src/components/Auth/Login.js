import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import styles from './Login.module.css';
import Button from '../Common/Button';

const LoginForm = ({ errors, touched, closeCallback }) => {
	return (
		<Form className={styles.Login}>
			<div className={styles.Login__form}>
				<div className={styles.Login__form__group}>
					<label className={styles.Login__form__label} htmlFor="email">
						Email
					</label>
					<Field className={styles.Login__form__input} name="email" id="email" placeholder="Email" />
					<div>{touched.email && errors.email && <p>{errors.email}</p>}</div>

					<label className={styles.Login__form__label} htmlFor="pass">
						Password
					</label>
					<Field
						className={styles.Login__form__input}
						type="password"
						name="password"
						id="pass"
						placeholder="Password"
					/>
					<div>{touched.password && errors.password && <p>{errors.password}</p>}</div>
				</div>
				<Button />
			</div>
		</Form>
	);
};

LoginForm.propTypes = {
	errors: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	touched: PropTypes.shape({
		email: PropTypes.bool,
		password: PropTypes.bool,
	}),
	closeCallback: PropTypes.func,
};

const FormikLogin = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || '',
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email('Email not valid')
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
	}),
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		// props.loginUser(values);
		resetForm();
		setSubmitting(false);
	},
})(LoginForm);

const mapDispatchToProps = dispatch => ({
	// loginUser: userData => dispatch(loginUser(userData)),
});

export default connect(
	null,
	mapDispatchToProps
)(FormikLogin);
