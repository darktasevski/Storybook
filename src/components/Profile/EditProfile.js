import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { updateUser } from '../../actions/auth';
import avatarImg from '../../assets/avatar.jpg';
import Button from '../Buttons/Button';
import formStyles from '../Auth/Form.module.css';
import styles from './Profile.module.css';
import SubmitButton from '../Buttons/SubmitButton';

const EditProfile = ({ errors, touched }) => (
	<section className={styles.Profile}>
		<img src={avatarImg} alt="Avatar" />

		<Form className={`${formStyles.Form} h-mt-xs`}>
			<div className={formStyles.Form__group}>
				<Field
					className={formStyles.Login__form__input}
					id="firstName"
					name="firstName"
					placeholder="First Name"
					type="text"
				/>
				<div>
					{touched.firstName &&
						errors.firstName && <p className={formStyles.Form__error}>{errors.firstName}</p>}
				</div>
			</div>
			<div className={formStyles.Form__group}>
				<Field
					className={formStyles.Login__form__input}
					id="lastName"
					name="lastName"
					placeholder="Last Name"
					type="lastName"
				/>
				<div>
					{touched.lastName && errors.lastName && <p className={formStyles.Form__error}>{errors.lastName}</p>}
				</div>
			</div>
			<div className={formStyles.Form__action}>
				<Button small red text="Cancel" to={`/auth/me`} />
				<SubmitButton text="Save changes" />
			</div>
		</Form>
	</section>
);

EditProfile.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
	}).isRequired,
	updateUser: PropTypes.func,
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
	updateUser: data => dispatch(updateUser(data)),
});

const editForm = withFormik({
	mapPropsToValues({ user: { firstName, lastName }, ...props }) {
		console.log(props);
		return {
			firstName: firstName || '',
			lastName: lastName || '',
		};
	},
	validationSchema: Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'Name must have at least 2 characters')
			.required('First name is required'),
		lastName: Yup.string()
			.min(2, 'Name must have at least 2 characters')
			.required('Last name is required'),
	}),
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		console.log(props);
		console.log(values);
		const userData = {
			// id: props.user.id,
			email: props.user.email, // Email can't be changed
			firstName: values.firstName,
			lastName: values.lastName,
		};
		props.updateUser(userData);
		resetForm();
		setSubmitting(false);
		props.history.push('/auth/me');
	},
})(EditProfile);

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(editForm)
);
