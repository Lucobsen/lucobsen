import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/photographer')({
  component: () => <div>Hello "/photographer"!</div>,
});
