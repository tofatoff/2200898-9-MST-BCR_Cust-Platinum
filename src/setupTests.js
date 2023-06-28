// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { mockServer } from "./mocks/browser";

jest.setTimeout(15000);

beforeAll(() => {
  mockServer.listen();
});

afterEach(() => {
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
