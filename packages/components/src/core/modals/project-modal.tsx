'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@ngagio/components/ui/dialog';
import { Sheet, SheetContent, SheetTitle } from '@ngagio/components/ui/sheet';
import { useIsMobile } from '@ngagio/hooks/use-mobile';
import { projectsSchema, ProjectsSchemaType } from '@ngagio/zod-schemas/project';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { ProjectsForm } from '../forms/project-form';

interface APIKeyModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ProjectsModal({ open, setOpen }: APIKeyModalProps) {
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();

  const form = useForm<ProjectsSchemaType>({
    resolver: zodResolver(projectsSchema),
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(values: ProjectsSchemaType) {}

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="p-5 space-y-2.5 rounded-t-lg">
          <SheetTitle>Create a New Project.</SheetTitle>
          <ProjectsForm form={form} onSubmit={onSubmit} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="fixed top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2
       w-full max-w-md space-y-4"
      >
        <DialogHeader>
          <DialogTitle>Create a New Project.</DialogTitle>
        </DialogHeader>

        <ProjectsForm form={form} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
