import React, { Component } from 'react';
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
	};

	onChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
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
					const { currentUser, createComment, id } = this.props;
					const data = {
						posterFirstName: currentUser.firstName,
						posterLastName: currentUser.lastName,
						posterId: currentUser.id,
						body: this.state.comment,
						title: 'Comment title', // Title is not optional...
					};
					console.log('data', data);
					createComment(id, data);
					return this.setState({ comment: '', error: '' });
				} else {
					return this.setState({ error: 'Comment body must be between 10 and 255 characters!' });
				}
			});
	};

	render() {
		const { comment, error } = this.state;

		return (
			<section className={styles.StoryForm}>
				<div className="from__group">
					<input onChange={this.onChange} type="text" name="title" id="title" />
					<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
						{error || null}
					</small>
				</div>
				<div className="form__group">
					<textarea
						value={this.state.comment}
						name="body"
						id="body"
						rows="9"
						onChange={this.onChange}
						placeholder="Write a response..."
					/>
					<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
						{error || null}
					</small>
				</div>
				<SubmitButton text="Submit" disable={!(comment.length >= 10)} onClick={this.onSubmit} />
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	createComment: (id, data) => dispatch(createComment(id, data)),
});

export default connect(
	null,
	mapDispatchToProps
)(NewStory);
