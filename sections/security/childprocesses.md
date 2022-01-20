# Be cautious when working with child processes

### One Paragraph Explainer

자식 프로세스가 커질수록, 더더욱 조심해야 한다. 인풋 값을 보낼때에는 무결한 값을 보내야 한다. 그렇지 않을 경우 시스템 수준의 로직의 제한이 사라지고, 원격 코드 주입으로 인해 시스템 테이터에 접근이 가능해 진다. 다음과 같은 사항을 주의해야 한다.

- 무결성과 유효성을 거치더라도 유저 인풋을 자제해야 한다.
- 유저와 그룹에 대한 아이디를 사용해서 부모와 자식 프로세스의 권한을 제어해야 한다.
- 다른 예방책이 무너지더라도 부작용을 예방하기 위해 고립된 환경에서 프로세스를 실행시켜라.

### Code example: Dangers of unsanitized child process executions

```javascript
const { exec } = require('child_process');

...

// as an example, take a script that takes two arguments, one of them is unsanitized user input
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imagine what could happen if the user simply enters something like '&& rm -rf --no-preserve-root /'
// you'd be in for an unwanted surprise
```

### Additional resources

From the Node.js child process [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):

> 무결성이 확실하지 않은 유저 인풋은 절대 넘기지 마라. 어떤 인풋이듯 쉘의 메타 데이터를 담고 있다면 추상 커맨드 인젝션이 가능하다.
