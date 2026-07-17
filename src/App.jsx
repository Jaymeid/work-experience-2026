import { getRoute } from "./routes";

function normalizePath(pathname) {
  const withoutIndex = pathname.replace(/\/index\.html$/, "");

  const withoutTrailingSlash =
    withoutIndex.length > 1 ? withoutIndex.replace(/\/$/, "") : withoutIndex;

  return withoutTrailingSlash || "/";
}

export function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  const relativePath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || "/"
    : window.location.pathname;

  const pathname = normalizePath(relativePath);

  const { Component } = getRoute(pathname);

  return <Component />;
}
