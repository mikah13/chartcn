export type ChartProps = {
	width?: number | string
	height?: number | string
	showGrid?: boolean
	showLegend?: boolean
	showTooltip?: boolean
	data: DataType[]
	colors?: string[]
	dataKeys: string[]
	showXLine?: boolean
	showYLine?: boolean
}

export type AreaChartProps = ChartProps & {
	stack?: boolean
}

export type LineChartProps = ChartProps & {}

export type BarChartProps = ChartProps & {
	stack?: boolean
}
export type DefaultDataType = {
	xAxis?: string
	yAxis?: string
}

export type DataType = DefaultDataType & Record<string, string | number>
