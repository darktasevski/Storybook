import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import avatarImg from '../../assets/avatar.jpg';
import { fetchUser } from '../../actions/user';
import styles from './Profile.module.css';
import Button from '../Buttons/Button';

class Profile extends Component {
	componentDidMount = () => {
		if (this.props.match.params.id) {
			const { id } = this.props.match.params;
			this.props.fetchUser(id);
		}
	};

	componentWillUnmount = () => {
		this.props.clearProfile();
	};

	render() {
		const btnStyles = {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		};
		const { user, profile } = this.props;
		console.log('profile', user, profile);

		const userData = this.props.location.pathname.includes('/me') ? user : profile;

		return (
			<section className={styles.Profile}>
				{this.props.location.pathname.includes('/me') ? (
					<Button customStyles={btnStyles} text="Edit Profile" small to={`/user/edit/${profile.id}`} />
				) : null}
				<img src={avatarImg} alt="Avatar" />
				<h1 className={styles.Profile__heading}>
					{userData.firstName} {userData.lastName}
				</h1>
				<p className={styles.Profile__email}>{userData.email}</p>
				<h4 className={styles.Profile__heading}>Short bio</h4>
				<p className={styles.Profile__bio}>
					ln nglui Shub-Niggurathoth nafm'latgh orr'e n'ghftog nw nog uh'e naflah shtunggli, nali'hee ya
					nilgh'ri lw'nafhyar ron tharanaknyth ch' phlegeth s'uhn ya 'fhalmaoth, hafh'drn y-y'hah sll'ha
					syha'h gothanyth y-Nyarlathotep nach' ee throd. Orr'e ron f'wgah'n c'ai llllyar goka Azathothagl
					Yoggoth s'uhn uh'e ep, h'hlirgh llll lw'nafh y-shugg ah mg athg uh'e n'ghft shagg, ph'wgah'n
					Azathoth ee ph'uh'e mg naflsgn'wahl ooboshu chtenff nw. Nyarlathotep shagg orr'e cooboshu wgah'n
					nagrah'n ah li'hee h'mnahn' Nyarlathotep shtunggli Chaugnar Faugn 'bthnk gof'nn, 'ai ron llll lloig
					fhtagn y-ehye throd naflHastur R'lyehnyth s'uhn f'syha'h.
				</p>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.users.profile,
	user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
	fetchUser: id => dispatch(fetchUser(id)),
	clearProfile: () => dispatch({ type: 'CLEAR_PROFILE' }),
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Profile)
);
