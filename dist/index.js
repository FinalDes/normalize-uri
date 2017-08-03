"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeMongoURI({ host, port, db = "test", user, pass }) {
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
exports.normalizeMongoURI = normalizeMongoURI;
function normalizePort(port) {
    port = Number(port);
    if (port > 0 && port < 65535) {
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
//# sourceMappingURL=index.js.map