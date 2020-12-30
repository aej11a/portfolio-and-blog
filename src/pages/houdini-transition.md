---
slug: "/article/houdini-transitions"
date: "2020-12-29"
title: "Animated backgrounds and masks with the CSS Houdini Paint API and custom properties"
---

# How to animate backgrounds and masks with the CSS Houdini Paint API and custom properties

CSS Houdini is a set of low-level APIs which allow developers more control over rendering than ever before. It allows us to write JavaScript to control parts of the DOM rendering process, instead of using workarounds to change styles and animations after the DOM renders.

Houdini includes many APIs, including complex custom properties, animations, layout, image painting, and more. You can find a full list [here](http://How to animate backgrounds and masks with the CSS Houdini Paint API and custom properties).

In this article, we’ll learn about using custom properties to create animations in the Paint API.

## What are Custom Properties?

Custom properties allow…..
More info can be found here:

## What is the Paint API?

The Paint API allows….
A great introduction can be found here: https://css-tricks.com/the-css-paint-api/

## Putting them Together to Create an Animated Background

Since custom properties are typed, they can be transitioned exactly like any CSS property, the way we might use a `transition` to smoothly add a box-shadow for a floating element. This means we can `transition` a custom property and pass it in to our paint function as an argument to create an animated paint!

As an example, we’ll create an animated highlighting background.

First, we’ll create a Paint Worklet and register it:

`code sample`

The code above paints a simple box slightly smaller than the element. We also add a multiplier on line X which will be used for the animation.

In our CSS, we’ll create a custom `--highlight-multiplier` property with the `<integer>` type. We’ll add this property to the element with a value of 0, so that no highlight is shown when the page loads:

`code sample`

Finally, the magic: we’ll add a `transition` and change the multiplier value on-hover.

`code sample and result video`

The transition is smoothly changing the value of the `--highlight-multiplier` and therefore smoothly animate the Paint API highlighter background!

## Taking it further

Instead of animating on hover, we could use a second class and a JavaScript timer to create passive animations:

`code sample and video`

We could also get super creative with the Painted image, specific transition function, or controlling JavaScript. The Houdini APIs allow for powerful access to the CSS rendering engine.

Thanks for reading! Follow my twitter @ajones_codes and feel free to DM me for more info or questions.
