export interface IBet {
	id: number
	name: string
	point: number | string
	multiplier: number | string
}

export interface IRanking {
	id: number
	name: string
	score: number | string
}

export interface IGlobalContextProps {
	user: string
	handleAuth: (e: string) => void
	coints: number
	handleCoints: (e: number) => void
	points: number
	handlePointsIncrement: () => void
	handlePointsDecrement: () => void
	multiplier: number
	handleMultiplierIncrement: () => void
	handleMultiplierDecrement: () => void
	speed: number
	handleSpeed: (e: number) => void
	bets: IBet[]
	startBets: () => void
	ranking: IRanking[]
	userId: number
	randomNumber: number
	showChart: boolean
	isResultNunber: boolean
}
