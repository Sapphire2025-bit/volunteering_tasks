const add = (a: number, b: number) => a + b;

test("add function", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(3);
});