declare global {
  namespace NodeJS {
    interface Global {
      fetch: jest.Mock<Promise<Response>, [RequestInfo, RequestInit?]>;
    }
  }
}

global.fetch = jest.fn((input: RequestInfo | URL, init?: RequestInit) =>
  Promise.resolve(new Response())
);

export {}