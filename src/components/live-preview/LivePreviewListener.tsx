"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

export default function LivePreviewListener() {
  const router = useRouter();

  const handleCustomMessage = useCallback(
    (event: MessageEvent) => {
      if (!event.data) return;
      if (
        event.data.type === "payload-live-preview" ||
        event.data.type === "payload-live-preview-update" ||
        (typeof event.data === "string" && event.data.includes("payload"))
      ) {
        router.refresh();
      }
    },
    [router]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("message", handleCustomMessage);
      return () => window.removeEventListener("message", handleCustomMessage);
    }
  }, [handleCustomMessage]);

  const serverUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={serverUrl}
    />
  );
}
