'use client';

import { Spinner } from '@ngagio/components/ui/spinner';
import { useInitApp } from '@ngagio/hooks/use-init-app';
import { useBaseLayoutStore } from '@ngagio/stores/base-layout-store';
import React from 'react';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const isAppInitialized = useBaseLayoutStore(state => state.isAppInitialized);
  useInitApp();

  return isAppInitialized ? (
    children
  ) : (
    <div className="flex items-center justify-center h-svh flex-col space-y-1">
      <Spinner />
      <p>Loading..</p>
    </div>
  );
}
