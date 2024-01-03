'use client'
import React from 'react'
import PieChart from '../chart/PieChart'
import { Legend } from 'recharts'
import Tooltip from '../chart/Tooltip'

const data01 = [
	{
		key: 'Group A',
		value: 400,
	},
	{
		key: 'Group B',
		value: 300,
	},
	{
		key: 'Group C',
		value: 300,
	},
	{
		key: 'Group D',
		value: 200,
	},
	{
		key: 'Group E',
		value: 278,
	},
	{
		key: 'Group F',
		value: 189,
	},
]
const data = [data01]
const dataKeys = ['value']
const nameKeys = ['key']
const colors = ['#5057d7']

type Props = {}

const PieChartEx = (props: Props) => {
	return (
		<PieChart nameKeys={nameKeys} data={data} dataKeys={dataKeys} colors={colors}>
			<Legend />
			<Tooltip />
		</PieChart>
	)
}
export default PieChartEx
