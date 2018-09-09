import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createStory } from '../../actions/story';
import styles from './StoryForm.module.css';

import SubmitButton from '../Buttons/SubmitButton';

const schema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Title must have at least 2 characters')
		.max(50, 'Title is limited to 50 characters')
		.required('Title is required'),
	body: Yup.string()
		.min(10, 'Story must have at least 10 characters')
		.max(255, 'Story is limited to 255 characters')
		.required('Story body is required'),
});

class NewStory extends Component {
	state = {
		title: '',
		body: '',
		isValid: false,
	};

	onChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	canSubmit = () => {
		const { title, body } = this.state;
		return title.length >= 10 && title.length <= 50 && body.length >= 10 && body.length <= 255;
	};

	onSubmit = e => {
		e.preventDefault();
		schema
			.isValid({
				title: this.state.title,
				body: this.state.body,
			})
			.then(valid => {
				if (valid) {
					const { user, createStory, history } = this.props;
					const data = {
						posterFirstName: user.firstName,
						posterLastName: user.lastName,
						posterEmail: user.email,
						posterId: user.id,
						body: this.state.body,
						title: this.state.title,
					};
					console.log('data', data);
					createStory(data, history);
					return this.setState({ title: '', body: '' });
				}
			});
	};

	render() {
		const { title, body } = this.state;

		return (
			<section className={styles.StoryForm}>
				<div className={styles.StoryForm__form}>
					<div className={styles.StoryForm__group}>
						<input onChange={this.onChange} type="text" name="title" id="title" placeholder="Story Title" />
						<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
							{title.length > 50 ? 'Title must be between 10 and 50 characters' : null}
						</small>
					</div>
					<div className={styles.StoryForm__group}>
						<textarea
							value={this.state.comment}
							name="body"
							id="body"
							rows="15"
							onChange={this.onChange}
							placeholder="Tell a story..."
						/>
						<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
							{body.length > 255 ? 'Body must be between 10 and 255 characters' : null}
						</small>
					</div>
					<div className={styles.StoryForm__group}>
						<SubmitButton text="Publish Story" big disable={!this.canSubmit()} onClick={this.onSubmit} />
					</div>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	createStory: (data, history) => dispatch(createStory(data, history)),
});

const mapStateToProps = (state, ownProps) => ({
	user: state.auth.user,
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewStory)
);
