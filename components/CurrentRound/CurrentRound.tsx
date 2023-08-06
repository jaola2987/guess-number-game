'use client'

import React from 'react'
import { GiTrophyCup } from 'react-icons/gi'
import styles from './CurrentRound.module.scss'
import tableStyle from '@/assets/styles/Table.module.scss'
import Title from '../Title/Title'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'
import cn from 'classnames'

export default function CurrentRound() {
	const { bets, isResultNunber, randomNumber } = useGlobalProviderContext()
	return (
		<div>
			<Title icon={<GiTrophyCup />} text={'CurrentRound'} />
			<div className={tableStyle.rate}>
				<table>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Point</th>
							<th>Multiplier</th>
						</tr>
						{bets.map((el, index) => {
							return (
								<tr
									className={cn(
										index === 0
											? tableStyle.myRate
											: index % 2 !== 0
											? tableStyle.evenRow
											: tableStyle.oddRow,
										!isResultNunber
											? styles.current
											: randomNumber > +el.multiplier
											? styles.winnerColor
											: styles.lostColor
									)}
									key={el.id}
								>
									<td>{el.name}</td>
									<td>{el.point}</td>
									<td>{el.multiplier}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
