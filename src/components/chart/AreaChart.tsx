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
	showGrid = true,
	data,
}: AreaChartProps) => {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<AreaRechart data={data}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorAc" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#4f2dec" stopOpacity={0.7} />
						<stop offset="95%" stopColor="#4f2dec" stopOpacity={0} />
					</linearGradient>
				</defs>
				{showTooltip && <DefaultTooltip content={<Tooltip />} />}
				<CartesianGrid strokeDasharray="4 1 " />
				<XAxis dataKey={'xAxis'} />
				<YAxis />
				<Area
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
				<Legend />
				<Area
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorPv)"
				/>
				<Area
					type="monotone"
					dataKey="ac"
					stroke="#4f2dec"
					fillOpacity={1}
					fill="url(#colorAc)"
				/>
			</AreaRechart>
		</ResponsiveContainer>
	)
}

export default AreaChart
