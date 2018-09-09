import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createStory, deleteStory, fetchStories } from '../../actions/story';
import styles from './StoryForm.module.css';

import SubmitButton from '../Buttons/SubmitButton';
import Button from '../Buttons/Button';

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

class StoryForm extends Component {
	state = {
		story: {},
		title: '',
		body: '',
		isValid: false,
	};

	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.fetchStories();
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.stories !== this.props.stories && this.props.stories.length) {
			if (this.props.match.params.id) {
				const { id } = this.props.match.params;
				const story = this.props.stories.find(story => story.id === parseInt(id, 10));

				this.setState({ story });
			}
		}
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
		const { title, body, story } = this.state;

		const btnStyles = {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		};

		console.log(this.props);
		console.log(this.state);

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
						<SubmitButton text="Publish Story" disable={!this.canSubmit()} onClick={this.onSubmit} />
						{story &&
						this.props.location.pathname.includes('edit') &&
						this.props.user.id === story.posterId ? (
							<Button
								customStyles={btnStyles}
								text="Delete Story"
								to="#"
								red
								onClick={() => this.props.deleteStory(story.id, this.props.history)}
							/>
						) : null}
					</div>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	fetchStories: () => dispatch(fetchStories()),
	createStory: (data, history) => dispatch(createStory(data, history)),
	deleteStory: (id, history) => dispatch(deleteStory(id, history)),
});

const mapStateToProps = (state, ownProps) => ({
	user: state.auth.user,
	stories: state.stories.stories,
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(StoryForm)
);
