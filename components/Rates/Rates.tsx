'use client'

import styles from './Rates.module.scss'
import Authorization from '../Authorization/Authorization'
import Round from '../Round/Round'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

export default function Rates() {
	const { user } = useGlobalProviderContext()

	return (
		<div className={styles.rateWrapper}>
			{user ? <Round /> : <Authorization />}
		</div>
	)
}
