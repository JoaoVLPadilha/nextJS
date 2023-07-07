"use client";

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'


interface IProvider {
  children: React.ReactNode
  session: Session
}
const Provider:React.FC<IProvider> = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider