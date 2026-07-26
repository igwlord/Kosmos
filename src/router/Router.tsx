import { createContext, useContext, useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function scrollToPageSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 80;
  const rect = element.getBoundingClientRect();
  let documentTop = 0;
  let offsetElement: HTMLElement | null = element;

  while (offsetElement) {
    documentTop += offsetElement.offsetTop;
    offsetElement = offsetElement.offsetParent as HTMLElement | null;
  }

  const availableHeight = Math.max(0, window.innerHeight - navHeight);
  const centeredHeight = Math.min(rect.height, availableHeight * 0.72);
  const breathingRoom = Math.max(24, (availableHeight - centeredHeight) / 2);
  const top = Math.max(0, documentTop - navHeight - breathingRoom);

  window.scrollTo({
    top,
    behavior: reduceMotion ? 'auto' : 'smooth',
  });

  return true;
}

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
      if (scrollToPageSection(id)) return;
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
