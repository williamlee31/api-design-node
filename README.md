##Todo

In this exercise, you will create all the necessary RESTful API routes for the ‘lions’ API:

```javascript
{
  "GET /lions": {
    "desc": "returns all lions",
    "response": "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /lions/:id": {
    "desc": "returns one lion respresented by its id",
    "response": "200 application/json",
    "data": {}
  },

  "POST /lions": {
    "desc": "create and returns a new lion uisng the posted object as the lion",
    "response": "201 application/json",
    "data": {}
  },

  "PUT /lions/:id": {
    "desc": "updates and returns the matching lion with the posted update object",
    "response": "200 application/json",
    "data": {}
  },

  "DELETE /lions/:id": {
    "desc": "deletes and returns the matching lion",
    "response": "200 application/json",
    "data": {}
  }
}
```