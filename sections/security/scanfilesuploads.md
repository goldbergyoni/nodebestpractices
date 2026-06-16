# Scan uploaded files for malware before storing them

### One Paragraph Explainer

File upload endpoints are a common attack vector. A file that appears harmless
at the HTTP layer can carry a known malware signature, an embedded script, or
a crafted archive designed to exploit downstream consumers. Validating the
filename or MIME type alone is not enough — those values come from the client
and are trivially spoofed. The only reliable check happens on the file bytes,
server-side, before the file reaches permanent storage.

ClamAV is the standard open-source antivirus engine for server-side scanning.
Integrating it at the upload route means every file is inspected in memory
before it is written to disk, S3, or any other store.

### Code Example – scanning an upload in Express before saving

```javascript
const multer = require('multer');
const { scan, Verdict } = require('pompelmi');
const path = require('path');
const os = require('os');
const fs = require('fs/promises');

const upload = multer({ dest: os.tmpdir() });

app.post('/upload', upload.single('file'), async (req, res) => {
  const tmpPath = req.file.path;

  try {
    const result = await scan(tmpPath);

    if (result === Verdict.Malicious) {
      await fs.unlink(tmpPath);
      return res.status(422).json({ error: 'File rejected: malware detected' });
    }

    if (result === Verdict.ScanError) {
      await fs.unlink(tmpPath);
      return res.status(422).json({ error: 'Scan incomplete: file rejected as precaution' });
    }

    // Verdict.Clean — move to permanent storage
    await fs.rename(tmpPath, path.join('./uploads', req.file.originalname));
    res.json({ status: 'ok' });
  } catch (err) {
    await fs.unlink(tmpPath).catch(() => {});
    res.status(500).json({ error: 'Upload failed' });
  }
});
```

### What to look for in a scanning library

- **Typed verdicts** — distinguish `Clean`, `Malicious`, and `ScanError` (scan
  failure should fail closed, not silently pass)
- **No daemon required** — simpler ops; `clamscan` CLI is enough for most
  upload volumes
- **Zero runtime dependencies** — nothing to audit beyond ClamAV itself
- **Works in Docker** — ClamAV can run in a sidecar container and be reached
  via TCP socket

### Otherwise

Malicious files stored on your infrastructure can be served to other users,
trigger vulnerabilities in downstream parsers (PDF renderers, image processors,
archive extractors), or be used as staging for further attacks.

### External references

- 🔗 [ClamAV official documentation](https://docs.clamav.net/)
- 🔗 [OWASP – Unrestricted File Upload](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload)
- 🔗 [pompelmi – ClamAV wrapper for Node.js](https://github.com/pompelmi/pompelmi)
