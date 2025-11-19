'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from './components/search';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <RootProvider
        search={{
          SearchDialog,
        }}
      >
        {children}
      </RootProvider>
    </SessionProvider>
  );
}
