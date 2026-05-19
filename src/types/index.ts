import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "soft" | "primary" | "navy" | "light";
};

export type QuickActionItem = {
  id: number;
  title: string;
  icon: LucideIcon;
};

export type StatusItem = {
  id: number;
  title: string;
  count: number;
  type: "pending" | "docs" | "done";
  icon: LucideIcon;
};