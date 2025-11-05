import { UserButton } from '@ngagio/components/core/user-button';
import { SidebarTrigger } from '@ngagio/components/ui/sidebar';
import { User } from '@ngagio/types';

export function Navbar({ user }: { user: User }) {
  return (
    <nav className="flex items-center justify-between w-full py-2 border-b">
      <SidebarTrigger />
      <UserButton user={user} />
    </nav>
  );
}
