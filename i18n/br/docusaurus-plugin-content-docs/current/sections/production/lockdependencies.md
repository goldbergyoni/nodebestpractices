# Bloqueio de dependências

<br/><br/>

### Explicação de um Parágrafo

Seu código depende de muitos pacotes externos, digamos que ele "requeira" e use momentjs-2.1.4. Depois, por padrão, quando você implanta para produção, o npm pode buscar momentjs 2.1.5, o que infelizmente traz alguns novos bugs à aplicação. Usando os arquivos de configuração do npm e o argumento ```–save-exact = true``` instrui o npm a se referir à *exata* versão que foi instalada, então da próxima vez que você executar ```npm install``` (em produção ou dentro de um contêiner Docker que você planeja enviar para a frente para testes), a mesma versão dependente será buscada. Uma abordagem alternativa e popular é usar um arquivo `.shrinkwrap` (gerado facilmente usando npm) que indica exatamente quais pacotes e versões devem ser instalados para que nenhum ambiente seja tentado a buscar versões mais novas do que o esperado.

* **Atualização:** a partir do npm 5, as dependências são bloqueadas automaticamente usando .shrinkwrap. O Yarn, um gerenciador de pacotes emergente, também bloqueia dependências por padrão.

<br/><br/>

### Exemplo de código: arquivo .npmrc que instrui o npm a usar as versões exatas

```npmrc
// salve isso como arquivo .npmrc no diretório do projeto
save-exact:true
```

<br/><br/>

### Exemplo de código: arquivo shrinkwrap.json que destila a árvore de dependência exata

```json
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": {
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### Exemplo de código: npm 5 arquivo de bloqueio de dependências - package.json

```json
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```
