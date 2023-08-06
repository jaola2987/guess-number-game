'use client'

import {
	FC,
	createContext,
	useContext,
	useState,
	useEffect,
	useMemo,
	PropsWithChildren,
	useCallback
} from 'react'
import { IBet, IGlobalContextProps, IRanking } from './globalContext.interface'

const GlobalContext = createContext({} as IGlobalContextProps)

const userId = +new Date()

const initialMockData = [
	{ id: userId, name: 'You', point: '-', multiplier: '-' },
	{ id: 1, name: 'CRU 1', point: '-', multiplier: '-' },
	{ id: 2, name: 'CRU 2', point: '-', multiplier: '-' },
	{ id: 3, name: 'CRU 3', point: '-', multiplier: '-' },
	{ id: 4, name: 'CRU 4', point: '-', multiplier: '-' }
]

const initialMockRanking = [
	{ id: userId, name: '-', score: '-' },
	{ id: 1, name: '-', score: '-' },
	{ id: 2, name: '-', score: '-' },
	{ id: 3, name: '-', score: '-' },
	{ id: 4, name: '-', score: '-' }
]

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState('')
	const [coints, setCoints] = useState(1000)
	const [points, setPoints] = useState(50)
	const [multiplier, setMultiplier] = useState(1)
	const [speed, setSpeed] = useState(1)
	const [bets, setBets] = useState<IBet[]>(initialMockData)
	const [ranking, setrRanking] = useState<IRanking[]>(initialMockRanking)
	const [randomNumber, setRandomNumber] = useState(0)
	const [showChart, setShowChart] = useState(false)
	const [isResultNunber, setIsResultNunber] = useState(false)
	const [isBetStoped, setIsBetStoped] = useState(true)

	const handleAuth = useCallback((e: string) => setUser(e), [])

	const handleCoints = useCallback((e: number) => setCoints(e), [])

	const handlePointsIncrement = useCallback(
		() => setPoints(prev => prev + 25),
		[]
	)

	const handlePointsDecrement = useCallback(
		() => setPoints(prev => (prev - 25 < 0 ? 0 : prev - 25)),
		[]
	)

	const handleMultiplierIncrement = useCallback(
		() => setMultiplier(prev => prev + 0.25),
		[]
	)

	const handleMultiplierDecrement = useCallback(
		() => setMultiplier(prev => (prev - 0.25 < 0 ? 0 : prev - 0.25)),
		[]
	)

	const getRandomNumber = () => {
		const number = +(Math.random() * 10).toFixed(2)
		return number
	}

	const handleSpeed = useCallback((e: number) => setSpeed(e), [])

	const resultBets = (fulfiledBets: IBet[], num: number) => {
		const updatedPoints = fulfiledBets.map(bet => {
			if (num > +bet.multiplier) {
				bet.point = +bet.point * +bet.multiplier
			} else {
				bet.point = 0
			}
			if (bet.id === userId) {
				if (num > +bet.multiplier) {
					setCoints(prev => prev + +bet.point)
				}
			}
			return bet
		})
		setBets([...updatedPoints])
	}

	const getRanking = (fulfiledBets: IBet[]) => {
		const updatedRanking = fulfiledBets.map(bet => {
			return { id: bet.id, name: bet.name, score: bet.point }
		})
		setrRanking([...updatedRanking])
	}

	const startBets = useCallback(() => {
		setIsBetStoped(false)
		setCoints(prev => prev - points)
		const mockData = [
			{ id: 1, name: 'CRU 1', point: 100, multiplier: 7.53 },
			{ id: 2, name: 'CRU 2', point: 100, multiplier: 1.24 },
			{ id: 3, name: 'CRU 3', point: 100, multiplier: 6.84 },
			{ id: 4, name: 'CRU 4', point: 100, multiplier: 9.75 }
		]
		const fulfiledBets = [
			{ id: userId, name: 'You', point: points, multiplier },
			...mockData
		]
		setBets(fulfiledBets)
		setShowChart(true)
		const num = getRandomNumber()
		setRandomNumber(num)
		setIsResultNunber(false)

		setTimeout(() => {
			resultBets(fulfiledBets, num)
			getRanking(fulfiledBets)
			setIsResultNunber(true)
			setIsBetStoped(true)
		}, speed * 3000)
	}, [points, multiplier, speed])

	const providerValue = useMemo(
		() => ({
			user,
			handleAuth,
			coints,
			handleCoints,
			points,
			handlePointsIncrement,
			handlePointsDecrement,
			multiplier,
			handleMultiplierIncrement,
			handleMultiplierDecrement,
			speed,
			handleSpeed,
			bets,
			startBets,
			ranking,
			userId,
			randomNumber,
			showChart,
			isResultNunber,
			isBetStoped
		}),
		[
			user,
			handleAuth,
			coints,
			handleCoints,
			points,
			handlePointsIncrement,
			handlePointsDecrement,
			multiplier,
			handleMultiplierIncrement,
			handleMultiplierDecrement,
			speed,
			handleSpeed,
			bets,
			startBets,
			ranking,
			randomNumber,
			showChart,
			isResultNunber,
			isBetStoped
		]
	)
	return (
		<GlobalContext.Provider value={providerValue}>
			{children}
		</GlobalContext.Provider>
	)
}

export function useGlobalProviderContext() {
	const context = useContext(GlobalContext)
	if (context === undefined) {
		throw new Error('Context must be used within a Provider')
	}
	return context
}
