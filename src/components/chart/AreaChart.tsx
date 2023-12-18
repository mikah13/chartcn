'use client'
import React from 'react'

import {
	Area,
	AreaChart as AreaRechart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip as DefaultTooltip,
	Legend,
	CartesianGrid,
} from 'recharts'
import Tooltip from './Tooltip'
import { AreaChartProps } from '@/app/types'

const AreaChart = ({
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
}: AreaChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<AreaRechart data={data}>
				<defs>
					{colors?.map((color, index) => (
						<linearGradient
							key={`color-${index}`}
							id={`color-${index}`}
							x1="0"
							y1="0"
							x2="0"
							y2="1">
							<stop offset="5%" stopColor={color} stopOpacity={0.2} />
							<stop offset="95%" stopColor={color} stopOpacity={0} />
						</linearGradient>
					))}
				</defs>
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
					<Area
						key={index}
						stackId={stack ? 1 : index}
						type="monotone"
						dataKey={dkey}
						stroke={colors ? colors[index] : 'black'}
						strokeWidth={2}
						fillOpacity={1}
						fill={`url(#color-${index})`}
					/>
				))}
			</AreaRechart>
		</ResponsiveContainer>
	)
}

export default AreaChart
