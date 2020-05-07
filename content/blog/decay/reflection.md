---
title: Reflecting on The Decay of Digital Things
date: "2018-09-05T22:12:03.284Z"
description: "I read a lot and I listen to a lot. Consuming an audio book isn’t the same as reading one, but I wanted to get an overview of it anyway. This is how I imported my audible library to Goodreads."
image: ./img/printer.jpg
category: archive
published: true
tags:
  - code
  - reading
  - decay
  - archive
---

We have spent a decade building the consumer Internet of Things with an ethos of “fail fast.” Unfortunately, many of the things we built failed to embrace the withering effect that time has on business, technology, intention, and capital. Consumers have been left holding connected objects that no longer connect, and the question of why investments in the “future” of physical things have resulted in such ephemeral value. The Decay of Digital Things started as a series of personal essays and prototyping projects exploring this idea that turned into a class taught at the Stanford d.school in 2014. Inspired by my essays and a frustration about connected products with dead services, we asked the students to explore the different aspects of decay that are connected to networked objects. Physical metaphors like rust, patinas1, overgrowth, and repair were all central to the students’ construction of a body of work and scenarios that pointed to digital decay. Their work explored everything from the calcified information around our social networking identities, to the fragility inherent in creating a connected object; becoming a vanguard to uncritical enthusiasm for more that has become a hallmark of Silicon Valley-inspired creation.

In the beginning, this exploration emerged from my suddenly dead Little Printer. A brilliant little object from consultancy-turned-product company Berg, the Little Printer was a small Internet-connected thermal printer that could create all sorts of little artifacts, provided that they were two dimensional and monochromatic. This could be your to-do list for the day, a list of upcoming meetings to stuff into your wallet, an inspirational image, or your two-factor code. The printer got these messages by connecting wirelessly to a hub (tied to Berg’s plans for future connected things), which in turned connected to a server called Berg Cloud, which managed accounts, apps, and all the bits of software which brought the otherwise charming but simplistic object alive. On March 31st, 2015 though, this server and Berg as a business shut down, and a thoughtfully-designed piece of technology became so much dumb plastic and silicon.

Berg’s story is one that has been repeated all over the connected world: ambitious companies create networked objects that bring more functionally than their un-networked kin. But with this functionality comes a compounding liability: infrastructure and the need for enduring business models that can maintain that infrastructure. Sometimes this is fine, but other times the cost becomes too much to bear. Of course, there are many different kinds of businesses in the world, and some of them are better able to support their connected products than others. A publicly-traded company like Garmin has multiple revenue streams and a complex web of telemetry-leveraging products. Many of these are Internet-enabled, and rely on an service called Garmin Connect and, more recently, a development platform called Connect IQ. This connectivity is a valued feature of the product, but not the product itself. The Garmin running

watch to track your run, or the cycling computer to track your route and fitness, and the marine GPS that tracks your boat. The fact that its features can be arbitrarily extended through an app store and connectivity is a value add, but ultimately not the product’s core purpose.

![Little Printer](img/printer.jpg)

Conversely, a company like Pebble, which shuttered its services in December 2016, had a much more challenging time.2 Pebble often kick started their product development on a product-by-product basis as it built a variety of wearable smart watches. They worked hard on their product, sold almost two million smart watches3, but ultimately weren’t able to make it work. The watches were generally well-made, had a strong application ecosystem, and are still loved by many of their owners. My friend Luke, an Australian postdoc in Copenhagen, still wears his Pebble every day. The watch is something he’s become accustomed to, bugs and all. He can flip through its menus quickly, and responds just as quickly to its little quirks: bugs that will ultimately never be fixed now that the platform has shut down.

## Software and Hardware

Objects that require connectivity to deliver their promised value are ultimately just clients connecting to the endpoints of a broader service. It’s easy to argue that one is not buying the object itself, but rather access to the service that the object affords. On one level, this places the physical object on the same plane as any web application or mobile client that pulls data and context from a broader service. And certainly, for every dead Internet of Things startup on the battlefields of platform capitalism, there are dozens of dead software-only businesses. The demise of Rdio Inc. hit hard, as did the obsolescence of the Sparrow mail client as its team was acqui-hired to work on Google Inbox and saw Sparrow wither into uselessness.

The death of a software product leaves a hole in one’s pocketbook and a need to find a functional cognate, but it doesn’t leave behind a corpse. Instead, if you think about our products as things that we hire or fire for their different capabilities, the analogy is closer to a hired feature (let’s say, our email client Sparrow) prematurely quitting, or simply disappearing one day. Certainly a shock, but with relatively little damage because we can find a substitute (such as the email client, Airmail). Conversely, when an Internet of Things service shutters its doors, the consumer and the environment are left to foot the bill of starting over. If your Internet of Things home security system shuts down because they botched their growth strategy, you have to invest in a new and expensive chunk of hardware for your home. Or, perhaps even worse, this product could be subject to an acquisition that locks the customer into a platform with values and a service model they don’t want, but can’t afford to change.

