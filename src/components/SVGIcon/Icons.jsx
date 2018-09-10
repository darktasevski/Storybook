/* eslint-disable  */
import React from 'react';

export const CloseIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 512 512" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || 'currentColor'} {...rest}>
				<path d="M399.963 436.058l32.022-31.974-326.517-328.69-31.236 34.455 325.731 326.209z" />
				<path d="M77.104 404.584l31.975 32.022 328.689-326.518-34.455-31.235-326.21 325.731z" />
			</g>
		</svg>
	);
};

export const Edit2 = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 26 26" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || '#000'}
				{...rest}
				d="M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25zm-3.75 2.594l-1.563 1.5 6.875 6.875L23.25 9.75zM13.78 5.438L2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75zm2.375 2.406l-10.968 11 1.593.343.219 1.47 11-10.97z"
			/>
		</svg>
	);
};

export const ShareSquare = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || 'currentColor'}
				{...rest}
				d="M1133 1101l352-352q19-19 19-45t-19-45l-352-352q-30-31-69-14-40 17-40 59v160q-119 0-216 19.5t-162.5 51-114 79T455 757t-44.5 109T389 977.5t-5 110.5q0 181 167 404 11 12 25 12 7 0 13-3 22-9 19-33-44-354 62-473 46-52 130-75.5t224-23.5v160q0 42 40 59 12 5 24 5 26 0 45-19zm531-685v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
			/>
		</svg>
	);
};

export const ShareSquareO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || 'currentColor'}
				{...rest}
				d="M1472 989v259q0 119-84.5 203.5T1184 1536H352q-119 0-203.5-84.5T64 1248V416q0-119 84.5-203.5T352 128h255q13 0 22.5 9.5T639 160q0 27-26 32-77 26-133 60-10 4-16 4H352q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29 28-13 54-37 16-16 35-8 21 9 21 29zm237-496l-384 384q-18 19-45 19-12 0-25-5-39-17-39-59V640h-160q-323 0-438 131-119 137-74 473 3 23-20 34-8 2-12 2-16 0-26-13-10-14-21-31t-39.5-68.5T376 1068t-38.5-114T320 832q0-49 3.5-91t14-90 28-88 47-81.5 68.5-74 94.5-61.5T700 297.5 859.5 267t196.5-11h160V64q0-42 39-59 13-5 25-5 26 0 45 19l384 384q19 19 19 45t-19 45z"
			/>
		</svg>
	);
};

export const Spinner = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || 'currentColor'}
				{...rest}
				d="M526 1394q0 53-37.5 90.5T398 1522q-52 0-90-38t-38-90q0-53 37.5-90.5T398 1266t90.5 37.5T526 1394zm498 206q0 53-37.5 90.5T896 1728t-90.5-37.5T768 1600t37.5-90.5T896 1472t90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5T192 1024t-90.5-37.5T64 896t37.5-90.5T192 768t90.5 37.5T320 896zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5T1266 1394t37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5T1600 1024t-90.5-37.5T1472 896t37.5-90.5T1600 768t90.5 37.5T1728 896zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136T896 0t136 56 56 136zm530 206q0 93-66 158.5T1394 622q-93 0-158.5-65.5T1170 398q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
			/>
		</svg>
	);
};

export const Spinner2 = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 100 100">
			<path
				fill={props.fill || 'currentColor'}
				{...rest}
				d="M67.092 65.39c8.498-9.438 7.736-23.984-1.702-32.482s-23.984-7.736-32.482 1.702m2.898 2.61c7.026-7.803 19.097-8.507 26.974-1.414s8.44 19.171 1.414 26.974"
			/>
		</svg>
	);
};
