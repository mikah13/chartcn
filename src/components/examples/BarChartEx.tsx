'use client'

import BarChart from '@/components/chart/BarChart'
import { XAxis, YAxis } from 'recharts'
import Tooltip from '../chart/Tooltip'

const data = [
	{
		xAxis: 'Jan',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Feb',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Mar',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Apr',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'May',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Jun',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Jul',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Aug',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Sep',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Oct',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Nov',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		xAxis: 'Dec',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
]

const dataKeys = ['total']
const colors = ['#48d871']
const BarChartEx = () => {
	return (
		<BarChart data={data} colors={colors} dataKeys={dataKeys}>
			<Tooltip />
			<YAxis
				stroke="#888888"
				fontSize={12}
				tickLine={false}
				axisLine={false}
				tickFormatter={(value: number) => `$${value}`}
			/>
		</BarChart>
	)
}

export default BarChartEx
