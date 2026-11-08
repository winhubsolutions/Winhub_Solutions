"use client";

import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LivePreviewListener() {
  const router = useRouter();
  const hasSentReady = useRef(false);

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (!event.data) return;
      // Payload CMS sends document update events through window.postMessage
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
      window.addEventListener("message", handleMessage);

      // Signal to Payload Admin preview iframe that preview is loaded
      if (!hasSentReady.current && window.parent && window.parent !== window) {
        hasSentReady.current = true;
        try {
          window.parent.postMessage({ type: "payload-live-preview-ready" }, "*");
        } catch (e) {}
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("message", handleMessage);
      }
    };
  }, [handleMessage]);

  return null;
}