## Nature, Nurture

I have described a bleak view of connected objects, but fortunately this is not the only story worth telling. Even in the failed model, there are interesting early stabs at addressing the “long tail” of connected objects. One shockingly consistent example of sustainable product design is the Monome, a hardware platform for open source music creation that connects into an ecosystem of community-created tools. It’s a simple grid of lights and buttons that send and receive commands from a device. Mine is from 2008. I also recently set it up again to use with a new crop of tools from the Monome community, and its founder helped a community of us debug a problem with old monomes and a new OSX systems.

![](img/monome.jpg)

The Monome presents a vision of sustainable product maintenance, because it is both a company and a community. Brian Crabtree created its first iteration, but countless others have written code for it, built performances around it, and made their own versions of it. It’s an open source product that creates greater value for its supporting business through the value generated within the community itself. Monome.org also has a vast repository of knowledge related to the monome in its different and evolving products that empowers its customers to continuously adapt it to their evolving needs.

The Monome ethos of product development echoes the “slow company” movement exemplified by 37Signals and LDLN. Their theory is that what you are creating through your business is precious, and it’s very easy to ruin something by moving too fast. So don’t. Don’t take that investment if you’re not absolutely clear on how you’ll use it. Don’t commit yourself to that big Kickstarter campaign if you’ve only figured out the product, and not the production. The weight of capital can be a massive liability to an enterprise that is still figuring out how to walk unencumbered, let alone thrive under the weight of growth-forcing liabilities.

## Defibrillation

Sometimes though, things do simply fail. As frustrated as I am with Berg Cloud shutting down, it’s difficult to fault the Berg team in pursuing a dream and giving it their all. Sometimes businesses simply fail despite one’s best efforts. There might not be a market, or it might be a pricing strategy that doesn’t work, or you simply run out of runway. A business failure is not (necessarily) a moral failure on the part of the entrepreneurs, but the result is the same. Consumers are left with their dead plastics and silicon pining for a server that will answer back.

The Little Printer is an example of what can be done when a connected technology businesses does not foresee its own demise, but tries to react responsibly to it. Some simple searching reveals an enthusiastic community (along with the individual help of some former Berg team members), who have brought their now dead printers back to life. The process isn’t simple. It

involves setting up your own server and then flashing the Berg Hub to redirect server requests to the new address. These methods emerged from long githup discussions and thoughtful blog posts, but they emerged nonetheless. So why does the Berg device have a pathway to resuscitation while many other devices don’t?

I think the answer lies in the community and in the approach of the product’s creators. The Monome platform and its subsequent creations started from a point of openness and community involvement. This gave the community a greater-than-normal stake in the outcomes of this product. Berg Cloud was a platform that spoke to creators and engaged consumers, so that when it closed, it had a larger pool of potential revivers to consider resuscitation. And because the Berg team released their server code and contributed to the discussion, the chance of reviving the Little Printer (at least on a small scale), is starting to become a reality.

In the physical product world, aftermarket and Original Equipment Manufacturer (OEM) accessories emerge around any platform that sees some market success. This can have the effect of dramatically extending the life of these products as their creators disappear, but the demand remains. A few years ago, for example, I created a [3D printable model for a table clamp](https://www.thingiverse.com/thing:11815) that fit an old 1960s Luxo lamp. It’s since been downloaded close to a thousand times, hopefully extending the use of a wonderfull piece of design with otherwise difficult to find parts. We need to encourage a similar economy of repair, modification, and adaptation for our connected things, and I’d like to believe that the story of the Little Printer, initially tragic, might point to a more optimistic future for our decaying digital things.

## Better to Fade Away

Four years after the Decay of Digital Things class, I’ve become a bit inured to this crisis of sustainability for these products. All around us, we’re seeing an accretion of hollowed-out objects calling for servers long since shuttered. The brilliant [Internet of Shit](https://twitter.com/internetofshit) twitter account provides a near-daily laugh track of poorly considered connected things. My friend Luke wears one on his wrist as a simple watch, shrugging off its lost functionality with the insistence that it had a “good run.” I have another on my shelf as a multifaceted totem to my values as a designer: its brand –a smiling face left after each new print– now barely visible on the sun-weathered thermal paper.

We are creating software-powered things in an environment that often requires businesses to pursue capital intensive growth models if they want to be considered successful. But this is far from the only path, and we need more diverse definitions of success if we’re going to deflect the distracting, wasteful, anxious, closed, bricked, unfixable, expensive, disenfranchised future that the first decade of the Internet of Things seems to promise

### References

http://berglondon.com/blog/2010/09/03/patina/
https://www.wired.com/2016/12/the-inside-story-behind-pebbles-demise/
https://www.theverge.com/2016/5/24/11753878/pebble-2-watch-fitness-tracker-heart-rate-sensor-vide
