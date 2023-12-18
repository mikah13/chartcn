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

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		ac: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		ac: 2400,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		ac: 1231,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		ac: 6612,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		ac: 2400,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		ac: 311,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		ac: 5124,
		amt: 2100,
	},
]

export type TAreaData = {
	[k: string]: string
}

const AreaChart = ({ showTooltip = true, showLegend = true, showGrid = true }: AreaChartProps) => {
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
				<XAxis dataKey="name" />
				<CartesianGrid strokeDasharray="4 1 " />
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
