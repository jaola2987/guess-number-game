'use client'

import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Line, XAxis } from 'recharts'
import dynamic from 'next/dynamic'
import styles from './RealtimeLineChart.module.scss'
import {
	ICoordinates,
	IRealtimeLineChartProps
} from './realTimeLineChart.interface'
import RandomNumber from '../RamdomNumber/RandomNumber'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), {
	ssr: false
})

const RealtimeLineChart: FC<IRealtimeLineChartProps> = ({
	width,
	randomNumber
}) => {
	const [data, setData] = useState<Array<ICoordinates>>([])
	const { speed } = useGlobalProviderContext()

	useEffect(() => {
		const createdData: Array<ICoordinates> = []
		setData(createdData)
		for (let x = 0; x <= 9; x++) {
			let y = x * x
			if (x > randomNumber) {
				createdData.push({ name: x })
			} else {
				createdData.push({ name: x, pv: y })
			}
		}
		createdData.push({ name: 10, pv: 100 })
		setData(createdData)
	}, [randomNumber])

	const error = console.error
	console.error = (...args: any) => {
		if (/defaultProps/.test(args[0])) return
		error(...args)
	}

	return (
		<div className={styles.chartWrapper}>
			{/* <button onClick={restartAnimation}>Restart Animation</button> */}
			<RandomNumber />

			<LineChart
				width={width}
				height={337}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<XAxis dataKey="name" />
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#f14e5f"
					animationBegin={1000}
					animationDuration={speed * 3000}
					strokeWidth={3}
					dot={false}
				/>
			</LineChart>
		</div>
	)
}

export default memo(RealtimeLineChart)
