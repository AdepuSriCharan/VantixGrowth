import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work',     href: '/work'     },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
];

export const PARTNER_SLOTS = parseInt(import.meta.env.VITE_PARTNER_SLOTS ?? '3', 10);
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'connect@vantixgrowth.com';
export const BOOKING_URL   = import.meta.env.VITE_BOOKING_URL ?? '#';
