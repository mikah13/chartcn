'use client'

import { PieChart as PieRechart, Pie, ResponsiveContainer } from 'recharts'

import { PieChartProps } from '@/app/types'

const PieChart = ({
	width = '100%',
	height = 350,
	data,
	colors,
	dataKeys,
	children,
}: PieChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<PieRechart>
				{children}
				{dataKeys.map((dkey, index) => (
					<Pie
						key={index}
						type="monotone"
						dataKey={dkey}
						stroke={colors ? colors[index] : 'black'}
						strokeWidth={2}
						fillOpacity={1}
						fill={`url(#color-${index})`}
					/>
				))}
			</PieRechart>
		</ResponsiveContainer>
	)
}

export default PieChart
