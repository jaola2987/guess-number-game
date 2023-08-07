'use client'

import { FormEvent, useContext, useEffect, useState } from 'react'
import Title from '../Title/Title'
import { HiChatAlt2 } from 'react-icons/hi'
import styles from './Chat.module.scss'
import buttonStyles from '@/assets/styles/Button.module.scss'
import inputStyles from '@/assets/styles/Input.module.scss'
import cn from 'classnames'
import Messages from '../Messages/Messages'
import { WebsocketContext } from '@/providers/SocketContext/SocketIoProvider'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import { IMessagesPayload } from './chat.interface'

export default function Chat() {
	const [value, setValue] = useState('')
	const [message, setMessage] = useState<IMessagesPayload[]>([])
	const socket = useContext(WebsocketContext)

	const { user } = useGlobalProviderContext()

	useEffect(() => {
		socket.on('connect', () => {})
		socket.on('onMessage', newMessage => {
			setMessage(prev => [...prev, newMessage])
		})
		return () => {
			socket.off('connect')
			socket.off('onMessage')
		}
	}, [])

	const onClickHandle = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newVal = {
			id: +new Date(),
			name: user,
			message: value
		}
		socket.emit('newMessage', newVal)
		setValue('')
	}

	return (
		<div className={styles.wrapper}>
			<Title icon={<HiChatAlt2 />} text={'Chat'} />
			<div className={styles.chatBody}>
				<div className={styles.messagesBox}>
					{user && <Messages message={message} />}
				</div>
				<form className={styles.inputWrapper} onSubmit={onClickHandle}>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						className={cn(inputStyles.inputField, styles.chatInput)}
					/>
					<button
						disabled={!user}
						className={cn(buttonStyles.button, styles.button)}
						type="submit"
					>
						Start
					</button>
				</form>
			</div>
		</div>
	)
}
