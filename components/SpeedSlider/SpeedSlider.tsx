'use client'

import { useState } from 'react'
import styles from './SpeedSlider.module.scss'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

const SpeedSlider: React.FC = () => {
	const { speed, handleSpeed } = useGlobalProviderContext()

	const min = 1
	const max = 5
	const range = max - min
	const step = 1

	const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleSpeed(+event.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={speed}
				onChange={handleSpeedChange}
				className={styles.input}
			/>
			<div className={styles.labels}>
				{Array.from({ length: range + 1 }, (_, i) => (
					<label key={i}>{i + min}x</label>
				))}
			</div>
		</div>
	)
}

export default SpeedSlider
