/* eslint-disable  */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createComment } from '../../actions/story';
import styles from './Comment.module.css';
import SubmitButton from '../Buttons/SubmitButton';

const schema = Yup.object().shape({
	comment: Yup.string()
		.min(10, 'Comment must have at least 10 characters')
		.max(255, 'Comment is limited to 255 characters')
		.required('Comment body is required'),
});

class AddComment extends Component {
	state = {
		comment: '',
		error: '',
	};

	onChange = e => {
		this.setState({ comment: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		schema
			.isValid({
				comment: this.state.comment,
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
			<section className={styles.AddComment}>
				<p style={{ textAlign: 'center' }} className={styles.AddComment__error}>
					{error || null}
				</p>
				<textarea
					value={this.state.comment}
					name="comment"
					id="comment"
					rows="5"
					onChange={this.onChange}
					placeholder="Write a response..."
				/>
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
)(AddComment);
