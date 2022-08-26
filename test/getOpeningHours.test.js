const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função receba como parametros `Monday` e `09:00-AM` deve retornar a string `The zoo is closed`', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Caso a função não receba parametros, ela deverá retorna um objeto com os dias e horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Caso a função receba como parametro `Friday` e `9:00-PM` deve retornar a string `The zoo is closed`', () => {
    expect(getOpeningHours('Friday', '09:00-PM')).toBe('The zoo is closed');
  });
});
