import { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface Route {
  label: string;
  icon: LucideIcon;
  href: string;
  active: boolean;
}