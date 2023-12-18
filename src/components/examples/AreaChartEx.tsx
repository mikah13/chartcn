'use client'

import React, { PureComponent } from 'react'
import AreaChart from '../chart/AreaChart'

type Props = {}
const data = [
	{
		xAxis: 'A',
		uv: 4000,
		pv: 2400,
		ac: 2400,
		amt: 2400,
	},
	{
		xAxis: 'B',
		uv: 3000,
		pv: 1398,
		ac: 2400,
		amt: 2210,
	},
	{
		xAxis: 'C',
		uv: 2000,
		pv: 9800,
		ac: 1231,
		amt: 2290,
	},
	{
		xAxis: 'D',
		uv: 2780,
		pv: 3908,
		ac: 6612,
		amt: 2000,
	},
	{
		xAxis: 'E',
		uv: 1890,
		pv: 4800,
		ac: 2400,
		amt: 2181,
	},
	{
		xAxis: 'F',
		uv: 2390,
		pv: 3800,
		ac: 311,
		amt: 2500,
	},
	{
		xAxis: 'G',
		uv: 3490,
		pv: 4300,
		ac: 5124,
		amt: 2100,
	},
]
const dataKeys = ['uv', 'pv', 'ac', 'amt']
const colors = ['#8884d8', '#82ca9d', '#4f2dec', '#5ac6be']
const AreaChartEx = (props: Props) => {
	return <AreaChart showYLine={false} stack data={data} colors={colors} dataKeys={dataKeys} />
}

export default AreaChartEx
