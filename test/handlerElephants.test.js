const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso param receba `count` deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
});
