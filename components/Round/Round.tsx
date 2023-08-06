import React from 'react'
import Bet from '../Bet/Bet'
import CurrentRound from '../CurrentRound/CurrentRound'
import styles from './Round.module.scss'
import Table from '../Title/Title'
import Speed from '../Speed/Speed'

export default function Round() {
	return (
		<div className={styles.wrapper}>
			<Bet />
			<CurrentRound />
			<Speed />
		</div>
	)
}
