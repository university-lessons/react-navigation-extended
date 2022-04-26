# React Navigator Example

This app shows how to mix and nest Stack and Tab navigators.

`App.js` initializes `AppContext`, a global context shared between `App` children. Check Context API docs for details: [https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext).

`Routes.jsx` organizes 3 Navigators:

```
  NavigatorLogin
    > Page Login
  NavigatorTabs
    > Page Home
    > Page Listing
    NavigatorNested
      > Page Demo 1
      > Page Demo 2
      > Page Demo 3
```

`NavigatorLogin` only shows up when app context isLoggedIn is false; When this happens, the entire NavigatorTabs is ignored and his routes are secure: `{!app.isLoggedIn ? <NavigatorLogin /> : <NavigatorTabs />}`

`NavigatorTabs` replaces `NavigatorLogin` when context changes to true;

The last page of `NavigatorTabs` is another Stack Navigator: `NavigatorNested`. These pages dont show up in Tabs navigator.

Enjoy :)
