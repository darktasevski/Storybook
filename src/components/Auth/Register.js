import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.css';

import { registerUser } from '../../actions/auth';

const RegisterForm = ({ errors, touched }) => {
	return (
		<Form className={styles.Form}>
			<div className={styles.Form__group}>
				<Field className="input-block" name="email" id="email" placeholder="Email" />
				<div>{touched.email && errors.email && <p className={styles.Form__error}>{errors.email}</p>}</div>
			</div>

			<div className={styles.Form__group}>
				<Field className="input-block" type="password" name="password" id="password" placeholder="Password" />
				<div>
					{touched.password && errors.password && <p className={styles.Form__error}>{errors.password}</p>}
				</div>

				<Field
					className="input-block"
					type="password"
					id="password2"
					name="password2"
					placeholder="Confirm password"
				/>
				<div>
					{touched.password2 && errors.password2 && <p className={styles.Form__error}>{errors.password2}</p>}
				</div>
			</div>

			<div className={styles.Form__group}>
				<Field className="input-block" name="firstName" placeholder="Full name" id="firstName" />
				<div>
					{touched.firstName && errors.firstName && <p className={styles.Form__error}>{errors.firstName}</p>}
				</div>

				<Field className="input-block" name="lastName" placeholder="lastName" id="lastName" />
				<div>
					{touched.lastName && errors.lastName && <p className={styles.Form__error}>{errors.lastName}</p>}
				</div>
			</div>

			<button type="submit">Register</button>
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
			password: password || '',
			password2: passwordConfirm || '',
			firstName: firstName || '',
			lastName: lastName || '',
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email('Email not valid')
			.required('Email is required'),
		password: Yup.string()
			.min(8, 'Password must be 8 characters or longer')
			.required('Password is required'),
		password2: Yup.mixed().test('Match', 'Passwords do not match', function() {
			return this.parent.password2 === this.parent.password;
		}),
		firstName: Yup.string()
			.min(2, 'firstName must be 2 characters or longer')
			.required('Your name is required'),
		lastName: Yup.string()
			.min(2, 'lastName must be 2 characters or longer')
			.required('Your lastName is required'),
	}),
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		props.registerUser(values, props.history);
		resetForm();
		setSubmitting(false);
	},
})(RegisterForm);

const mapDispatchToProps = dispatch => ({
	registerUser: (userData, history) => dispatch(registerUser(userData, history)),
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(FormikRegister)
);
