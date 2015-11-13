---
layout: post
section-type: post
title: Adding a life event
category: tech
tags: [ 'tutorial' ]
---
One of the cool features of { Personal } is that enables you to tell your life's story in
the form of a timeline of photos, dates and text descriptions. Let's see how it works.

Open the _config.yml and find the events list definition, it should look like this:

<pre style="text-align: left">
events:
  - image: "/img/career/spidertocat.png"
    date: "September 2013 - Today"
    description: "Saving the neighborhood!"
  - image: "/img/career/baracktocat.jpg"
    date: "September 2007 - August 2013"
    description: "Started coding"
</pre>

For each event of your life, add a tuple of image, date and description to the events, and the timeline will be automatically generated!

Bellow the events variable there is the career-img.
Set this path to the image that you want to show in the beginning of the timeline.

Square images are most suited 😉
