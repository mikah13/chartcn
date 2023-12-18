export type ChartProps = {
	height?: number
	showGrid?: boolean
	showLegend?: boolean
	showTooltip?: boolean
	data: DataType[]
}

export type AreaChartProps = ChartProps & {}

export type DataPoint = {
	xAxis: string
	yAxis?: string
}

export type DataType = DataPoint & Record<string, string | number>
