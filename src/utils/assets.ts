/**
 * Helper to resolve public assets correctly with Vite's base path
 * (especially useful when deployed on GitHub Pages subpaths like /portfolio_web/)
 */
export const assetUrl = (path: string): string => {
  if (!path) return '';
  // If it's already an absolute external URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};
