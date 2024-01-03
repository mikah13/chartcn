'use client'

import React, { PureComponent } from 'react'
import LineChart from '@/components/chart/LineChart'
import { Legend, XAxis, YAxis, ResponsiveContainer } from 'recharts'

type Props = {}
const data = [
	{
		xAxis: 'Mon',
		uk: 4000,
		us: 2400,
	},
	{
		xAxis: 'Tue',
		uk: 3000,
		us: 1398,
	},
	{
		xAxis: 'Wed',
		uk: 2000,
		us: 9800,
	},
	{
		xAxis: 'Thu',
		uk: 2780,
		us: 3908,
	},
	{
		xAxis: 'Fri',
		uk: 1890,
		us: 4800,
	},
	{
		xAxis: 'Sat',
		uk: 2390,
		us: 3800,
	},
]
const dataKeys = ['us', 'uk']
const colors = ['#ec6782', '#c39efe']
const LineChartEx = (props: Props) => {
	return (
		<LineChart data={data} colors={colors} dataKeys={dataKeys}>
			<Legend />
			<XAxis dataKey="name" stroke="#3d3b3b" fontSize={12} tickLine={false} />
			<YAxis
				stroke="#888888"
				fontSize={12}
				tickLine={false}
				axisLine={false}
				tickFormatter={(value: number) => `$${value}`}
			/>
		</LineChart>
	)
}

export default LineChartEx
