'use client'

import React, { useState } from 'react'
import styles from './Authorization.module.scss'
import inputStyles from '@/assets/styles/Input.module.scss'
import cn from 'classnames'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

export default function Authorization() {
	const [inputValue, setInputValue] = useState('')
	const { handleAuth } = useGlobalProviderContext()
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Welcome</div>
			<form
				className={styles.inputWrapper}
				onSubmit={() => handleAuth(inputValue)}
			>
				<label className={styles.fieldLable}>Please Insert Your Name</label>
				<input
					type="text"
					className={cn(inputStyles.inputField, styles.authorizeInput)}
					value={inputValue}
					onChange={e => {
						setInputValue(e.target.value)
					}}
				/>
				<button
					className={styles.submitButton}
					type="submit"
					disabled={!inputValue}
				>
					Accept
				</button>
			</form>
		</div>
	)
}
