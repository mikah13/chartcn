import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/PageHeader'
import AreaChartEx from '@/components/examples/AreaChartEx'
import BarChartEx from '@/components/examples/BarChartEx'
import LineChartEx from '@/components/examples/LineChartEx'
import PieChartEx from '@/components/examples/PieChartEx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
	return (
		<div className="container">
			<section className="relative flex flex-col items-start md:flex-row md:items-center ">
				<PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
					<PageHeaderHeading>ChartCN</PageHeaderHeading>
					<PageHeaderDescription>
						A collection of beautiful charts for your dashboard.
						<br />
						Built with ShadCN and rechart.
					</PageHeaderDescription>
				</PageHeader>
			</section>

			<section>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card className="col-span-2 bg-zinc-100 dark:bg-zinc-900">
						<CardHeader>
							<CardTitle>Area Chart</CardTitle>
						</CardHeader>
						<CardContent className="pl-2 ">
							<AreaChartEx />
						</CardContent>
					</Card>
					<Card className="col-span-2 bg-zinc-100 dark:bg-zinc-900">
						<CardHeader>
							<CardTitle>Line Chart</CardTitle>
						</CardHeader>
						<CardContent className="pl-2 ">
							<LineChartEx />
						</CardContent>
					</Card>
					<Card className="col-span-3 bg-zinc-100 dark:bg-zinc-900">
						<CardHeader>
							<CardTitle>Bar Chart</CardTitle>
						</CardHeader>
						<CardContent className="pl-2 ">
							<BarChartEx />
						</CardContent>
					</Card>

					<Card className="col-span-1 bg-zinc-100 dark:bg-zinc-900">
						<CardHeader>
							<CardTitle>Pie Chart</CardTitle>
						</CardHeader>
						<CardContent className="pl-2 ">
							<PieChartEx />
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	)
}
