'use client'

import { FC, useRef, useEffect, useState } from 'react'
import RealtimeLineChart from '@/components/RealtimeLineChart/RealtimeLineChart'
import styles from './Playground.module.scss'
import Userinformation from '../UserInformation/Userinformation'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import FakeLineX from '../RealtimeLineChart/FakeLineX'

const Playground: FC = () => {
	const boxRef = useRef<HTMLDivElement>(null)
	const [chartWidth, setChartWidth] = useState<number | undefined>()

	const { randomNumber, showChart } = useGlobalProviderContext()

	useEffect(() => {
		setChartWidth(boxRef.current?.clientWidth)
	}, [])

	return (
		<div ref={boxRef} className={styles.wrapper}>
			<Userinformation />
			{showChart ? (
				<RealtimeLineChart width={chartWidth} randomNumber={randomNumber} />
			) : (
				<FakeLineX />
			)}
		</div>
	)
}

export default Playground
