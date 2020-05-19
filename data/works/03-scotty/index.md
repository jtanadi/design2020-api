---
title: Scotty
short: Scotty is a WebSocket-enabled PDF viewer that allows multiple clients to view and browse through a document together in real time. The app is designed to be a minimal viewer and a quick way for design teams to share internal documents.
tags: 
    - Design Tools
    - RAA Tools
links: 
    - name: Launch
      url: https://raa-scotty.herokuapp.com/
    - name: View on GitHub
      url: https://github.com/raa-tools/scotty
---

Scotty is a browser-based PDF viewer that leverages the WebSocket protocol. The app was developed at RAA to address the design teams’ need to review architectural drawings and exhibition graphics together while working remotely.

Scotty solves the problem of having to either share screens during a call or to distribute documents prior to the call. The app allows all participants to navigate a PDF document in synchrony. When viewing a document, clients maintain an open WebSocket connection to Scotty’s server, which allows a user’s actions—such as navigating to a specific page or pointing to an element with their mouse—to be propagated to all other users.

To circumvent the blocking nature of rendering PDFs on the browser, Scotty uses [conveyor](https://github.com/raa-tools/conveyor/) to convert PDF documents to optimized images before uploading them to an AWS S3 bucket.

Scotty was written in TypeScript, React, Node, and Express, and uses socket.io to manage its WebSocket connections. A redesign is in the works and can be viewed on [Figma](https://www.figma.com/file/nB8XWWZCOI7kFJGivVbsWh/scotty?node-id=0%3A1).
