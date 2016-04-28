---
layout: post
published: false
title: Proof of Concept
author: Ori Pleban
popupContent: true
teaser: This is the teaser text for my proof of concept.
lng: "33.263956"
lat: "35.07877"
image: "https://c1.staticflickr.com/3/2848/12005505403_b4c46cc0b9_n.jpg"
identifier: proof_of_concept
language: en
categories: 
  - en
  - interviews
map: true
tags: null
---




This is just a proof of concept post. There is still quite a bit of work to be done to get this ready for prime time.

In general a post contains the actual text content and the "metadata" content (or what we'll call metadata) which will be stored in the "YAML" front-matter part of each post file. Lots of jargon, I know, but I'll walk you through it step-by-step as we build this out together.

The main "metadata" information you'll want to provide with each post is:

* lat, latitude. The latitude coordinate for the travel map.
* lng, longitude. The longitude coordinate for the travel map.
* title, post title, Your post title. This will also appear on the map popup
* teaser, post teaser, This will appear as the teaser text at the bottom of your map popup
* popupContent, a true/false value, If this is set to false, a marker will appear on the map for this post sans popup or post link. In general, you'll want to set this to true.
* image, preview image. This is the preview image that will appear on the map. I think the easiest way to handle images on your blog will be to upload them to flickr or some other image/file hosting service and then get the image link. Just make sure whatever service you use allows "hotlinking".

## Images
You can upload all of your photos to Flickr and then grab the "embed" link and use that to embed images in your blog posts. You can also use the same link for the preview image that will appear on the map.

Here is an image:

![Ronda is not in Cyprus](https://c3.staticflickr.com/3/2848/12005505403_b4c46cc0b9_z.jpg "Ronda is not in Cyprus")

Here is an image caption: Ronda is not in Cyprus

Here is another image:

![Ouled Ali is also not in Cyprus](https://c2.staticflickr.com/4/3786/12016956776_606a4a61d9_z.jpg "Ouled Ali is not in Cyrpus")

Ouled Ali is also not in Cyprus

##Markdown
Check out the [Markdown Docs](http://daringfireball.net/projects/markdown/) for more info on Markdown Syntax.

Also here: [Markdown/Kramdown examples](http://makandracards.com/makandra/6683-markdown-kramdown-examples)

##Jekyll
Check out the [Jekyll docs][jekyll] for more info on some of what's going on behind the scenes in Jekyll.

[jekyll]:      http://jekyllrb.com
