# Calculator

Simple calculator with basic math functions

## Thoughts

The first interesting problem I encountered.
My operate function accepts the operator callback function.
I get the operator from the user as a string. Turns out that you can't pass a callback function as a string xP. And we cant use eval().  
I found the solution in [this post](https://stackoverflow.com/a/912675).  
Dictionary of handlers.  
Put all of the action functions you might need into an object

```javascript
const actions = {
  add: (a, b) => a + b,
  ...
};
```

and call them dictionary-style using the string.

```javascript
const res = operate(firstNum, +inputValue, actions[operator]);
```

Of course I could just use switch, but this approach looks more elegant for me.
