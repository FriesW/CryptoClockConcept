# CryptoClockConcept

A hackathon project. Check out [the devpost](https://devpost.com/software/cryptoclock).

## Screenshot

![screenshot](https://github.com/FriesW/CryptoClockConcept/raw/master/screenshot.png)

## Inspiration

An artistic statement to the power of cryptographic functions, and the uselessness of modern art.

## What it does

The clock produces a unique, non-repeating pattern every 15 seconds, marking time. However, each pattern is related through an AES cipher, and thus it is practically impossible to know the previous or next time pattern given the current pattern. In this way, each time pattern is unique and unpredictable, yet will never repeat.

## How I built it

Really fast and messy. This was project was plan C after Java serialization ate plan A and homework ousted B.
Right now I am using a [github library](https://github.com/ricmoo/aes-js) to do AES128 in javascript. Ideally, the client would have no knowledge of the encryption, such that the key could be kept secret.

It is an 8 by 8 grid, with each grid having 4 states. 4 states is 2 bits. 2 bits * 8 * 8 is 128. Thus, every bit of the AES128 cipher in ECB mode is used.

## Challenges I ran into

Time, sleep, hunger, and Java eating 18 hours of work.

## Accomplishments that I'm proud of

I actually demoed something.

## What I learned

JQuery animation callbacks don't evaluate your variables until the callback is initiated.

## What's next for CryptoClock

When I get freetime: an actual implementation. I might have the crypto done on a dedicated microcontroller which protects the key. A physical installation would be really cool.
