import {normalizePort} from "./../index";
// import {normalizePort} from "./../../dist/index.js";

describe("test valid port", () => {
    test("3000 return 3000", () => {
        expect(normalizePort(3000)).toBe(3000);
    });
    test("0 return false", () => {
        expect(normalizePort(0)).toBe(false);
    });
    test("65535 return false", () => {
        expect(normalizePort(65535)).toBe(false);
    });
    test("asd String return false", () => {
        expect(normalizePort("asd")).toBe(false);
    });
    test("'3000' return 3000", () => {
        expect(normalizePort("3000")).toBe(3000);
    });
});
