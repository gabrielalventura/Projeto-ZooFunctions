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

  it('Caso a função receba como parametro `Thu` e `09:00-AM` deve lançar a exceção com a mensagem: `The day must be valid. Example: Monday`', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Caso a função receba como parametro `Friday` e `09:00-ZM` deve lançar a exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Caso a função receba como parametro `Friday` e `D5:00-AM` deve lançar a exceção com a mensagem:`The hour should represent a number`', () => {
    expect(() => getOpeningHours('Friday', 'D5:00-AM')).toThrow('The hour should represent a number');
  });

  it('Caso a função receba como parametro `Saturday` e `14:00-PM` deve lançar a exceção com a mensagem:`The hour must be between 0 and 12`', () => {
    expect(() => getOpeningHours('Saturday', '14:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  it('Caso a função receba como parametro `Sunday` e `03:65-PM` deve lançar a exceção com a mensagem:`The minutes must be between 0 and 59`', () => {
    expect(() => getOpeningHours('Sunday', '03:65-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
