---
layout: post
section-type: post
title: Modifying the social buttons
category: tech
tags: [ 'tutorial' ]
---

Social buttons (rendered in the footer) are great for having a small hub with all your social footprint.
In order to change them, go to _config.yml and edit the social list:

<pre style="text-align: left">
social:
  - title: "github"
    url: "https://github.com/"
  - title: "linkedin"
    url: "http://no.linkedin.com/"
  - title: "youtube"
    url: "http://youtube.com/"
  - title: "rss"
    url: "/feed.xml"
</pre>

The titles of the social link are used to find the icon in Font Awesome.

To look for an icon, search for one at the [Font Awesome icon gallery](https://fortawesome.github.io/Font-Awesome/icons/) and put the icon name (without fa-) as title.

