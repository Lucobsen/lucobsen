import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/streamer')({
  component: () => <div>Hello "/streamer"!</div>,
});
