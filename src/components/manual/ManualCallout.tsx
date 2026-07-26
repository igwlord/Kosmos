import type { ReactNode } from 'react';

interface ManualCalloutProps {
  variant?: 'default' | 'purple' | 'green' | 'warning';
  children: ReactNode;
}

export function ManualCallout({ variant = 'default', children }: ManualCalloutProps) {
  const variantClass = variant === 'default' ? '' : ` ${variant}`;
  return <div className={`callout${variantClass}`}>{children}</div>;
}
