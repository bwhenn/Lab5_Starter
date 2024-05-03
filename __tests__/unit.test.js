// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('testing isPhoneNumber', () => {
  // TODO
  expect(isPhoneNumber("(626)111-222")).toBe(false);
});

test('testing isPhoneNumber', () => {
  // TODO
  expect(isPhoneNumber("(626)111-")).toBe(false);
});

test('testing isPhoneNumber', () => {
  // TODO
  expect(isPhoneNumber("(626)111-2224")).toBe(true);
});

test('testing isPhoneNumber', () => {
  // TODO
  expect(isPhoneNumber("(626)111-2223")).toBe(true);
});

test('testing isStrongPassword', () => {
  // TODO
  expect(isStrongPassword("a1234")).toBe(true);
});

test('testing isStrongPassword', () => {
  // TODO
  expect(isStrongPassword("a12345")).toBe(true);
});

test('testing isStrongPassword', () => {
  // TODO
  expect(isStrongPassword("1234")).toBe(false);
});

test('testing isStrongPassword', () => {
  // TODO
  expect(isStrongPassword("hi")).toBe(false);
});

test('testing isEmail', () => {
  // TODO
  expect(isEmail("brian@ucsd.edu")).toBe(true);
});

test('testing isEmail', () => {
  // TODO
  expect(isEmail("join@gmail.com")).toBe(true);
});

test('testing isEmail', () => {
  // TODO
  expect(isEmail("notaemail")).toBe(false);
});

test('testing isEmail', () => {
  // TODO
  expect(isEmail("badformat@gmail")).toBe(false);
});

test('testing isDate', () => {
  // TODO
  expect(isDate("12/2/2024")).toBe(true);
});

test('testing isDate', () => {
  // TODO
  expect(isDate("6/30/2003")).toBe(true);
});

test('testing isDate', () => {
  // TODO
  expect(isDate("2024")).toBe(false);
});

test('testing isDate', () => {
  // TODO
  expect(isDate("20")).toBe(false);
});

test('testing isHexCoor', () => {
  // TODO
  expect(isHexColor("AAAAAA")).toBe(true);
});

test('testing isHexCoor', () => {
  // TODO
  expect(isHexColor("A0B94A")).toBe(true);
});

test('testing isHexCoor', () => {
  // TODO
  expect(isHexColor("A")).toBe(false);
});

test('testing isHexCoor', () => {
  // TODO
  expect(isHexColor("AB")).toBe(false);
});