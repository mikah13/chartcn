import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/PageHeader'
import AreaChart from '@/components/chart/AreaChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
	return (
		<div className="container">
			<section className="relative flex flex-col items-start md:flex-row md:items-center ">
				<PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
					<PageHeaderHeading>ChartCN</PageHeaderHeading>
					<PageHeaderDescription>
						A collection of charts for your dashboard built with ShadCN and recharts
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
							<AreaChart />
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	)
}
