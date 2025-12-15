'use client';

import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Keying by pathname ensures the animation runs on each navigation
  // without briefly hiding the newly-rendered page (which can look like flicker).
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}