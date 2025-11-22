import { environment } from '../../environments/environment';

/**
 * Формирует абсолютный URL для ассетов на основе backendHost из окружения.
 * Если передан абсолютный URL, возвращает его как есть.
 */
export function buildAssetUrl(path?: string | null): string {
  if (!path) {
    return '';
  }

  // Если путь уже абсолютный, просто возвращаем его
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const backendHost = environment.backendHost || '';
  if (!backendHost) {
    return path;
  }

  const normalizedHost = backendHost.endsWith('/') ? backendHost : `${backendHost}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedHost}${normalizedPath}`;
}


