/* eslint-disable import/prefer-default-export */

// Make the `request` function generic
export function fetchService<TResponse>(
  url: string,
  config: RequestInit = {},
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}
