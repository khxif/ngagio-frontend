'use client';

import { SidebarProvider } from '@ngagio/components/ui/sidebar';
import { useAuthStore } from '@ngagio/stores/auth-store';
import { Route, User } from '@ngagio/types';
import { GitPullRequestDraftIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import { ProjectSidebar } from './sidebar';

export function ProjectsDashboardLayout({ children }: { children: React.ReactNode }) {
  const user = useAuthStore(state => state.user);
  const pathname = usePathname();

  const routes: Route[] = [
    {
      label: 'Dashboard',
      icon: GitPullRequestDraftIcon,
      href: '/dashboard',
      active: pathname === '/dashboard',
    },
    {
      label: 'Dashboarda',
      icon: GitPullRequestDraftIcon,
      href: '/dashboards',
      active: pathname === '/dashboards',
    },
  ] as const;

  return (
    <SidebarProvider>
      <ProjectSidebar routes={routes} />
      <main className='w-full flex flex-col px-4'>
        <Navbar user={user as User} />
        {children}
      </main>
    </SidebarProvider>
  );
}
