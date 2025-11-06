'use client';

import { Button } from '@ngagio/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ngagio/components/ui/form';
import { Input } from '@ngagio/components/ui/input';
import { Spinner } from '@ngagio/components/ui/spinner';
import { ProjectsSchemaType } from '@ngagio/zod-schemas/project';
import { UseFormReturn } from 'react-hook-form';

interface ProjectsFormProps {
  form: UseFormReturn<ProjectsSchemaType>;
  onSubmit: (values: ProjectsSchemaType) => Promise<void>;
  isPending?: boolean;
}

export function ProjectsForm({ form, onSubmit, isPending = false }: ProjectsFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Project Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? <Spinner /> : 'Create Project'}
        </Button>
      </form>
    </Form>
  );
}
