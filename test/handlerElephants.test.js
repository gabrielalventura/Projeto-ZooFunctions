const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função receba `count` deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Caso a função receba `names` deve retornar um array de nomes que possui o nome `Jefferson`', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Caso a função receba `averageAge` deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Caso a função receba como parametro algo diferente de uma string, deve retornar `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Caso a função receba undefined deve retornar undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
});
