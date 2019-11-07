import {
  readdirSync,
} from 'fs';

try {
  readdirSync('non-existent-file');
} catch(error) {
  console.log(error);
}
