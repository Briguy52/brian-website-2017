---
title: "Yext Internship"
excerpt: "Prototyped Yext for Events, accessible navbars, and the Yext Japan launch. Products not yet released."
header:
  image: 
  teaser: /assets/images/YextTeaser.png
sidebar:
  - title: "Role"
    text: "UX Intern, SWE Intern"
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
---

**Background**

I spent this last summer at Yext as a Software Engineering intern working on the page that lets our users edit their location data across all of our publishing platforms: Google Maps, Yelp, Facebook, etc. 

My other role was working with the UX engineering team to prototype several new products that only existed as early mockups. Here’s a few of those:

**Yext for Events**

Our users can already edit their locations on Yext—changing addresses, map pins, holiday hours, etc. Yext will soon be offering the ability to manage events.

An example would be a Tesla promotional campaign. This event would take place both in their stores and in public areas such as Central Park. Our user, a person from Tesla creating the event, should be able to easily add, edit, or remove any location from either category as venues become available or stores open and close. 

For those reasons, flexibility would be important. At the same time, we wanted to keep the experience of creating Events as similar to normal locations as possible. This creates consistency across all the tools our users encounter, removing the need for general onboarding.

**Creating a prototype**

I started with a base Sketch mockup and exported PNG screenshots. My first step from there was to figure out what parts of the page should have user interaction. Charlie Deets has a great writeup on how to translate from Sketch to Framer, and the most useful part of that was his advice to write out every interaction on paper. Here’s a few that I came up with initially:

click Add Your Location (user action)
search dropdown appears (dropdown animation)

type in the search area (user action)
dropdown updates (dropdown animation)

click on a location (user action)
dropdown disappears (dropdown animation)
show selected location (list animation)
Add Your Location button moves down (list animation)

There’s a lot more, but they follow the same format. Figuring out what user actions trigger what animations, and then creating those animations.

These were all done in Framer through the form of creating triggerable mouse events, such as hovering over a button, and then coding in the corresponding action, such as changing the mouse cursor style.
