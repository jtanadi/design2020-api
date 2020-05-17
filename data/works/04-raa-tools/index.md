---
title: RAA Tools Directory
short: RTD is a microsite that makes it easier for designers to browse through, search, and download all available scripts and internal design tools. Scripts are listed by repository, typically categorized by language.
tags: 
    - Dev
    - Design Tools
    - RAA Tools
links: 
    - name: Launch
      url: https://raa-tools.github.io/
    - name: View on GitHub
      url: https://github.com/raa-tools/raa-tools.github.io
---

RTD was developed with the goal of making internal tooling more accessible to designers at RAA. While all of our tools and scripts are hosted on GitHub, for most designers, Git and GitHub present a high barrier to entry. RTD solves the problem by allowing designers to look for and download the tools they need without directly interfacing with GitHub.

RTD relies on two other microservices: [peekachu](https://github.com/raa-tools/peekachu) and [zipline](https://github.com/raa-tools/zipline). Peekachu fetches directory structures of publicly-listed repositories; it also serves as a GitHub webhook, caching directory structures on push. Zipline fetches selected files and compresses them into a zip file for download.

Written in TypeScript and React, RTD is hosted on GitHub Pages.
