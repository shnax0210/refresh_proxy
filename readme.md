### Pupuse:
Simple proxy that adds `Refresh` header to response, so the result pages are refreshed with some set period. It can be usefull to monitor some changes on a site.

### Ussage example with docker:
`docker run --rm -p 8081:8081 shnax0210/refresh_proxy -p 8081 -t http://localhost:8080 -s 5`