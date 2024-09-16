export * from './lib/utils';
export function parseBoolean(string: string): boolean {
    return string === "true" ? true : false
};