'use client'

import React, { PureComponent } from 'react'
import AreaChart from '../chart/AreaChart'
import { Tooltip, TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

type Props = {}
const data = [
	{
		xAxis: 'Page A',
		uv: 4000,
		pv: 2400,
		ac: 2400,
		amt: 2400,
	},
	{
		xAxis: 'Page B',
		uv: 3000,
		pv: 1398,
		ac: 2400,
		amt: 2210,
	},
	{
		xAxis: 'Page C',
		uv: 2000,
		pv: 9800,
		ac: 1231,
		amt: 2290,
	},
	{
		xAxis: 'Page D',
		uv: 2780,
		pv: 3908,
		ac: 6612,
		amt: 2000,
	},
	{
		xAxis: 'Page E',
		uv: 1890,
		pv: 4800,
		ac: 2400,
		amt: 2181,
	},
	{
		xAxis: 'Page F',
		uv: 2390,
		pv: 3800,
		ac: 311,
		amt: 2500,
	},
	{
		xAxis: 'Page G',
		uv: 3490,
		pv: 4300,
		ac: 5124,
		amt: 2100,
	},
]

const AreaChartEx = (props: Props) => {
	return <AreaChart data={data} />
}

export default AreaChartEx
