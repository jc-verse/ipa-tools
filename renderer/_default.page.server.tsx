import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

export async function render(pageContext: PageContextBuiltIn) {
  console.log(pageContext);
  const { Page } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  );

  return escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/ipa-tools/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IPA tools</title>
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(viewHtml)}</div>
  </body>
</html>
`;
}
