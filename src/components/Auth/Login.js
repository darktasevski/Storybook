import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import styles from './Login.module.css';
import Button from '../Common/Button';
import { getUserToken } from '../../actions/auth';

const LoginForm = ({ errors, touched }) => {
	return (
		<Form className={styles.Login}>
			<div className={styles.Login__form}>
				<div className={styles.Login__form__group}>
					<label className={styles.Login__form__label} htmlFor="email">
						Email
					</label>
					<Field className={styles.Login__form__input} name="email" id="email" placeholder="Email" />
					<div>
						{touched.email && errors.email && <p className={styles.Login__form__error}>{errors.email}</p>}
					</div>

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
					<div>
						{touched.password &&
							errors.password && <p className={styles.Login__form__error}>{errors.password}</p>}
					</div>
				</div>
			</div>
			<button type="submit">Login</button>
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
		console.log(props);
		props.getUserToken(values.email, values.password, props.history);
		resetForm();
		setSubmitting(false);
	},
})(LoginForm);

const mapDispatchToProps = dispatch => ({
	getUserToken: (email, password, history) => dispatch(getUserToken(email, password, history)),
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(FormikLogin)
);
