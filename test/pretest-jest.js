expect.extend({
  toContain: (collection, value) => require('expect/build/matchers.js').default.toContainEqual(collection, value)
});
