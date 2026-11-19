import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayseif.vercel.app/'),
  title: 'Happy Birthday seif! 🎂',
  description: 'A special birthday message for Seif 🤍',
  openGraph: {
    title: 'Happy Birthday Seif! 🎂',
    description: 'A special birthday message for Seif 🤍',
    url: 'https://happybirthdayseif.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayseif.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://happybirthdayseif.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Happy Birthday Seif Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Seif! 🎂',
    description: 'A special birthday message for Seif 🤍',
    images: ['https://happybirthdayseif.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}