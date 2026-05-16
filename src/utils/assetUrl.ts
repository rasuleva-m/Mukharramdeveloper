export function assetUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalized = path.replace(/^\/+/, '');
  return `${baseUrl}${normalized}`;
}

