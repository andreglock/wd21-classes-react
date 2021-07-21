# UIB 30 - SASS continued

## Mixins

"Predefined reusable rulesets"
    @mixin coolbox {
        border: 2px solid double;
        border-radius: 10px;
        padding: 10px;
    }
    .card {
        background: lightblue;
        @include coolbox;
    }
    .example {
        background: palegreen;
        @include coolbox;
    }
    button {
        @include coolbox;
    }

## You can add parameters!

    @mixin bordered($width, $color) {
        border: $width solid $color;
        border-radius: $width;
    }
    .card {
        background: lightblue;
        @include bordered(1px, red);
    }

## One of the main uses for mixins

Bootsrap has some mixins!

    // media-breakpoint-up
        // @media (min-width: ...) {}

    // media-breakpoint-down
        // @media (max-width: ...) {}

    // media-breakpoint-between
        // @media (min-width: ...) and (max-width: ...) {}

    // For example:
    @include media-breakpoint-up(md) {
        nav {
            background: red;
        }
    }

# Importing stuff!

Sometimes it makes sense to split your projects SCSS/SASS into multiple files. For example, you can move you variables into a separate file.

@use "card/variables";
@use "hero/variables";

# Vanilla CSS variables

Actually, custom properties.
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

Common best practice    

    :root {
        --main-bg-color: brown;
    }    
    element {
        background-color: var(--main-bg-color);
    }

*Inheritance*
    <div class="box one">
        <div class="box two">
            <div class="box three"></div>
            <div class="box four"></div>
        </div>
    </div>
    .two {
        --test: 10px;
    }
    .three {
        --test: 2em; 
    }    

    For the class="two" element: 10px
    For the class="three" element: 2em
    For the class="four" element: 10px (inherited from its parent)
    For the class="one" element: invalid value, which is the default value of any custom property