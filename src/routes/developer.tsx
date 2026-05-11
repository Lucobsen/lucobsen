import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/developer')({
  component: () => <div>Hello "/developer"!</div>,
});
