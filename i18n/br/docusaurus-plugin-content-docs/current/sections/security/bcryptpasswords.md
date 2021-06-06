# Evite usar a biblioteca de criptografia do Node.js para manipular senhas, use Bcrypt

### Explicação em um Parágrafo

Ao armazenar senhas de usuários, use um algoritmo hash adaptativo como o bcrypt, oferecido pelo [módulo bcrypt npm](https://www.npmjs.com/package/bcrypt) é recomendado em vez de usar o módulo de criptografia Node.js nativo. `Math.random ()` também nunca deve ser usado como parte de qualquer senha ou geração de token devido à sua previsibilidade.

O módulo `bcrypt` ou similar deve ser usado ao contrário da implementação JavaScript, pois quando se usa `bcrypt`, um número de 'rounds' pode ser especificado para fornecer um hash seguro. Isso define o fator de trabalho ou o número de 'rounds' pelos quais os dados são processados, e mais rounds de hash levam a hash mais seguro (embora isso custe tempo de CPU). A introdução de hash rounds significa que o fator de força bruta é reduzido significativamente, pois os crackers de senha são retardados, aumentando o tempo necessário para gerar uma tentativa.

### Exemplo de Código

```javascript
// gerando uma senha segura assincronamente usando 10 rodadas de hash
bcrypt.hash('myPassword', 10, function(err, hash) {
  // Armazenar hash segura no registro do usuário
});

// comparar uma entrada de senha fornecida com o hash salvo
bcrypt.compare('somePassword', hash, function(err, match) {
  if(match) {
   // Senhas conferem
  } else {
   // Senhas não conferem
  } 
});
```

### O que Outros Blogueiros Dizem

Do blog de [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ... não é só usar apenas o algoritmo hash correto. Falei extensivamente sobre como a ferramenta certa também inclui o ingrediente necessário de "tempo" como parte do algoritmo de hash de senha e o que significa para o invasor que está tentando decifrar senhas por meio de força bruta.
