import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono';

import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import Header from '@/components/Header'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn('min-h-screen bg-background antialiased', GeistSans.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Header />
					{children}
					<TailwindIndicator />
				</ThemeProvider>
			</body>
		</html>
	)
}
