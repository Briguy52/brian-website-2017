---
layout: post
section-type: post
title: Writing posts
category: tech
tags: [ 'tutorial' ]
---

Run the ./scripts/newpost script with the file name of the post as an argument:

<pre style="text-align: left">
cd <your { personal } repo>
./scripts/newpost hello-world
</pre>

A a new post template with name YYYY-MM-DD-hello-world.md will be created under ./_posts, with the current date.

In the created post, just replace the Title, Category and tags and you can
start writing your post in markdown right bellow the end of the post header.

Every file with the format <i>YYYY-MM-DD-post-title.md</i> will be processed as a
post, with publication date <i>YYYY-MM-DD</i>.

The content starts with:

<pre style="text-align: left">
---
layout: post
section-type: post
title: Title
category: Category
tags: [ 'tag1', 'tag2' ]
---
</pre>

The *layout* and *section-type* are used by the theme.

Note: *{ Personal }* generates a static page, just like all Jekyll themes.
As a result we have to create the tag pages before building and publishing the site.

In order to generate the tag pages, simply run the *generate-tags* script from the repo's root directory:

<pre style="text-align: left">
./scripts/generate-tags
</pre>

The script will parse all your posts, and generate the tag pages for the newly added tags.

If you are not using Github Pages, you can automate the execution of this script during build time.
