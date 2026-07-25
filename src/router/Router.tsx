import { createContext, useContext, useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState(null, '', nextPath);
    const url = new URL(nextPath, window.location.origin);
    setPath(url.pathname);
    if (!url.hash) window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    let rafId: number;
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 30) rafId = requestAnimationFrame(tryScroll);
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [path]);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within a RouterProvider');
  return context;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
