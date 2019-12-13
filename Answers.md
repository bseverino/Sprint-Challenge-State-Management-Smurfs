1. What problem does the context API help solve?

As a React app gets larger, it involves more and more components, which makes prop drilling harder to keep track of. Context API allows us to store state on a context object and retrieve it from any component, instead of having to pass props down through the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducer functions take in two arguments - the current state and an action, and returns a new state based on the action given. An action refers to a specific function within the reducer function that we want to invoke. The store is an immutable state tree which provides global state and is handled by dispatching actions.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, while component state is local and contained within components. The former is best for large-scale applications where we want state to be predicatable throughout, while the latter is better for small apps where we have an easier time keeping track of each individual component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to perform async operations within action creators. It is a function that is returned by another function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I'm enjoying Redux the most because it's intuitive and I like being able to keep track of state in one place.
