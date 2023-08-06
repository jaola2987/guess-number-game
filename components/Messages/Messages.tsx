import { FC, useEffect, useRef } from 'react'
import styles from './Messages.module.scss'
import cn from 'classnames'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import { IMessagesPayload } from '../Chat/chat.interface'

const arr = [
	{ msg: 'New Message', content: { id: 1, name: 'Natalia', message: 'Hello' } },
	{ msg: 'New Message', content: { id: 2, name: 'Volha', message: 'Hello' } },
	{
		msg: 'New Message',
		content: { id: 3, name: 'Natalia', message: 'How is it going?' }
	},
	{
		msg: 'New Message',
		content: { id: 4, name: 'Volha', message: 'I am fine. And you?' }
	},
	{
		msg: 'New Message',
		content: { id: 5, name: 'Natalia', message: 'Everything is Ok' }
	},
	{
		msg: 'New Message',
		content: { id: 6, name: 'Volha', message: 'What did you do yesterday?' }
	},
	{
		msg: 'New Message',
		content: { id: 7, name: 'Natalia', message: 'I visited my mother' }
	},
	{
		msg: 'New Message',
		content: { id: 8, name: 'Volha', message: 'Is it far away?' }
	}
]

interface IMessagesProps {
	message: IMessagesPayload[]
}

const Messages: FC<IMessagesProps> = ({ message }) => {
	const { userId } = useGlobalProviderContext()
	const messagesEndRef = useRef<HTMLDivElement | null>(null)

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(scrollToBottom, [message])

	const currentMessages = message.length !== 0 ? message : arr

	return (
		<div className={styles.wrapper}>
			{currentMessages.map(el => {
				return (
					<p className={styles.messageWrapper} key={el.content.id}>
						<span
							className={cn(
								styles.author,
								userId ? styles.currentAuthor : styles.visitor
							)}
						>
							{el.content.name}
						</span>
						<span className={styles.message}>{el.content.message}</span>
					</p>
				)
			})}
			<div ref={messagesEndRef} />
		</div>
	)
}

export default Messages
