// index.test.js

const { identificarBandeiraCartao } = require('./index'); // Importa a função do arquivo index.js

test('identificar bandeira Visa', () => {
  const numeroCartao = '4916195016675475'; // Visa de 16 dígitos
  const bandeira = identificarBandeiraCartao(numeroCartao);
  expect(bandeira).toBe('Visa');
});

test('identificar bandeira MasterCard', () => {
  const numeroCartao = '5105105105105100'; // MasterCard de 16 dígitos
  const bandeira = identificarBandeiraCartao(numeroCartao);
  expect(bandeira).toBe('MasterCard');
});

test('identificar bandeira desconhecida', () => {
  const numeroCartao = '1234567890123456'; // Número inválido
  const bandeira = identificarBandeiraCartao(numeroCartao);
  expect(bandeira).toBe('Bandeira desconhecida');
});
