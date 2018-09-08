import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import avatarImg from '../../assets/avatar.jpg';
import { fetchUser } from '../../actions/user';
import styles from './Profile.module.css';

class Profile extends Component {
	componentDidMount = () => {
		const { id } = this.props.match.params;
		this.props.fetchUser(id);
	};

	render() {
		const { user } = this.props;
		return (
			<section className={styles.Profile}>
				<img src={avatarImg} alt="Avatar" />
				<h1 className={styles.Profile__heading}>
					{user.firstName} {user.lastName}
				</h1>
				<p className={styles.Profile__email}>{user.email}</p>
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
	user: state.users.profile,
});

const mapDispatchToProps = dispatch => ({
	fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Profile)
);
