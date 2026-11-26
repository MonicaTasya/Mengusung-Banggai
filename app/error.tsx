"use client";

import { ErrorLayout } from "@/src/components/Layout/ErrorLayout";

export interface RouteErrorProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function RouteError({ retry }: RouteErrorProps) {
  return <ErrorLayout variant="error" onRetry={retry} />;
}
