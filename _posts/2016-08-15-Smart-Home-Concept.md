---
layout: post
title: Smart Home Concept
description: 
headline:
categories: personal
tags:
  - geek
imagefeature:
comments: false
featured: true
published: true
---

We have all heard how Gartner forecasts that 6.4 billion connected things 
will be in use worldwide in 2016, up 30 percent from 2015, and will reach 
11.4 billion by 2018. It's a bright future for the Internet of Things (IoT)
indeed.

Let's start small. How do you incorporate IoT into your home to make it smart?

Let's start with a few definitions. 

+ Trigger
+ Controller

Let's start with the entrance.

The entrance is the gateway to enter or leave your home. Perhaps when you return
home, you would want your lights to turn on, water heater to start so that you
can have a nice, hot bath. The woes of a storage heater user. This is more of a 
detection problem, when you trigger a scenario, the controller should pick it up
and then activate the heater accordingly. Of course, it should also be smart
enough to turn off the heater after some interval.

But it's not so easy if we just say, add a motion sensor to the door. Knowing
whether it opens or closes, doesn't provide any indication whether a person is 
home or not, or if he is leaving or entering. So what can we do with the smart
lock?

#### Door Bell
Door bell. There are some possibilities here. Upon detection of a door bell 
trigger, the controller should take a picture of the guest and notify the owner.
The owner could then choose to - 

1. talk to the person
2. watch a live camera stream
3. unlock the door
4. unlock a package storage compartment

How do you realise this? A typical HDB BTO provision is to provide a DC switch circuit
from the door bell to the interior (typically the kitchen). It is currently mated to a DC
door bell. A traditional press once and ring type. 

While I think smart devices are great, I do recognise that they can break rather easily. So
I would still want to retain the traditional door bell. They last a lifetime (as long as you
replace the battery). 

The plan, therefore, would be to take the door bell trigger, connect it to an optocoupler, which
would signal a computer like an Orange / Raspberry Pi or even an ESP8266. I might be quite keen
to use an ESP8266 for this instance as it can typically be left in deep sleep mode and only triggered
on door bell activation. Minimal power consumption.

#### Thermostat
This isn't too popular in Singapore, but it's huge overseas. Just look at Nest.
Nonetheless, it would be quite useful to know the Temperature and perhaps Humidity
of your home, and then trigger your aircon, curtains, fans etc accordingly. This can
be achieved with a Temp/RH sensor like the DHT22 and an Arduino / micro controller
such as the ESP8266 for the reporting side, and subsequently to use a IR / RF controller 
for the devices.

#### Lights
I think this will be the easiest to add "smarts" to your home. This can be achieved
with relays, smart switches, smart wall panels, and even smart bulbs. The important 
thing here is to ensure that your platform that you use is relatively "open" such 
that you can adopt it to your controller.

Or lights that automatically dim to indicate bed time, or to set the mood with RGB lighting.

#### Washing Machine

Possibilities: Use an accelerometer to tell me when my laundry is completed.
It might be useful also to start your laundry an hour before you return home, 
just in time for you to hang them out. However, that may not be too possible based on
today's equipment.

### Kitchen
#### Kettle

Xiaomi actually came up with a Smart Kettle - I think that's the best representation for
the kettle. 

Using a smart plug for a standard home kettle doesn't really make much sense 
as you can only turn it on once, and you would need to remember to set it to ON before you 
leave the house. It's probably too complicated for daily use. 

#### Smoke / Gas Sensors
Smoke and gas sensors are useful, but as these are critical safety devices are not 
triggered regularly, I would advise against them. At least until they are uber stable.

#### Barcode scanner
How about adding a barcode scanner next to your fridge? You just finished the juice?
Scan it and it will be added to the shopping list. Want to pick up more yoghurt on 
your next trip? Scan it! Even Things like eggs or veggies that don't have a barcode can
have a keyring of barcodes to scan when they need adding to the list. Database? Semantics3
might be a viable option with a web JSON API. 

