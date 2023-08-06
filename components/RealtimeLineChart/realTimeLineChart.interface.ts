export interface ICoordinates {
	name: number
	pv?: number
}

export interface IRealtimeLineChartProps {
	width: number | undefined
	randomNumber: number
	createdData?: ICoordinates[]
}
