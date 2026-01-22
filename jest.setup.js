// Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock import.meta for Jest
if (typeof global.import === 'undefined') {
  global.import = { meta: { env: { DEV: false } } };
}
