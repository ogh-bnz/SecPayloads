# These dorks that can be used to find potentially exposed Amazon S3 buckets ⮟

```
site:http://s3.amazonaws.com intitle:index.of.bucket "Folder"
site:http://amazonaws.com inurl:".s3.amazonaws.com/" "Directory"
site:.s3.amazonaws.com "Company Name" intitle:index.of.bucket
site:.s3.amazonaws.com "Company"
intitle:index.of.bucket
site:http://s3.amazonaws.com intitle:Bucket loading
site:*.amazonaws.com inurl:index.html
site:http://s3.amazonaws.com intitle:AccessDenied
site:http://s3.amazonaws.com intitle:BucketPolicy
site:.s3.amazonaws.com "aws-access-key-id"
site:http://s3.amazonaws.com intitle:index.html "S3 Bucket"
site:*.amazonaws.com inurl:index.html "bucket-name"
site:http://s3.amazonaws.com intitle:ListBucketResult
site:http://s3.amazonaws.com intitle:NoSuchBucket
site:http://s3.amazonaws.com intitle:index.of.bucket
site:http://amazonaws.com inurl:".s3.amazonaws.com/"
```

# Dorks using specific keywords ⮟

```
site:http://s3.amazonaws.com intitle:index.of.bucket "aws-internal"
site:http://amazonaws.com inurl:".s3.amazonaws.com/" "backup"
site:.s3.amazonaws.com "Company Name" intitle:index.of.bucket "database"
site:http://s3.amazonaws.com intitle:AccessDenied " sensitive"
site:http://s3.amazonaws.com intitle:BucketPolicy "public-read"
```

# Dorks using file extensions ⮟
```
site:http://s3.amazonaws.com filetype:pdf "confidential"
site:http://amazonaws.com inurl:".s3.amazonaws.com/" filetype:csv " sensitive"
site:.s3.amazonaws.com "Company Name" filetype:docx "internal"
site:http://s3.amazonaws.com filetype:zip "backup"
```
# Dorks using directory traversal ⮟
```
site:http://s3.amazonaws.com inurl:/../
site:http://amazonaws.com inurl:".s3.amazonaws.com/../"
site:.s3.amazonaws.com "Company Name" inurl:/../
site:http://s3.amazonaws.com inurl:/./
```
# Dorks using specific HTTP status codes ⮟
```
site:http://s3.amazonaws.com intitle:index.of.bucket "HTTP/1.1 403 Forbidden"
site:http://amazonaws.com inurl:".s3.amazonaws.com/" "HTTP/1.1 404 Not Found"
site:.s3.amazonaws.com "Company Name" intitle:index.of.bucket "HTTP/1.1 200 OK"
```
# Dorks using AWS-specific keywords ⮟
```
site:http://s3.amazonaws.com "aws-access-key-id"
site:http://amazonaws.com inurl:".s3.amazonaws.com/" "aws-secret-access-key"
site:.s3.amazonaws.com "Company Name" "aws-security-token"
site:http://s3.amazonaws.com "aws-credentials"
```
# Dorks using regex patterns ⮟
```
site:http://s3.amazonaws.com inurl:regex("[a-zA-Z0-9]{32}") ( searches for 32-character hexadecimal strings, potentially AWS access keys)
site:http://amazonaws.com inurl:regex("[a-zA-Z0-9/+=]{40}") ( searches for 40-character base64-encoded strings, potentially AWS secret access keys)
```
