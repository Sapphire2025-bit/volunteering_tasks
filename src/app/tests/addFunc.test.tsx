import { add } from "../services/addFunctionForTest";

test("add function", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(3);
});