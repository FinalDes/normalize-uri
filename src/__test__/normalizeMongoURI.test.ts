/* tslint:disable object-literal-sort-keys*/
import {normalizeMongoURI} from "./../index";
// import {normalizeMongoURI} from "./../../dist/index.js";

describe("build valid mongouri", () => {
    test("only host address", () => {
        expect(normalizeMongoURI({host: "localhost"})).toBe("mongodb://localhost/test");
    });
    test("only host address with invalid port number", () => {
        expect(normalizeMongoURI({host: "localhost", port: "82343"})).toBe("mongodb://localhost/test");
    });
    test("only host address with valid port number", () => {
        expect(normalizeMongoURI({host: "localhost", port: "27017"})).toBe("mongodb://localhost:27017/test");
    });
    test("mongouri with credentials", () => {
        expect(normalizeMongoURI({
            host: "localhost",
            user: "test",
        })).toBe("mongodb://localhost/test");
    });
    test("mongouri with credentials", () => {
        expect(normalizeMongoURI({
            host: "localhost",
            user: "test",
            pass: "test",
        })).toBe("mongodb://test:test@localhost/test");
    });
    test("mongouri with credentials", () => {
        expect(normalizeMongoURI({
            host: "localhost",
            port: "27017",
            user: "test",
            pass: "test",
        })).toBe("mongodb://test:test@localhost:27017/test");
    });
    test("host and custom db", () => {
        expect(normalizeMongoURI({host: "localhost", db: "demo"})).toBe("mongodb://localhost/demo");
    });
});
