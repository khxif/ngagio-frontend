import { UserButton } from '@ngagio/components/core/user-button';
import { SidebarTrigger } from '@ngagio/components/ui/sidebar';
import { User } from '@ngagio/types';

interface NavbarProps {
  user: User;
  showSidebarTrigger?: boolean;
}

export function Navbar({ user, showSidebarTrigger = false }: NavbarProps) {
  return (
    <nav
      className={`flex items-center w-full p-2 border-b 
      ${showSidebarTrigger ? 'justify-between' : 'justify-end'}`}
    >
      {showSidebarTrigger ? <SidebarTrigger /> : null}
      <UserButton user={user} />
    </nav>
  );
}
