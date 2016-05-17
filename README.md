#TODO

In this exercise, you will design schemas for the category, post, and user models in the application, using the following json as a blueprint:

```javascript
{
  "users": {
    "username": "node master"
  },

  "posts": {
    "title": "What's new in Angular 4",
    "text": "This is my short blog post about angular 4 :(",
    "author": "ObjectId('55b0593cbee0e5961b4a7c4a')",
    "categoires": [
      "ObjectId('55b0593cbee0e5961b4a7c4a')",
      "ObjectId('55b0593cbee0e5961b4a7c4a')",
      "ObjectId('55b0593cbee0e5961b4a7c4a')"
    ]
  },

  "categories": {
    "name": "I'm a unique category"
  }
}
```