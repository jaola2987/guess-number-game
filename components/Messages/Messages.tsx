import { FC } from 'react'
import styles from './Messages.module.scss'
import cn from 'classnames'
import { IMessagePayload } from '../Chat/Chat'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

const arr = [
	{ id: 1, name: 'Natalia', text: 'Hello' },
	{ id: 2, name: 'Volha', text: 'Hello' },
	{ id: 3, name: 'Natalia', text: 'How is it going?' },
	{ id: 4, name: 'Volha', text: 'I am fine. And you?' },
	{ id: 5, name: 'Natalia', text: 'Everything is Ok' },
	{ id: 6, name: 'Volha', text: 'What did you do yesterday?' },
	{ id: 7, name: 'Natalia', text: 'I visited my mother' },
	{ id: 8, name: 'Volha', text: 'Is it far away?' }
]

interface IMessagesProps {
	message: IMessagePayload[]
}

const Messages: FC<IMessagesProps> = ({ message }) => {
	const { userId } = useGlobalProviderContext()
	return (
		<div className={styles.wrapper}>
			{message.length === 0 && <div>No Message</div>}
			{message.length !== 0 &&
				message.map(el => {
					return (
						<p className={styles.messageWrapper} key={el.content}>
							<span
								className={cn(
									styles.author,
									userId ? styles.currentAuthor : styles.visitor
								)}
							>
								{el.msg}
							</span>
							<span className={styles.message}>{el.content}</span>
						</p>
					)
				})}
			{/* {arr.map(el => {
				return (
					<p className={styles.messageWrapper} key={el.id}>
						<span className={cn(styles.author, styles.visitor)}>{el.name}</span>
						<span className={styles.message}>{el.text}</span>
					</p>
				)
			})} */}
		</div>
	)
}

export default Messages
