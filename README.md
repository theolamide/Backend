# Backend

## BASEURL

- https://build-week-how-to.herokuapp.com/ \*

## ENDPOINTS

| Endpoint           | Request Type | Request                                         | Response                              |
| ------------------ | ------------ | ----------------------------------------------- | ------------------------------------- |
| /api/auth/register | POST         | requires a username, password and, and usertype | returns the userobject                |
| /api/auth/login    | POST         | requires a username and a password              | returns a welcome message and a token |
