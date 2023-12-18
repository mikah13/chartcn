'use client'
import React from 'react'

import {
	Line,
	LineChart as LineRechart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip as DefaultTooltip,
	Legend,
	CartesianGrid,
} from 'recharts'
import Tooltip from './Tooltip'
import { LineChartProps } from '@/app/types'

const LineChart = ({
	showTooltip = true,
	showLegend = true,
	showGrid = false,
	width = '100%',
	height = 350,
	data,
	colors,
	dataKeys,
	showXLine = true,
	showYLine = true,
}: LineChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<LineRechart data={data}>
				{showTooltip && <DefaultTooltip content={<Tooltip />} />}
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
					<Line
						key={index}
						type="monotone"
						dataKey={dkey}
						stroke={colors ? colors[index] : 'black'}
						strokeWidth={2}
						fillOpacity={1}
						fill={`url(#color-${index})`}
					/>
				))}
			</LineRechart>
		</ResponsiveContainer>
	)
}

export default LineChart
