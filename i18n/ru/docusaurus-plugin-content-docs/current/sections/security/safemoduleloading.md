# Избегайте загрузки модулей с использованием переменных

### Объяснение в один абзац

Избегайте вызова/импорта другого файла с путем, указанным в качестве параметра, из-за опасений, что он мог возникнуть из-за ввода пользователя. Это правило может быть расширено для доступа к файлам вообще (то есть `fs.readFile()`) или другим чувствительным ресурсам с динамическими переменными, происходящими из пользовательского ввода.

### Пример кода

```javascript
// insecure, as helperPath variable may have been modified by user input
const badWayToRequireUploadHelpers = require(helperPath);

// secure
const uploadHelpers = require('./helpers/upload');
```
