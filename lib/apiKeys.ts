import uuid from 'uuid'
import { randomBytes } from 'crypto';

export const generateTasasSecurityKey = () => {
  const keyLength = 32; // You can adjust the length as needed
  const randomBytesBuffer = randomBytes(keyLength);
  const securityKey = randomBytesBuffer.toString('hex');
  return securityKey;
};

// Générer des clés hexadécimales
export const generateHexKeys = (length: number) => {
  const characters = '0123456789abcdef';
  let hexKey = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hexKey += characters.charAt(randomIndex);
  }
  return hexKey;
}

// Générer une clé alphabétique
export const generateAlphabeticKey = (length: number) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let alphabeticKey = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    alphabeticKey += alphabet.charAt(randomIndex);
  }
  return alphabeticKey;
}

// Générer une clé alphanumérique
export const generateAlphanumKey = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let alphanumKey = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    alphanumKey += characters.charAt(randomIndex);
  }
  return alphanumKey;
}


export const generateUuid = (version: 'v1' | 'v4') => {
  // Create an array to store random bytes
  const randomBytes = new Uint8Array(16);

  // Fill the array with random values
  window.crypto.getRandomValues(randomBytes);

  // Set the UUID version and variant bits
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40; // Version 4 (random)
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80; // Variant 10

  // Convert the random bytes to a hexadecimal string
  let uuid = '';
  for (let i = 0; i < 16; i++) {
    const byte = randomBytes[i];
    uuid += (byte < 16 ? '0' : '') + byte.toString(16);
  }

  // Format the UUID string
  uuid = `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;

  return uuid;
}