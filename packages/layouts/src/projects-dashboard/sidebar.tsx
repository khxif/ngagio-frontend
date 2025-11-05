import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@ngagio/components/ui/sidebar';
import { cn } from '@ngagio/shared/utils';
import { Route } from '@ngagio/types';
import Link from 'next/link';

export function ProjectSidebar({ routes }: { routes: Route[] }) {
  return (
    <Sidebar>
      <SidebarHeader>Ngagio!</SidebarHeader>
      <SidebarContent className="px-2 flex flex-col gap-y-4 mt-14">
        {routes.map(route => (
          <SidebarMenuItem key={route.href}>
            <Link href={route.href}>
              <SidebarMenuButton
                className={cn(
                  'py-6 flex items-center space-x-1.5 px-4',
                  route.active && 'bg-primary text-white',
                )}
              >
                <route.icon className="size-5" />
                <p>{route.label}</p>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}