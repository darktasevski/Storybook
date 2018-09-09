import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createComment, updateComment, removeComment } from '../../actions/story';
import styles from './Comment.module.css';
import SubmitButton from '../Buttons/SubmitButton';

const schema = Yup.object().shape({
	comment: Yup.string()
		.min(10, 'Comment must have at least 10 characters')
		.max(255, 'Comment is limited to 255 characters')
		.required('Comment body is required'),
});

class AddComment extends Component {
	static propTypes = {
		currentUser: PropTypes.shape({
			id: PropTypes.number.isRequired,
		}),
		comment: PropTypes.shape({
			id: PropTypes.number.isRequired,
		}),
		createComment: PropTypes.func,
		editMode: PropTypes.bool,
		removeComment: PropTypes.func,
		storyId: PropTypes.number,
		toggleEditMode: PropTypes.func,
		updateComment: PropTypes.func,
	};

	constructor(props) {
		super(props);

		this.state = {
			comment: props.comment ? props.comment.body : '',
			error: '',
		};
	}

	onChange = e => this.setState({ comment: e.target.value });

	onDelete = async () => {
		const { removeComment, toggleEditMode, storyId, comment } = this.props;
		await removeComment(storyId, comment.id);
		return toggleEditMode();
	};

	onSubmit = e => {
		e.preventDefault();
		schema
			.isValid({
				comment: this.state.comment,
			})
			.then(valid => {
				if (valid) {
					const {
						comment,
						createComment,
						currentUser,
						editMode,
						storyId,
						toggleEditMode,
						updateComment,
					} = this.props;
					const data = {
						body: this.state.comment,
						posterFirstName: currentUser.firstName,
						posterId: currentUser.id,
						posterLastName: currentUser.lastName,
						title: 'Comment', // Title is not optional...
					};
					if (editMode && comment) {
						data.id = comment.id;
						updateComment(storyId, data);
						return this.setState({ comment: '', error: '' }, () => toggleEditMode());
					}
					createComment(storyId, data);
					return this.setState({ comment: '', error: '' });
				} else {
					return this.setState({ error: 'Comment body must be between 10 and 255 characters!' });
				}
			});
	};

	render() {
		const { comment, error } = this.state;

		console.log(this.props);

		return (
			<section className={styles.AddComment}>
				<p style={{ textAlign: 'center' }} className={styles.AddComment__error}>
					{error || null}
				</p>
				<textarea
					id="comment"
					name="comment"
					onChange={this.onChange}
					placeholder="Write a response..."
					rows="5"
					value={this.state.comment}
				/>
				<div className={styles.AddComment__ctaGroup}>
					{this.props.editMode && this.props.comment ? (
						<SubmitButton red text="Delete" onClick={this.onDelete} />
					) : null}
					<SubmitButton
						disable={!(comment.length >= 10 && comment.length <= 255)}
						onClick={this.onSubmit}
						text="Submit"
					/>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	createComment: (id, data) => dispatch(createComment(id, data)),
	updateComment: (id, data) => dispatch(updateComment(id, data)),
	removeComment: (storyId, commentId) => dispatch(removeComment(storyId, commentId)),
});

export default connect(
	null,
	mapDispatchToProps
)(AddComment);
