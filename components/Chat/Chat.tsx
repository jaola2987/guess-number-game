'use client'

import { useContext, useEffect, useState } from 'react'
import Title from '../Title/Title'
import { HiChatAlt2 } from 'react-icons/hi'
import styles from './Chat.module.scss'
import inputStyles from '@/assets/styles/Input.module.scss'
import cn from 'classnames'
import Messages from '../Messages/Messages'
import { WebsocketContext } from '@/providers/SocketContext/SocketIoProvider'

export interface IMessagePayload {
	content: string
	msg: string
}

export default function Chat() {
	const [value, setValue] = useState('')
	const [message, setMessage] = useState<IMessagePayload[]>([])
	const socket = useContext(WebsocketContext)

	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connect!')
		})
		socket.on('onMessage', newMessage => {
			console.log('onMessage received')
			console.log(newMessage)
			setMessage(prev => [...prev, newMessage])
		})
		return () => {
			console.log('Unreg...')
			socket.off('connect')
			socket.off('onMessage')
		}
	}, [])

	const onClickHandle = () => {
		socket.emit('newMessage', value)
		setValue('')
	}

	return (
		<div className={styles.wrapper}>
			<Title icon={<HiChatAlt2 />} text={'Chat'} />
			<div className={styles.chatBody}>
				<div className={styles.messagesBox}>
					<Messages message={message} />
				</div>
				<div className={styles.inputWrapper}>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						className={cn(inputStyles.inputField, styles.chatInput)}
					/>
					<button
						onClick={onClickHandle}
						className={styles.button}
						type="submit"
					>
						Start
					</button>
				</div>
			</div>
		</div>
	)
}
