import { ReactNode } from "react";

export interface NavigationItem {
    id: string;
    title: ReactNode;
    icon?: string | any;
    href: string;
}
