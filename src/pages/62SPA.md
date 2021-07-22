# SPA - DOM - 4

Yesterday we did
    - Introduction to events
    - Keyboard, mouse and browser events

    ```js
    const butt = document.querySelector("button");
    butt.addEventListener("click", (e) => { ... });
    butt.addEventListener("mouseenter", (e) => { ... });
    butt.addEventListener("mouseleave", (e) => { ... });

    const input = document.querySelector("#email");
    input.addEventListener("keydown", (e) => { ... });

    document.addEventListener("DOMContentLoaded", (e) => {
        ...
    })
    ```

# Review Quote of the Day

Today we will do
    - The event object and form events
    - Event propagation / delegation

# The Event Object

- Remember when we used the (e) parameter and e.keyCode in the kebyoard event listener?
- That's the event object
- Each event is represented by an object that is based on the Event interface
    - This means all events have a certain common set of functions and properties
    - Different events can also have custom properties
        - depending on the type of event
    - Some events happen on the window (resizing for example)
    - Some events happen on elements (click for example)

## Form events as an example, focusing on the event object

# Propagation, Delegation

## Event bubbling and propagation

> "Events bubble from innermost to outermost elements" - Someone somewhere
> Or they bubble up the DOM tree

- Propagation == What kind of stuff happens when an event happens

https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg

- normally the event listeners we are defining work during the "bubble" phase

- A common problem with bubbling is if we don't want the event to go to the parents
    - use `Event.stopPropagation()`

- Less commonly, we can also force the event listeners to work in the capture phase too
    - use a third argument `useCapture`

## Event delegation; Different Event Targets

> Event delegation promotes binding as few DOM event handlers as possible, since each event handler requires memory. For example, let’s say that we have an HTML unordered list we want to bind event handlers to. Instead of binding a click event handler for each list item (which may be hundreds for all we know), we bind one click handler to the parent unordered list itself.

### To do that, we need to look at two event properties

- `Event.target` vs. `Event.currentTarget`
    - target is the element that triggered the event (e.g., the user clicked on)
    - currentTarget is the element that the event listener is attached to.

- When we add elements dynamically after the page is loaded, we need to then again create new event handlers for them unless we delegate.
- Bad performance especially for long and changing lists
