'use client'
import React from 'react'

import {
	Bar,
	BarChart as BarRechart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip as DefaultTooltip,
	Legend,
	CartesianGrid,
} from 'recharts'
import Tooltip from './Tooltip'
import { BarChartProps } from '@/app/types'

const BarChart = ({
	showTooltip = true,
	showLegend = true,
	showGrid = false,
	width = '100%',
	height = 350,
	data,
	colors,
	dataKeys,
	stack = false,
	showXLine = true,
	showYLine = true,
}: BarChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<BarRechart data={data}>
				{showTooltip && (
					<DefaultTooltip cursor={{ fill: 'transparent' }} content={<Tooltip />} />
				)}
				{showGrid && <CartesianGrid strokeDasharray="3 3" />}
				{showLegend && <Legend />}
				<XAxis
					padding={{ left: 16 }}
					dataKey="xAxis"
					axisLine={showXLine}
					tickLine={false}
				/>
				<YAxis axisLine={showYLine} tickLine={false} />
				{dataKeys.map((dkey, index) => (
					<Bar
						radius={[4, 4, 0, 0]}
						key={index}
						stackId={stack ? 1 : index}
						dataKey={dkey}
						fill={colors ? colors[index] : 'black'}
						fillOpacity={1}
					/>
				))}
			</BarRechart>
		</ResponsiveContainer>
	)
}

export default BarChart
