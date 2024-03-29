import { JSDOM } from 'jsdom';
import Field from "../js/Field";

describe('Field class', () => {
  let field;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><div></div>');
    global.document = dom.window.document;
    field = new Field(document.createElement('div'), 4, 4);
  });

  test('Field instance should have width and height properties', () => {
    expect(field.width).toBe(4);
    expect(field.height).toBe(4);
  });

  test('fieldGenerator method should generate the field', () => {
    // Testing field generation
  });
});
