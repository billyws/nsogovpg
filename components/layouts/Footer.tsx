// Initialize a next js footer component with a logo and a title and a navigation menu using tailwind css.

// Path: frontend\components\layouts\Footer.tsx
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
    return (
        <>
            <div className="container mx-auto max-w-5xl">
                    <div className="flex justify-between items-center h-16">
                    <h1 className="text-blue-300">This is the footer</h1>
                </div>
            </div>
        </>
    )
}
            

