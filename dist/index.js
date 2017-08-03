"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeMongoURI(_a) {
    var host = _a.host, _b = _a.port, port = _b === void 0 ? 27017 : _b, _c = _a.db, db = _c === void 0 ? "test" : _c, user = _a.user, pass = _a.pass;
    var result = "mongodb://";
    if (user && pass) {
        result += user + ":" + pass + "@";
    }
    return result += host + ":" + (normalizePort(port) || 27017) + "/" + db;
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