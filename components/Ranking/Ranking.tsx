'use client'

import React from 'react'
import Title from '../Title/Title'
import { FaRankingStar } from 'react-icons/fa6'
import styles from './Rankihg.module.scss'
import tableStyle from '@/assets/styles/Table.module.scss'
import { useGlobalProviderContext } from '@/providers/GlobalContext/GlobalContext'

export default function Ranking() {
	const { ranking, userId } = useGlobalProviderContext()
	return (
		<div className={styles.wrapper}>
			<Title icon={<FaRankingStar />} text={'Ranking'} />
			<div className={styles.rankingTable}>
				<div className={tableStyle.rate}>
					<table>
						<tbody>
							<tr>
								<th>No</th>
								<th>Name</th>
								<th>Score</th>
							</tr>
							{ranking
								.sort((a, b) => +b.score - +a.score)
								.map((el, index) => {
									return (
										<tr
											className={
												el.id === userId
													? tableStyle.myRate
													: index % 2 !== 0
													? tableStyle.evenRow
													: tableStyle.oddRow
											}
											key={el.id}
										>
											<td>{index + 1}</td>
											<td>{el.name}</td>
											<td>{el.score}</td>
										</tr>
									)
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
