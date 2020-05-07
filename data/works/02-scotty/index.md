---
title: Scotty
short: Scotty is a WebSocket-enabled PDF viewer, allowing multiple clients to look at and browse through a document together in real time.
tags: TypeScript, React, Node, Express, Socket.IO, AWS S3, RAA Tools
links: 
    - name: View
      url: https://raa-scotty.herokuapp.com/
    - name: GitHub
      url: https://github.com/raa-tools/scotty
---

Scotty is a WebSocket-enabled PDF viewer that allows multiple clients to view and browse through a document together, in real time. The app was developed at RAA to address the design teams' need of reviewing architectural drawings and exhibition graphics while working remotely.

Prior to Scotty, designers had two options: either share a screen on a video call or send the PDF to the design team ahead of time, both of which are not ideal. When sharing a screen, there is an explicit presenter/viewer relationship, where only one person has access to the document. On the other hand, if a document is distributed prior to a call, it's difficult for all participants to stay synchronized during the call. Scotty solves this by giving every participant access to the same view of the document and putting them literally on the same page.
