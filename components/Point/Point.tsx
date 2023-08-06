'use client'

import { FC, useState } from 'react'
import styles from './Point.module.scss'
import inputStyles from '@/assets/styles/Input.module.scss'
import { IPointProps } from './point.interface'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import cn from 'classnames'

const Point: FC<IPointProps> = ({
	labelText,
	value,
	incrementValue,
	decrementValue
}) => {
	return (
		<div className={styles.wrapper}>
			<label className={styles.fieldLable}>{labelText}</label>
			<div className={styles.inputAndButtonsWrapper}>
				<button onClick={decrementValue} className={styles.incrementButton}>
					<BiSolidDownArrow size={14} />
				</button>
				<div className={cn(inputStyles.inputField, styles.inputPoints)}>
					{value}
				</div>

				<button onClick={incrementValue} className={styles.incrementButton}>
					<BiSolidUpArrow size={14} />
				</button>
			</div>
		</div>
	)
}

export default Point
