'use client'

import { useState, useEffect } from 'react'

export default function useCuttertTime() {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
	)

	useEffect(() => {
		const interval = setInterval(
			() =>
				setTime(
					new Date().toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit'
					})
				),
			1000
		)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return { time }
}
