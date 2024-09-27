export * from './lib/utils';
export function parseBoolean(string: string): boolean {
    return string === "true" ? true : false
};

export function parseBooleanWithUndefined(string: any): boolean | undefined {
    return string === "true" ? true : string === "false" ? false : undefined;
};

export function convertMs(milliseconds: number): string {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    const result = [];

    if (days > 0) result.push(`${days}d`);
    if (hours > 0) result.push(`${hours}h`);
    if (minutes > 0) result.push(`${minutes}m`);
    if (seconds > 0 && days < 0) result.push(`${seconds}s`);

    return result.join(' ');
}