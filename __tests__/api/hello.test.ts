import { createMocks } from "node-mocks-http";
import handleHello from "@/pages/api/hello";

describe("/api/hello", () => {
  test("when saying hello, should get status 200", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handleHello(req, res);
    expect(res._getStatusCode()).toBe(200);
  });

  test("when saying hello, should get John Doe", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handleHello(req, res);
    expect(res._getData()).toContain("John Doe");
  });
});
