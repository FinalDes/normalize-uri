export function normalizeMongoURI({host, port = 27017, db= "test", user, pass}: {
    host: string,
    port?: number|string ,
    db?: string ,
    user?: string,
    pass?: string,
}): string {
    let result = "mongodb://";
    if (user && pass) {
        result += `${user}:${pass}@`;
    }
    return result += `${host}:${normalizePort(port) || 27017 }/${db}`;
}

export function normalizePort(port: number|string): number|boolean {
    port = Number(port);
    if (port > 0 && port < 65535) {
        return port;
    }
    return false;
}
