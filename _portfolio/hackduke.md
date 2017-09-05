---
title: "HackDuke"
excerpt: "Built the hackathon landing page, day of site, and registration portal. Currently Marketing team lead."
header:
  image: /assets/images/HackDukeScreen.png
  teaser: /assets/images/HackDukeScreenSmall.png
sidebar:
  - title: "Role"
    image: /assets/images/AlohaLogo.png
    image_alt: "Aloha Logo"
    text: "Marketing Team Lead, Developer, Organizer"
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

*Originally published on [Medium](https://medium.com/@brianmlin/hackduke-the-website-ed5189f119cf) on November 16, 2016*

Last Fall I helped work on the HackDuke website redesign and rebuild. Our previous website had been around since the first or second HackDuke and there was also a separate iOS app that needed to be maintained. Too many tangles all around so we decided to start from scratch this year.

**Design**

First step was design. [Dorothy](dorothyfeng.me) created an amazing vision for what our brand should be. In her words:

*For HackDuke 2016, we decided we needed a rebrand to embody the transformation that HackDuke had undergone, better emphasize the four tracks of social good for our hackathon, and refresh our look.*

To read more about how we arrived at our new colors, new look, and even new Hack Kitty, read her [post](https://medium.com/@hackduke/hackduke-2016-rebrand-1262b2f80168#.gycd38vhf) about it.

**Code**

On to implementation. We decided to go with Facebook’s React- something I’d heard of, but never took the time to learn in depth. That changed quickly. I got a ton of help from the rest of the team and was able to contribute right away to our site.

The component structure of React lets you naturally split up a single page into multiple parts that different people can work on at the same time. Looking at our landing page, you can see that each section is basically separate. For example, my friend David could work on Tracks and the Hero (welcome screen) while I fiddled with the FAQ.

There was also a lot of work that went into making the page work just as beautifully on iPhone, Android, and iPad as it did on a widescreen desktop. That meant setting breakpoints where our frontend elements would change size and orientation to match different screens.

We’ve also made all of our code open source and open for you to check out on [GitHub](https://github.com/hack-duke). Take a second and look through our stuff! (I’ll post a technical overview of our codebase in a future article)

**Publish**

It’s really exciting to publish a website with the reach and meaning of Hackduke.org. It’s one thing to submit your CS201 assignment to your TA to look over, but it’s another thing entirely to look at a site with thousands of visitors and point to something you worked on. That feeling is hard to get and is something I’m super grateful to HackDuke for (in addition to awesome [crewnecks](https://cdn-images-1.medium.com/max/1600/1*jBp10muxg7KVIfB7DVHIbA.png) of course).

*Thanks again to Andy Wang, our tech team lead, Dorothy, and everyone else on the tech team: David, Nayib, Amy, Joyce, Aditya, and Daniel.*