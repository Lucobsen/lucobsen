import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/musician')({
  component: () => <div>Hello "/musician"!</div>,
});
