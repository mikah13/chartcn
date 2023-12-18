export type ChartProps = {
	width?: number | string
	height?: number | string
	showGrid?: boolean
	showLegend?: boolean
	showTooltip?: boolean
	data: DataType[]
	color: string[]
}

export type AreaChartProps = ChartProps & {}

export type DefaultDataType = {
	xAxis?: string
	yAxis?: string
}

export type DataType = DefaultDataType & Record<string, string | number>
