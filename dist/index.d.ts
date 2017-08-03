export declare function normalizeMongoURI({host, port, db, user, pass}: {
    host: string;
    port?: number | string;
    db?: string;
    user?: string;
    pass?: string;
}): string;
export declare function normalizePort(port: number | string): number | boolean;
