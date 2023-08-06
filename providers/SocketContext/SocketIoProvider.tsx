'use client'

import { createContext, FC, PropsWithChildren } from 'react'
import { io, Socket } from 'socket.io-client'

export const socket = io('http://localhost:4400')
export const WebsocketContext = createContext<Socket>(socket)

const SocketIoProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<WebsocketContext.Provider value={socket}>
			{children}
		</WebsocketContext.Provider>
	)
}

export default SocketIoProvider
