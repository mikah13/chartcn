'use client'
import React from 'react'

import { Bar, BarChart as BarRechart, ResponsiveContainer } from 'recharts'
import { BarChartProps } from '@/app/types'

const BarChart = ({
	width = '100%',
	height = 350,
	data,
	colors,
	dataKeys,
	stack = false,
	children,
}: BarChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<BarRechart data={data}>
				{children}
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
