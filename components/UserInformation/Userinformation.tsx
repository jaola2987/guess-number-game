'use client'

import React, { useEffect, useState } from 'react'
import UserInformationItem from '../UserInformationItem/UserInformationItem'
import styles from './UserInformation.module.scss'
import { FiClock } from 'react-icons/fi'
import { FaMedal, FaUserNinja } from 'react-icons/fa'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import useCuttertTime from '@/app/hooks/useCuttertTime'

export default function Userinformation() {
	const { user, coints } = useGlobalProviderContext()
	const { time } = useCuttertTime()

	return (
		<div className={styles.itemsWrapper}>
			<UserInformationItem
				icon={<FaMedal size={24} />}
				text={user ? coints : ''}
			/>
			<UserInformationItem icon={<FaUserNinja size={24} />} text={user} />
			<UserInformationItem
				icon={<FiClock size={24} />}
				text={user ? time : ''}
			/>
		</div>
	)
}
