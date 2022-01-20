# Avoid module loading using a variable

### One Paragraph Explainer

파라메터를 이용해서 파일을 임포트 하는 방식을 피해야 한다. 유저의 인풋에 변수가 변경되어 파일이 임포트 될 수 있다. 이러한 방식을 `fs.readFile()`같은 함수를 사용할 떄에도 동일하게 적용되어야 한다.

### Code example

```javascript
// insecure, as helperPath variable may have been modified by user input
const badWayToRequireUploadHelpers = require(helperPath);

// secure
const uploadHelpers = require('./helpers/upload');
```
