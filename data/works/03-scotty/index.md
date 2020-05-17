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

Scotty is a WebSocket-based PDF viewer that allows multiple users to view the same page of a document. The app was developed at RAA to address the design teams' need of reviewing architectural drawings and exhibition graphics together while working remotely.

Prior to Scotty, design teams had less-than-ideal options to share a document during a call: share a screen or send the file to teammates ahead of time. With the first option, only one user has direct access to the document. On the other hand, distributing a document makes it difficult for all participants to stay on the same page during the call.

Using Scotty, client-side actions such as navigating to a specific page or pointing with the cursor are sent to all clients connected to that document. A user starts by uploading a PDF document, after which Scotty returns a URL. Users are invted to view the document by navigating to that URL.

Because the blocking nature of rendering PDFs on the front end is problematic, Scotty uses [conveyor](https://github.com/raa-tools/conveyor/) to convert PDF documents to optimized images before uploading them to an AWS S3 bucket.

Scotty was written in TypeScript, React, Node, and Express, and uses socket.io to manage its WebSocket connections. A redesign is in the works and can be viewed on [Figma](https://www.figma.com/file/nB8XWWZCOI7kFJGivVbsWh/scotty?node-id=0%3A1).
