import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/PageHeader'
import AreaChartEx from '@/components/examples/AreaChartEx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

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
					<Card className="col-span-2">
						<CardHeader>
							<CardTitle>Area Chart</CardTitle>
						</CardHeader>
						<CardContent className="pl-2">
							<AreaChartEx />
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	)
}
