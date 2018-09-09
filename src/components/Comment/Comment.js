import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import styles from './Comment.module.css';
import avatarImg from '../../assets/avatar.jpg';
import Button from '../Buttons/Button';
import AddComment from './AddComment';

export default class Comment extends Component {
	state = {
		editMode: false,
	};

	toggleEditMode = () => this.setState({ editMode: !this.state.editMode });

	render() {
		const btnStyles = {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		};
		const { comment, storyId, currentUser } = this.props;
		return (
			<article className={styles.Comment}>
				{currentUser.id === comment.posterId ? (
					<Button
						to="#"
						small
						customStyles={btnStyles}
						text={this.state.editMode ? 'Cancel' : 'Edit'}
						onClick={this.toggleEditMode}
					/>
				) : null}

				{!this.state.editMode ? (
					<Fragment>
						<Link to={`/user/${comment.posterId}`}>
							<img src={avatarImg} alt="Comment poster avatar" />
						</Link>
						<div className={styles.Comment__content}>
							<span className={styles.Comment__author}>
								{comment.posterFirstName} {comment.posterLastName}
							</span>
							<span className={styles.Comment__date}> {moment(comment.datetime).fromNow()}</span>
							<p className={styles.Comment__body}>{comment.body}</p>
						</div>
					</Fragment>
				) : (
					<AddComment
						editMode
						toggleEditMode={this.toggleEditMode}
						comment={comment}
						storyId={storyId}
						currentUser={currentUser}
					/>
				)}
			</article>
		);
	}
}
