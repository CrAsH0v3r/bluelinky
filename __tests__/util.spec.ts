import { tempCodeToCelsius, celciusToTempCode } from '../src/util';

describe('Utility', () => {
  // it('converts temp code to celsius', () => {
  //   expect(tempCodeToCelsius('0H')).toEqual(14);
  //   expect(tempCodeToCelsius('AH')).toEqual(19);
  // });

  it('converts temp code to celsius in Canada', () => {
    // expect(tempCodeToCelsius('04H', 'CA')).toEqual(18);
    // expect(tempCodeToCelsius('0BH',' CA')).toEqual(21.5);
    // expect(tempCodeToCelsius('10H', 'CA')).toEqual(24);
    // expect(tempCodeToCelsius('18H', 'CA')).toEqual(28);
    expect(tempCodeToCelsius('20H', 'CA')).toEqual(32);
  });

  // it('converts celsius to temp code', () => {
  //   expect(celciusToTempCode(14)).toEqual('0H');
  //   expect(celciusToTempCode(19)).toEqual('AH');
  // });
});
