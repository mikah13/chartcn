'use client'

import { PieChart as PieRechart, Pie, ResponsiveContainer } from 'recharts'

import { PieChartProps } from '@/app/types'
import Tooltip from './Tooltip'

const PieChart = ({
	width = '100%',
	height = 350,
	data,
	colors,
	dataKeys,
	nameKeys,
	children,
	label = true,
}: PieChartProps) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<PieRechart>
				{children}
				{data.map((data, index) => (
					<Pie
						dataKey={dataKeys[index]}
						nameKey={nameKeys[index]}
						data={data}
						key={index}
						fill={colors ? `${colors[index]}` : 'black'}
						label
					/>
				))}
			</PieRechart>
		</ResponsiveContainer>
	)
}

export default PieChart
