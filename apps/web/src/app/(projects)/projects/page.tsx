'use client';

import { ProjectsModal } from '@ngagio/components/core/modals/project-modal';
import { Card, CardContent } from '@ngagio/components/ui/card';
import { H3, Small } from '@ngagio/components/ui/typography';
import { Navbar } from '@ngagio/layouts/projects-dashboard/navbar';
import { Feedback } from '@ngagio/react/feedback';
import { useAuthStore } from '@ngagio/stores/auth-store';
import { User } from '@ngagio/types';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsPage() {
  const user = useAuthStore(state => state.user);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  return (
    <main>
      <Navbar user={user as User} />

      <section className="py-4 px-4 md:px-10 flex flex-col gap-12">
        <H3 className="font-medium">Your Projects!</H3>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <Card className="cursor-pointer" onClick={() => setIsProjectsModalOpen(true)}>
            <CardContent className="flex flex-col space-y-4 items-center justify-center h-full py-6">
              <PlusIcon className="size-6" />
              <Small className="text-lg font-medium">Create a New project.</Small>
            </CardContent>
          </Card>
        </div>
      </section>
      <ProjectsModal open={isProjectsModalOpen} setOpen={setIsProjectsModalOpen} />
      <Feedback componentType="button" text="Give Feedback" />
    </main>
  );
}
