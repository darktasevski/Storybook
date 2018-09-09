import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from './Form.module.css';
import SubmitButton from '../Buttons/SubmitButton';
import { registerUser } from '../../actions/auth';

const RegisterForm = ({ errors, touched }) => {
	return (
		<Form className={styles.Form}>
			<div className={styles.Form__group}>
				<Field name="email" id="email" placeholder="Email" />
				<div>{touched.email && errors.email && <p className={styles.Form__error}>{errors.email}</p>}</div>
			</div>

			<div className={styles.Form__group}>
				<Field type="password" name="password" id="password" placeholder="Password" />
				<div>
					{touched.password && errors.password && <p className={styles.Form__error}>{errors.password}</p>}
				</div>

				<Field type="password" id="password2" name="password2" placeholder="Confirm password" />
				<div>
					{touched.password2 && errors.password2 && <p className={styles.Form__error}>{errors.password2}</p>}
				</div>
			</div>

			<div className={styles.Form__group}>
				<Field name="firstName" placeholder="First name" id="firstName" />
				<div>
					{touched.firstName && errors.firstName && <p className={styles.Form__error}>{errors.firstName}</p>}
				</div>

				<Field name="lastName" placeholder="Last Name" id="lastName" />
				<div>
					{touched.lastName && errors.lastName && <p className={styles.Form__error}>{errors.lastName}</p>}
				</div>
			</div>
			<SubmitButton text="Register" />
		</Form>
	);
};

RegisterForm.propTypes = {
	errors: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	touched: PropTypes.shape({
		email: PropTypes.bool,
		password: PropTypes.bool,
		password2: PropTypes.bool,
		firstName: PropTypes.bool,
		lastName: PropTypes.bool,
	}),
};

// withFormik HOC
const FormikRegister = withFormik({
	mapPropsToValues({ email, password, passwordConfirm, firstName, lastName }) {
		return {
			email: email || '',
			firstName: firstName || '',
			lastName: lastName || '',
			password: password || '',
			password2: passwordConfirm || '',
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email('Email not valid')
			.required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be 6 characters or longer')
			.matches(
				// https://stackoverflow.com/a/33670927/7453363
				/^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/,
				'Password must contain at least one number, one uppercase letter and one special character'
			)
			.required('Password is required'),
		password2: Yup.mixed().test('Match', 'Passwords do not match', function() {
			return this.parent.password2 === this.parent.password;
		}),
		firstName: Yup.string()
			.min(2, 'First name must be 2 characters or longer')
			.required('Your name is required'),
		lastName: Yup.string()
			.min(2, 'Last name must be 2 characters or longer')
			.required('Your Last name is required'),
	}),
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		const userData = {
			email: values.email,
			firstName: values.firstName,
			lastName: values.lastName,
			pass: values.password,
		};
		props.registerUser(userData, props.changeTab);
		resetForm();
		setSubmitting(false);
	},
})(RegisterForm);

const mapDispatchToProps = dispatch => ({
	registerUser: (userData, cb) => dispatch(registerUser(userData, cb)),
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(FormikRegister)
);
