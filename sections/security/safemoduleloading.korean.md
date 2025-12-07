# 변수를 사용해 모듈을 로딩하는것을 피해라

### 한문단 요약

사용자의 입력으로 값이 변할 수 있기에 매개변수로 제공된 경로를 사용한 파일의 사용을 피해라.
일반적으로 `fs.readFile()` 또는 사용자가 입력한 변수가 민감한 리소스에 접근 할 수 있도록 확장될 수 있다.

### 코드 예시

```javascript
// 사용자의 입력에 의해 helperPath 변수가 수정되었을 수 있기 때문에 안전하지 않음
const badWayToRequireUploadHelpers = require(helperPath);

// 안전함
const uploadHelpers = require('./helpers/upload');
```
