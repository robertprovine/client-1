import Conversions from './Conversions';

const CSSPropertyMap = [

  {
    CSSProperty: 'color',
    conversion: Conversions.rgba,
    values: [
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 1, step: .1 },
    ],
  },

  {
    CSSProperty: 'backgroundColor',
    conversion: Conversions.rgba,
    values: [
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 1, step: .1 },
    ],
  },

];

export default CSSPropertyMap;
