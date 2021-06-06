# Tome cuidado extra ao trabalhar com processos filhos

### Explicação em um Parágrafo

Por melhores que sejam os processos filhos, eles devem ser usados ​​com cautela. A transmissão da entrada do usuário deve ser higienizada, se não completamente evitada.
Os perigos de entradas não analisadas executando em nível de lógica de sistema são ilimitados, alcançando desde a execução remota de código até a exposição de dados confidenciais do sistema e até mesmo perda de dados. Uma lista de verificação de preparações pode ser algo do tipo:
- evite a entrada do usuário em todos os casos, senão, valide e limpe-a
- limitar os privilégios dos processos pai e filhos usando identidades de usuário/grupo
- execute o seu processo dentro de um ambiente isolado para evitar efeitos colaterais indesejados se as outras preparações falharem

### Exemplo de código: perigos de execuções de processos de filho não-analizados

```javascript
const { exec } = require('child_process');

...

// por exemplo, pegue um script que receba dois argumentos, um deles é uma entrada do usuário não-analizada
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imagine o que poderia acontecer se o usuário simplesmente inserisse algo como '&& rm -rf --no-preserve-root /'
// você teria uma surpresa indesejada
```

### Recursos Adicionais

Da [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback) do Node.js sobre processos filhos:

> Nunca passe a entrada de usuário não-analizada para esta função. Qualquer entrada contendo metacaracteres de shell pode ser usada para disparar a execução arbitrária de comandos.
