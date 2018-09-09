import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import avatarImg from '../../assets/avatar.jpg';
import { updateUser } from '../../actions/auth';
import styles from './Profile.module.css';
import formStyles from '../Auth/Form.module.css';
import SubmitButton from '../Buttons/SubmitButton';
import Button from '../Buttons/Button';

class EditProfile extends Component {
	render() {
		const { errors, touched, user } = this.props;

		return (
			<section className={styles.Profile}>
				<img src={avatarImg} alt="Avatar" />

				<Form style={{ marginTop: '2rem' }} className={formStyles.Form}>
					<div className={formStyles.Form__group}>
						<Field
							className={formStyles.Login__form__input}
							type="text"
							name="firstName"
							id="firstName"
							placeholder="First Name"
						/>
						<div>
							{touched.firstName &&
								errors.firstName && <p className={formStyles.Form__error}>{errors.firstName}</p>}
						</div>
					</div>
					<div className={formStyles.Form__group}>
						<Field
							className={formStyles.Login__form__input}
							type="lastName"
							name="lastName"
							id="lastName"
							placeholder="Last Name"
						/>
						<div>
							{touched.lastName &&
								errors.lastName && <p className={formStyles.Form__error}>{errors.lastName}</p>}
						</div>
					</div>
					<div className={formStyles.Form__action}>
						<Button small red text="Cancel" to={`/user/${user.id}`} />
						<SubmitButton text="Save changes" />
					</div>
				</Form>
			</section>
		);
	}
}

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
