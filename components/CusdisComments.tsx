"use client";

import { useEffect } from "react";

type CusdisCommentsProps = {
  pageId: string;
  pageTitle: string;
  pageUrl?: string; // optional, will auto-fill
  appId: string;
};

export function CusdisComments({
  pageId,
  pageTitle,
  pageUrl,
  appId,
}: CusdisCommentsProps) {
  useEffect(() => {
    const scriptSrc = "https://cusdis.com/js/cusdis.es.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    } else {
      // If script already exists, try to re-render when navigating client-side
      // @ts-ignore
      if (window.CUSDIS) {
        // @ts-ignore
        window.CUSDIS.initial();
      }
    }
  }, []);

  const resolvedUrl =
    pageUrl ?? (typeof window !== "undefined" ? window.location.href : "");

  return (
    <div
      id="cusdis_thread"
      className="[&_iframe]:w-full [&_iframe]:min-h-[80vh] [&_iframe]:h-[80vh]"
      data-host="https://cusdis.com"
      data-app-id={appId}
      data-page-id={pageId}
      data-page-url={resolvedUrl}
      data-page-title={pageTitle}
    />
  );
}
