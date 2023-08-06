'use client'

import { useEffect, useState } from 'react'
import styles from './RandomNumber.module.scss'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import cn from 'classnames'

export default function RandomNumber() {
	const { randomNumber, isResultNunber } = useGlobalProviderContext()
	const [num, setNum] = useState(0)

	useEffect(() => {
		setNum(0)
		const interval = setInterval(() => {
			setNum(prevNum => {
				const newNum = prevNum + 0.01
				if (newNum > randomNumber) {
					clearInterval(interval)
				}
				return newNum
			})
		}, 1)
		return () => clearInterval(interval)
	}, [randomNumber])

	return (
		<div className={styles.numberWrapper}>
			<p
				className={cn(
					isResultNunber ? styles.resultNumber : styles.currentNumber,
					styles.number
				)}
			>
				{num.toFixed(2)}
			</p>
			<p
				className={cn(
					isResultNunber ? styles.resultNumber : styles.currentNumber,
					styles.postfix
				)}
			>
				x
			</p>
		</div>
	)
}
