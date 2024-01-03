import { TooltipProps, Tooltip as DefaultTooltip } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const CustomTooltip = <TValue extends ValueType, TName extends NameType>(
	props: TooltipProps<TValue, TName>
) => {
	const { active, payload, label } = props
	if (active && payload && payload.length) {
		return (
			<Card>
				{label && (
					<CardHeader className="px-4 py-2 border-b">
						<CardTitle className="text-sm">{label}</CardTitle>
					</CardHeader>
				)}
				<CardContent className="px-4 py-2 space-y-1">
					{payload.map((x, i) => (
						<div className="flex items-center justify-between space-x-8" key={i}>
							<div className="flex items-center space-x-2">
								<span
									style={{ backgroundColor: x.color }}
									className={cn(`shrink-0  h-3 w-3 border-2`)}></span>
								<p className="text-right whitespace-nowrap ">{x.name}</p>
							</div>
							<p className="font-medium text-right whitespace-nowrap ">{x.value}</p>
						</div>
					))}
				</CardContent>
			</Card>
		)
	}

	return (
		<Card>
			<CardHeader className="px-4 py-2 border-b">
				<CardTitle className="text-sm">No available data</CardTitle>
			</CardHeader>
		</Card>
	)
}

const Tooltip = <TValue extends ValueType, TName extends NameType>(
	props: TooltipProps<TValue, TName>
) => {
	return <DefaultTooltip {...props} content={<CustomTooltip />} />
}
export default Tooltip
