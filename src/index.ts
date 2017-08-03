export function normalizeMongoURI({host, port, db= "test", user, pass}: {
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
    result += `${host}`;
    if (port && normalizePort(port)) {
        result += `:${normalizePort(port)}`;
    }
    return result += `/${db}`;
}

export function normalizePort(port: number|string): number|boolean {
    port = Number(port);
    if (port > 0 && port < 65535) {
        return port;
    }
    return false;
}
