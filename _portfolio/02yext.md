---
title: "Yext Internship"
excerpt: "Prototyped Yext for Events, accessible navbars, and the Yext Japan launch. Products not yet released."
header:
  image: /assets/images/googleprideparade.png
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

Note: These products have not yet been released! In addition, many of the design decisions mentioned here may have already been iterated upon and changed.

## Background

I spent this last summer interning at Yext in New York City. What Yext does, in a sentence, is take location data from companies and stores, and then publish it everywhere: Google Maps, Yelp, Facebook, etc. I had the unique experience getting to both design and develop for the same platform: our Location Edit page. 

## Yext for Events

### The problem

Whenever there's a big parade in New York, you'll see it on Google Maps. Users began coming to us asking if they could do something similar and create their own events for promotions and public engagement. So how do we suppor this?

We already have a Location Edit page which lets users create and edit locations. If you're McDonald's for example, you can set the locations of your stores, bulk update all their holiday hours, etc.

Now say you've got a new sandwich coming out and want to do a big launch event. All franchises would participate, but you might also want to have a food truck out on the streets or a stand in the middle of Union Square. Our Events product should let users create multi-location events that can take place in their own locations or elsewhere.

My job specifically was to use Sketch and Framer to create a Yext for Events prototype that could be presented at design meetings and iterated upon. 

### The solution
While Events are a new thing for Yext, we've been working with Locations forever. And our users are too. I originally thought it'd be cool to do a complete redesign centered around Events. Yet upon further thought and discussion, I realized that Events share a lot of qualities with Locations (addresses, hours, phone numbers, etc.) and more importantly, our users are already familiar with the flow of creating a Location. 

Why not adapt the Location Edit flow to Events while adding in the necessary changes? That's what we ended up doing. We borrowed the base Location Edit flow and wove in the ability to add "external" locations, event locations that you don't own. Events also last a certain amount of time, a key part of what distinguishes them from a location, so this was added in as well. 

### Creating a prototype
After Sketch mocks were formed, I then exported them to Framer. I read a lot of articles on Medium about how to translate from Sketch to Framer, and found this Charlie Deets article really helpful. My favorite part was his advice to put on paper a list of every single interaction. From there, it's simply turning that into Framer code. 

As an example, I'd write:

click Add Your Location (user action)
search dropdown appears (dropdown animation)

type in the search area (user action)
dropdown updates (dropdown animation)

click on a location (user action)
dropdown disappears (dropdown animation)
show selected location (list animation)
Add Your Location button moves down (list animation)

There’s a lot more when you're dealing with a web app, but every interaction follows the same format. Figuring out what user actions trigger what animations, and then creating those animations.
