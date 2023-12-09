import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css';
import './theme.config.css';
import './globals.css'
import {Theme} from '@radix-ui/themes';
import QueryClientProvider from "@/app/QueryClientProvider";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'extralight',
    },
    {
      path: '../public/fonts/ClashDisplay-Light.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff',
      weight: '600',
      style: 'semibold',
    },
  ],
  variable: "--font-clash-display",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.className} ${clashDisplay.variable}`}>
      <QueryClientProvider>
      <Theme appearance={'dark'} accentColor={'crimson'} grayColor={'slate'} radius="large" scaling="95%" className={clashDisplay.variable} >
          {children}
      </Theme>
        </QueryClientProvider>
      </body>
    </html>
  )
}
