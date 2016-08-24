---
layout: post_page
title: Weekly RoboBlog
section-type: post
category: robotics
tags: 
---

Another good week of Duke Robotics. Over here in the electrical team, we're working on some cool things.

### Thruster Controls

The Hydra (DC motor controller stack) has been assembled and will control 8 Teledyne DC thrusters that will be used to move our robot around. We now have to figure out firmware and protocols to send thruster commands to the Arduino (Mingxuan, Dylan, and the CS team are focusing on that part). 

<img alt="Photo: Hydra Stack" src="http://brianmlin.com/Images/Robotics/hydraStack.jpg" style="max-width:630px;">


### CPU 

Cody and I have been focusing on setting up CentOS Linux on our CPU. Specifically, we want to be able to SSH in from any computer (that means connecting it to the Internet) as well as stream video from our webcams. It's been a pretty educational (ie frustrating) ride so far!

We had originally installed the minimal version of CentOS but then switched to the GNOME desktop version (with its nice hot corners and easy to configure connectivity settings). 

So far, we're able to get SSH running but the webcams are a different story. We're using Microsoft Lifecams which lag a ton even when connected to our Macs. Another task for next time is to figure out the heat sink situation with our CPU. Right now, we have a fan going but that might have to go in our final implementation. 

