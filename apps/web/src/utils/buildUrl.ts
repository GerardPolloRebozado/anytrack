export default function buildUrl(base: string, params: Record<string, any>): string {
    const query = Object.keys(params)
        .filter(key => params[key] !== undefined && params[key] !== null)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    if (query === '') {
        return base;
    } else {
        return `${base}?${query}`;
    }
};