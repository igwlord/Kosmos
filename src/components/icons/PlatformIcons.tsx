interface IconProps {
  className?: string;
}

export function WindowsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <rect x="1" y="1" width="8" height="8" />
      <rect x="11" y="1" width="8" height="8" />
      <rect x="1" y="11" width="8" height="8" />
      <rect x="11" y="11" width="8" height="8" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.37 2.6c.02 1.13-.42 2.03-1.02 2.68-.64.7-1.65 1.23-2.62 1.15-.13-1.09.4-2.05 1-2.66C14.37 3.08 15.47 2.57 16.37 2.6z" />
      <path d="M20.5 17.28c-.53 1.21-.78 1.75-1.46 2.82-.95 1.49-2.29 3.35-3.95 3.37-1.47.02-1.85-.95-3.85-.94-2 .01-2.42.96-3.9.94-1.66-.02-2.93-1.7-3.88-3.19-2.66-4.14-2.94-8.98-1.3-11.57 1.16-1.84 3-2.93 4.72-2.93 1.75 0 2.85.99 4.3.99 1.4 0 2.26-.99 4.3-.99 1.53 0 3.15.82 4.3 2.26-3.78 2.06-3.17 7.42.72 9.24z" />
    </svg>
  );
}
