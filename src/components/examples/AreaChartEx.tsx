'use client'

import React, { PureComponent } from 'react'
import AreaChart from '../chart/AreaChart'
import { Tooltip, TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

type Props = {}
const CustomTooltip = <TValue extends ValueType, TName extends NameType>(
	props: TooltipProps<TValue, TName>
) => {
	const { active, payload, label } = props
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${label} : ${payload[0].value}`}</p>
				<p className="desc">Anything you want can be displayed here.</p>
			</div>
		)
	}

	return null
}

const AreaChartEx = (props: Props) => {
	return <AreaChart />
}

export default AreaChartEx
