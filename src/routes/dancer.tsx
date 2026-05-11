import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dancer')({
  component: () => <div>Hello "/dancer"!</div>,
});
