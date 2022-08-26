const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função receba como parametros `Monday` e `09:00-AM` deve retornar a string `The zoo is closed`', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
});
