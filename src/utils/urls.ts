const basePath = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/`;

export function withBasePath(path = "") {
  return `${basePath}${path.replace(/^\/+/, "")}`;
}

export function getAbsoluteUrl(path: string, origin: URL | string) {
  return new URL(withBasePath(path), origin).href;
}
