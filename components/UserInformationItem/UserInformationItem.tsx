import { FC } from 'react'
import styles from './UserInformationItem.module.scss'
import { IUserInformationItemProps } from './userInformationItem.interface'

const UserInformationItem: FC<IUserInformationItemProps> = ({ icon, text }) => {
	return (
		<div className={styles.item}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.text}>{text}</div>
		</div>
	)
}

export default UserInformationItem
