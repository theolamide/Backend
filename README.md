# Backend

## BASEURL

- https://build-week-how-to.herokuapp.com/ \*

## ENDPOINTS

| Endpoint                      | Request Type | Request                                                | Response                                        |
| ----------------------------- | ------------ | ------------------------------------------------------ | ----------------------------------------------- |
| /api/auth/register            | POST         | {username: "", password: "", email: "", usertype: int} | {welcome: username, password: encrypted string} |
| /api/auth/login               | POST         | {username: "", password: ""}                           | {userobject, token}                             |
| /api/howtos                   | GET          | requires a token                                       | [{howtos}]                                      |
| /api/howtos/:id               | GET          | requires a token                                       | {instruction: string, number: int}              |
| /api/howtos                   | POST         | {name: "", desc: "", user_id: int}                     | no return at the moment                         |
| /api/howtos/:id               | PUT          | {name: "", desc: "", user_id: int}                     | no return at the moment                         |
| /api/howtos/:id               | DELETE       | {}                                                     | no return at the moment                         |
| /api/howtos/:id/steps         | GET          | requires a token                                       | [{number: int}, {intruction: string}]           |
| /api/howtos/:id/steps/:number | GET          | requires a token                                       | {instruction: string}                           |
| /api/howtos/:id/steps         | POST         | {number: int, instruction: string}                     | no return at the moment                         |
| /api/howtos/:id/steps/:number | PUT          | {number: int, instruction: string}                     | no return at the moment                         |
| /api/howtos/:id/steps/:number | DELETE       | {}                                                     | no return at the moment                         |
