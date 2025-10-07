import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contactAdapter } from '../contactAdapter.ts';

test('contactAdapter returns object with same properties', () => {
  const data = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hello world'
  };

  const result = contactAdapter(data);
  assert.deepStrictEqual(result, data);
});
