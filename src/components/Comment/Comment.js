import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import styles from './Comment.module.css';
import avatarImg from '../../assets/avatar.jpg';

export default class Comment extends Component {
	render() {
		console.log(this.props);
		const { comment } = this.props;
		return (
			<article className={styles.Comment}>
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
			</article>
		);
	}
}
