import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          display: "inline-block",
          margin: "0 20px 0 0",
          padding: "0 23px 0 0",
          fontSize: 24,
          fontWeight: 500,
          borderRight: "1px solid rgba(0,0,0,.3)",
        }}
      >
        404
      </h1>
      <p style={{ margin: 0 }}>This page could not be found.</p>
    </div>
  );
}
