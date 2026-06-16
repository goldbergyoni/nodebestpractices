# Розумійте теги образів vs дайджести і використовуйте тег `:latest` з обережністю

### Пояснення за один абзац

Якщо це продакшен-ситуація і безпека та стабільність важливі, то просто "зручність" — ймовірно, не найкращий вирішальний фактор. Крім того, тег `:latest` є тегом Docker за замовчуванням. Це означає, що розробник, який забув додати явний тег, випадково завантажить нову версію образу як `latest`, що може призвести до дуже непередбачуваних результатів, якщо тег `latest` використовується як останній продакшен-образ.

### Приклад коду:

```bash
$ docker build -t company/image_name:0.1 .
# :latest образ не оновлюється
$ docker build -t company/image_name
# :latest образ оновлюється
$ docker build -t company/image_name:0.2 .
# :latest образ не оновлюється
$ docker build -t company/image_name:latest .
# :latest образ оновлюється
```

### Що кажуть інші блогери
З блогу [Vladislav Supalov](https://vsupalov.com/docker-latest-tag/):
> Деякі люди очікують, що :latest завжди вказує на останню завантажену версію образу. Це неправда.

З [Docker success center](https://success.docker.com/article/images-tagging-vs-digests)
> 

<br/>

