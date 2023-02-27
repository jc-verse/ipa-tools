import React from "react";
import ReactDOM from "react-dom/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/types";

import "./main.css";

export async function render(
  pageContext: PageContextBuiltInClient,
): Promise<void> {
  const { Page } = pageContext;

  ReactDOM.hydrateRoot(
    document.getElementById("root")!,
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  );
}
