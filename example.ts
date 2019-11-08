import {
  readdirSync,
} from 'fs';

import {
  CODES,
  getDescription,
} from './index';

try {
  readdirSync('non-existent-file');
} catch(error) {
  if (error.code === CODES.ENOENT) {
    console.error(getDescription(CODES.ENOENT)); // No such file or directory
  }
}
