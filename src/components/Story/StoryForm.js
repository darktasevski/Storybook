import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createStory, deleteStory, fetchStories, updateStory } from '../../actions/story';
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
	static propTypes = {
		comments: PropTypes.arrayOf(PropTypes.object),
		createStory: PropTypes.func.isRequired,
		deleteStory: PropTypes.func.isRequired,
		fetchStories: PropTypes.func.isRequired,
		stories: PropTypes.arrayOf(PropTypes.object),
		user: PropTypes.shape({ id: PropTypes.number.isRequired }),
	};

	state = {
		story: {
			title: '',
			body: '',
		},
		editMode: false,
	};

	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.fetchStories();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.stories !== this.props.stories && this.props.stories.length) {
			if (this.props.match.params.id) {
				const { id } = this.props.match.params;
				const story = this.props.stories.find(story => story.id === parseInt(id, 10));

				this.setState({ story, editMode: true });
			}
		}
	}

	onChange = e => {
		const { name, value } = e.target;

		this.setState({
			story: {
				...this.state.story,
				[name]: value,
			},
		});
	};

	canSubmit = () => {
		const {
			story: { title, body },
		} = this.state;
		return title.length >= 10 && title.length <= 50 && body.length >= 10 && body.length <= 255;
	};

	onSubmit = e => {
		e.preventDefault();
		const {
			story: { title, body },
		} = this.state;
		schema
			.isValid({
				title: title || '',
				body: body || '',
			})
			.then(valid => {
				if (valid) {
					const { user, createStory, history, updateStory } = this.props;
					const data = {
						title,
						body,
						posterEmail: user.email,
						posterFirstName: user.firstName,
						posterId: user.id,
						posterLastName: user.lastName,
					};
					console.log('data', data);
					if (this.state.editMode) {
						data.id = this.state.story.id;

						updateStory(data, history);
						return this.setState({ story: { title: '', body: '' }, editMode: false });
					}
					createStory(data, history);
					return this.setState({ story: { title: '', body: '' } });
				}
			});
	};

	render() {
		const { location, history, deleteStory, user } = this.props;
		const {
			story: { title, body, id, posterId },
			editMode,
		} = this.state;

		const btnStyles = {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		};

		return (
			<section className={styles.StoryForm}>
				<div className={styles.StoryForm__form}>
					<div className={styles.StoryForm__group}>
						<input
							onChange={this.onChange}
							value={title}
							type="text"
							name="title"
							id="title"
							placeholder="Story Title"
						/>
						<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
							{title.length > 50 ? 'Title must be between 10 and 50 characters' : null}
						</small>
					</div>
					<div className={styles.StoryForm__group}>
						<textarea
							id="body"
							name="body"
							onChange={this.onChange}
							placeholder="Tell a story..."
							rows="15"
							value={body}
						/>
						<small style={{ textAlign: 'center' }} className={styles.StoryForm__error}>
							{body.length > 255 ? 'Body must be between 10 and 255 characters' : null}
						</small>
					</div>
					<div className={styles.StoryForm__group}>
						<SubmitButton
							text={editMode ? 'Save changes' : 'Publish Story'}
							disable={!this.canSubmit()}
							onClick={this.onSubmit}
						/>
						{location.pathname.includes('edit') && user.id === posterId ? (
							<Button
								customStyles={btnStyles}
								onClick={() => deleteStory(id, history)}
								red
								text="Delete Story"
								to="#"
							/>
						) : null}
					</div>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	createStory: (data, history) => dispatch(createStory(data, history)),
	deleteStory: (id, history) => dispatch(deleteStory(id, history)),
	fetchStories: () => dispatch(fetchStories()),
	updateStory: (storyData, history) => dispatch(updateStory(storyData, history)),
});

const mapStateToProps = state => ({
	user: state.auth.user,
	stories: state.stories.stories,
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(StoryForm)
);
