export interface ManualSectionProps {
  registerSection: (id: string) => (node: HTMLElement | null) => void;
}
