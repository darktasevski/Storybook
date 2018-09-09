// https://github.com/Puritanic/React-Tabs.
import React, { Component } from 'react';
import styles from './Tabs.module.css';

export class Tabs extends Component {
	state = {
		activeIndex: this.props.defaultActiveIndex || 0,
	};

	isControlled() {
		return this.props.activeIndex != null;
	}

	selectTabIndex = activeIndex => {
		this.props.onChange(activeIndex);
		if (!this.isControlled()) {
			this.setState({ activeIndex });
		}
	};

	render() {
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				activeIndex: this.isControlled() ? this.props.activeIndex : this.state.activeIndex,
				onSelectTab: this.selectTabIndex,
			});
		});
		return <div className={styles.Tabs}>{children}</div>;
	}
}

export class TabList extends Component {
	render() {
		const { activeIndex } = this.props;
		const children = React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child, {
				isActive: index === activeIndex,
				onSelect: () => this.props.onSelectTab(index),
			});
		});
		return <div className={styles.tabs}>{children}</div>;
	}
}

export class Tab extends Component {
	render() {
		const { isActive, isDisabled, onSelect } = this.props;

		return (
			<div
				className={
					isDisabled
						? `${styles.tab} ${styles.disabled}`
						: isActive
							? `${styles.tab} ${styles.active}`
							: styles.tab
				}
				onClick={isDisabled ? null : onSelect}
			>
				{this.props.children}
			</div>
		);
	}
}

export class TabPanels extends Component {
	render() {
		const { activeIndex, children } = this.props;
		return <div className={styles.panels}>{children[activeIndex]}</div>;
	}
}

export class TabPanel extends Component {
	render() {
		return this.props.children;
	}
}
