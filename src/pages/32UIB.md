# Animations

## Transition

- "Transition: awesomer than fancy shapes" - Joel 2021
- `transition`
    - Shorthand property
        - comma separated, like background
    - CSS

            transition:
                [transition-property]
                [transition-duration]
                [transition-timing-function]
                [transition-delay]

        - `[transition-property]`
            - which property to animate
            - can be `all` (default)
        - `[transition-duration]`
            - for example 3s or 300ms
        - `[transition-timing-function]`
            - ease, linear, custom (bezier)
        - `[transition-delay]`
            - for example 3s or 300ms
    - `transition: all 1s, background 3s ease 200ms;`

- Best Design Practices
    - When?
        - Rarely
        - During actions (:focus)
        - As stylistic elements (background changes)
    - How much?
        - Subtle
        - Real fast (0.3s)
        - or Real slow (20s)

## Custom animations

- Creation custom animations is based on two CSS things:
    - `@keyframes`
    - `animation`

 - `@keyframes [name] { ... }`
    - Defines the name and the steps of an animation
    - Multiple steps in one animation
- `animation`
    - Defines which animation play for which element
    - Defines how the animation plays
    - Shorthand
        - Is good at understanding what you mean
        - Check the specific order in MDN
    - Can be confusing
        -  `animation: 3s ease-in 1s 2 reverse both paused slidein;`
    - Separated values
        - `animation-name`: Potato, MyAnimation
        - `animation-duration`: 5s, 500ms
        - `animation-iteration-count`: 5, infinite
        - `animation-delay`: 2s, 900ms
        - `animation-direction`: reverse, alternate
        - `animation-timing-function`: linear, ease
        - `animation-fill-mode`: forwards
        - `animation-play-state`: paused