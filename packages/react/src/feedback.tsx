'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FeedbackForm } from '@ngagio/components/core/forms/feedback-form';
import { Button } from '@ngagio/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ngagio/components/ui/dialog';
import { Muted, P } from '@ngagio/components/ui/typography';
import { feedbackSchema, FeedbackSchemaType } from '@ngagio/zod-schemas/feedback';
import { useForm } from 'react-hook-form';

interface FeedbackProps {
  componentType?: 'button' | 'text';
  text?: string;
}

export function Feedback({ componentType = 'button', text }: FeedbackProps) {
  const form = useForm<FeedbackSchemaType>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      message: '',
      email: '',
      rating: 1,
    },
  });

  async function handleSubmit(data: FeedbackSchemaType) {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        {componentType === 'button' ? (
          <Button className="rounded-full text-white size-auto p-4 cursor-pointer">{text}</Button>
        ) : (
          <P className="underline underline-offset-4">{text || 'Give Feedback'}</P>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="w-full flex items-center justify-center">
          <DialogTitle className="text-2xl">Enjoying The App?</DialogTitle>
          <Muted>Rate your Experience,We would love to hear your feedback!</Muted>
        </DialogHeader>

        <FeedbackForm form={form} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
