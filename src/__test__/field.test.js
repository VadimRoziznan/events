import { JSDOM } from 'jsdom';
import Field from "../js/Field";

describe('Field class', () => {
  let field;
  let element;

  beforeEach(() => {
    const { window } = new JSDOM('<!DOCTYPE html>');
    global.document = window.document;
    element = document.createElement('div');
    const width = 5;
    const height = 5;
    field = new Field(element, width, height);
  });

  afterEach(() => {
    global.document = null;
  });

  it('should have width and height properties', () => {
    expect(field.width).toBe(5);
    expect(field.height).toBe(5);
  });

  it('should generate the field correctly', () => {
    field.fieldGenerator();

    const gridElements = field.element.querySelectorAll('.grid');
    expect(gridElements.length).toBe(5);

    gridElements.forEach(gridElement => {
      const squareElements = gridElement.querySelectorAll('.square');
      expect(squareElements.length).toBe(5);
    });
  });
});
