**Simple Dork**

site:target.com inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth

**Advanced Dork**

site:*<*.target.com intext:"login" | intitle:"login" | inurl:"login" | intext:"username" | intitle:"username" | inurl:"username" | intext:"password" | intitle:"password" | inurl:"password"

**Wordpress Dorking**

site:target.com inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download

**Swagger-UI Dorking**

Api Docs→ inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:"target.com"

**Configuration Files Dorking**

site:target.com ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini

**SQL Error Based Dork**

site:flipkart.com intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"

**Documents Dork**

site:target.com ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv

**Third Party Exposure**

site:http://ideone.com | site:http://codebeautify.org | site:http://codeshare.io | site:http://codepen.io | site:http://repl.it | site:http://justpaste.it | site:http://pastebin.com | site:http://jsfiddle.net | site:http://trello.com | site:*.atlassian.net | site:bitbucket.org "target.com"

**Sensitive info leak via google dork**

site:.target.com ( "date of birth" OR confidential OR "internal use only" OR  "balance sheet" OR "profit and loss" OR  "banking details" OR  "source code" OR "national id" OR "top secret" ) (ext:pdf OR ext:doc OR ext:ppt OR ext:txt OR ext:csv) 

**Google Dork - Sensitive Data**

inurl:email= | inurl:phone= | inurl:name= | inurl:user= inurl:& site:example[.]com

**Google Dork - Exposed Configs**

site:example[.]com ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json

**Google Dork - XSS Prone Parameters**

site:example[.]com inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:&

**Test for XSS in param value:**

'"><img src=x onerror=alert()> 

**Google Dork for File Uploads:**

site:example[.]com intext:"choose file" | intext:"select file" | intext:"upload PDF"

**Google Dork - Cloud File Shares:**

site:http://drive.google.com "example[.]com"  
site:http://docs.google.com inurl:"/d/" "example[.]com"  
site:http://dropbox.com/s "example[.]com"  

**Spreadsheets: check Spreadsheets permission is set to Editor **
site:*.target.com intext:"docs.google.com/spreadsheets"

**This Google Dork Exposes Internal Test Environments**

inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo site:example[.]com

**Dork:**

site:*.com intitle:"index of" "Backup" OR "Website-Backup" OR "User record"

Credit: All About Sec
