import recipeCount from './.../counter.js';

describe('Counter function', () => {
  test('Add one new item to the API', () => {
    expect(recipeCount().length).toBe(1);
  });
});