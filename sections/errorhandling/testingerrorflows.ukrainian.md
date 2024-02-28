# Тестування потоків помилок за допомогою улюбленого фреймворку для тестування

### Пояснення за один абзац

Тестування "щасливих" шляхів не краще, ніж тестування випадків збоїв. Гарне покриття коду тестами вимагає тестування
виняткових ситуацій. Інакше, немає впевненості, що виключення дійсно оброблені належним чином. Кожен фреймворк для
модульного тестування, як-от [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/), підтримує тестування
виключень (приклади коду нижче). Якщо вам здається нудним тестувати кожну внутрішню функцію та виключення, ви можете
обмежитись тестуванням лише HTTP помилок REST API.

### Приклад коду: забезпечення викидання правильного винятку за допомогою Mocha & Chai

<details>
<summary><strong>Javascript</strong></summary>

```javascript
describe('Чат Facebook', () => {
    it('Повідомляє про нове повідомлення в чаті', () => {
        const chatService = new chatService();
        chatService.participants = getDisconnectedParticipants();
        expect(chatService.sendMessage.bind({message: 'Привіт'})).to.throw(ConnectionError);
    });
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
describe('Чат Facebook', () => {
    it('Повідомляє про нове повідомлення в чаті', () => {
        const chatService = new chatService();
        chatService.participants = getDisconnectedParticipants();
        expect(chatService.sendMessage.bind({message: 'Привіт'})).to.throw(ConnectionError);
    });
});
```

</details>

### Приклад коду: забезпечення того, що API повертає правильний HTTP код помилки

<details>
<summary><strong>Javascript</strong></summary>

```javascript
it('Створює нову групу Facebook', () => {
    const invalidGroupInfo = {};
    return httpRequest({
        method: 'POST',
        uri: 'facebook.com/api/groups',
        resolveWithFullResponse: true,
        body: invalidGroupInfo,
        json: true
    }).then((response) => {
        expect.fail('якби код у цьому блоці виконався, то у попередній операції не було викинуто помилки')
    }).catch((response) => {
        expect(400).to.equal(response.statusCode);
    });
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
it('Створює нову групу Facebook', async () => {
    let invalidGroupInfo = {};
    try {
        const response = await httpRequest({
            method: 'POST',
            uri: 'facebook.com/api/groups',
            resolveWithFullResponse: true,
            body: invalidGroupInfo,
            json: true
        })
        // якби код у цьому блоці виконався, то у попередній операції не було викинуто помилки
        expect.fail('Запит повинен був завершитися з помилкою')
    } catch (response) {
        expect(400).to.equal(response.statusCode);
    }
});
```

</details>