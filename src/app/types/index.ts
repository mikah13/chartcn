import { JSXElementConstructor, ReactElement } from 'react'
import { Payload } from 'recharts/types/component/DefaultLegendContent'
import { LayoutType } from 'recharts/types/util/types'

export type ChartProps = {
	width?: number | string
	height?: number | string
	data: DataType[]
	colors?: string[]
	dataKeys: string[]
	children?: React.ReactNode
}

export type AreaChartProps = ChartProps & {
	stack?: boolean
}

export type LineChartProps = ChartProps & {}
export type PieChartProps = Omit<ChartProps, 'data'> & {
	data: Record<string, string | number>[][]
	label?: boolean
	nameKeys: string[]
}

export type BarChartProps = ChartProps & {
	stack?: boolean
}
export type DefaultDataType = {
	xAxis?: string
	yAxis?: string
}

export type DataType = DefaultDataType & Record<string, string | number>
