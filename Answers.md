1. What problem does the context API help solve?
    It’s aimed at solving the problem of prop drilling, it will allow you to skip levels.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that send data from your application to your store. 
Reducers specify how the application's state changes in response to actions sent to the store.
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the "global" state that all components in the component tree can access.
Component local state is state that is local to a single component and cannot be seen outside of this component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux, becuase it is great for scealing.