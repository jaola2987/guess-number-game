import React from 'react'
import Point from '../Point/Point'
import styles from './Bet.module.scss'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

export default function Points() {
	const {
		points,
		handlePointsIncrement,
		handlePointsDecrement,
		multiplier,
		handleMultiplierIncrement,
		handleMultiplierDecrement,
		startBets
	} = useGlobalProviderContext()

	return (
		<div className={styles.wrapper}>
			<div className={styles.pointsWrapper}>
				<Point
					labelText={'Points'}
					value={points}
					incrementValue={handlePointsIncrement}
					decrementValue={handlePointsDecrement}
				/>
				<Point
					labelText={'Multiplier'}
					value={multiplier.toFixed(2)}
					incrementValue={handleMultiplierIncrement}
					decrementValue={handleMultiplierDecrement}
				/>
			</div>
			<button onClick={startBets} className={styles.button}>
				Start
			</button>
		</div>
	)
}
