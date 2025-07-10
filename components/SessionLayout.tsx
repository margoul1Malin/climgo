"use client";

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type SessionLayoutProps = {
  children: ReactNode;
};

export default function SessionLayout({ children }: SessionLayoutProps) {
  return <SessionProvider>{children}</SessionProvider>;
} 