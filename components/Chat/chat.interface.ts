interface IMessage {
	id: number
	name: string
	message: string
}

export interface IMessagesPayload {
	content: IMessage
	msg: string
}
