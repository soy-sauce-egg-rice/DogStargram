'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styled from '@emotion/styled'
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser } from 'react-icons/fi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 60px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;
const TabIcon = styled.div`
  font-size: 24px;
  color: #555;
`;

export const metadata: Metadata = {
  title: 'It is DogStagram',
  description: 'Generated by next- typescript',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TabBarContainer>
          <Link href="/home">
            <TabIcon>
              <FiHome />
            </TabIcon>
          </Link>
          <Link href="/explore">
            <TabIcon>
              <FiSearch />
            </TabIcon>
          </Link>
          <Link href="/new-post">
          </Link>
          <TabIcon>
            <FiPlusSquare />
          </TabIcon>
          <Link href="/activity">
            <TabIcon>
              <FiHeart />
            </TabIcon>
          </Link>
          <Link href="/profile">
            <TabIcon>
              <FiUser />
            </TabIcon>
          </Link>
        </TabBarContainer>
        {children}
      </body>
    </html>
  )
}
