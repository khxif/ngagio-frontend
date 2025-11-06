import { ProjectsDashboardLayout } from '@ngagio/layouts/projects-dashboard/layout';
import React from 'react';

export default function ProjectsDashboard({ children }: { children: React.ReactNode }) {
  return <ProjectsDashboardLayout>{children}</ProjectsDashboardLayout>;
}
