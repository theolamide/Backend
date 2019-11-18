# Backend

## BASEURL

- https://build-week-how-to.herokuapp.com/ \*

## ENDPOINTS

| Endpoint           | Request Type | Request                                     | Response                                        |
| ------------------ | ------------ | ------------------------------------------- | ----------------------------------------------- |
| /api/auth/register | POST         | {username: "", password: "", usertype: int} | {welcome: username, password: encrypted string} |
| /api/auth/login    | POST         | {username: "", password: ""}                | {userobject, token}                             |
| /api/howtos        | GET          | requires a token                            | [{howtos}]                                      |
| /api/howtos/:id    | GET          | requires a token                            | {instruction: string, number: int}              |
| /api/howtos        | POST         | {name: "", desc: "", user_id: int}          | no return at the moment                         |
