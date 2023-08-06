import { FC } from 'react'
import { IUserInformationItemProps } from '../UserInformationItem/userInformationItem.interface'
import styles from './Title.module.scss'

const Title: FC<IUserInformationItemProps> = ({ icon, text }) => {
	return (
		<div className={styles.wrapper}>
			{icon} {text}
		</div>
	)
}

export default Title
