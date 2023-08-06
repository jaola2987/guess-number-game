import React from 'react'
import Point from '../Point/Point'
import styles from './Bet.module.scss'
import buttonStyles from '@/assets/styles/Button.module.scss'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import cn from 'classnames'

export default function Points() {
	const {
		points,
		handlePointsIncrement,
		handlePointsDecrement,
		multiplier,
		handleMultiplierIncrement,
		handleMultiplierDecrement,
		startBets,
		isBetStoped
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
			<button
				onClick={startBets}
				className={cn(buttonStyles.button, styles.betButton)}
				disabled={!isBetStoped}
			>
				Start
			</button>
		</div>
	)
}
