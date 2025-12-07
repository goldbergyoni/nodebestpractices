# Evite publicar segredos no registro do npm

### Explicação em um Parágrafo
Precauções devem ser tomadas para evitar o risco de publicação acidental de segredos nos registros públicos do npm. Um arquivo `.npmignore` pode ser usado para colocar arquivos ou pastas específicos em uma blacklist, ou a lista `files` no `package.json` pode atuar como uma whitelist.

Para obter uma visão do que o npm publish realmente publicará no registro, o sinalizador `--dry-run` pode ser adicionado ao comando npm publish para fornecer uma visão detalhada do pacote tarbell criado.

É importante notar que se um projeto estiver utilizando os arquivos `.npmignore` e` .gitignore`, tudo o que não estiver em `.npmignore` será publicado no registro (isto é, o arquivo` .npmignore` substitui o `. gitignore`). Esta condição é uma fonte comum de confusão e é um problema que pode levar ao vazamento de segredos. Os desenvolvedores podem acabar atualizando o arquivo `.gitignore`, mas esquecem de atualizar` .npmignore` também, o que pode levar a que um arquivo potencialmente sensível não seja empurrado para o controle de origem, mas ainda seja incluído no pacote npm.

### Exemplo de Código
Exemplo de arquivo .npmignore
```
# Tests
test
coverage

# Build tools
.travis.yml
.jenkins.yml

# Environment
.env
.config

```

Exemplo uso de uma lista de arquivos no package.json

```json
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### O que Outros Blogueiros Dizem

Do blog de [Liran Tal & Juan Picado em Snyk](https://snyk.io/blog/ten-npm-security-best-practices/):
> ... Outra boa prática a adotar é utilizar a propriedade files em package.json, que funciona como whitelist e especifica a matriz de arquivos a serem incluídos no pacote a ser criado e instalado (enquanto o arquivo ignore funciona como uma lista negra). A propriedade files e um arquivo ignore podem ser usados ​​juntos para determinar quais arquivos devem ser incluídos explicitamente, assim como excluídos, do pacote. Ao usar ambos, o primeiro a propriedade files em package.json tem precedência sobre o arquivo ignore.

Do [blog do npm](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... Quando você executa npm publish, o npm agrupa todos os arquivos no diretório atual. Ele toma algumas decisões sobre o que incluir e o que ignorar. Para tomar essas decisões, ele usa o conteúdo de vários arquivos no diretório do projeto. Esses arquivos incluem .gitignore, .npmignore e a matriz de arquivos no pacote.json. Também inclui sempre certos arquivos e ignora outros.