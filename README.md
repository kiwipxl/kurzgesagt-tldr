<h1 align="center">
  kurzgesagt-tldr
</h1>

<p align="center">
  Displays all sorts of fun information from the Kurzgesagt youtube channel (educational science videos).
</p>

<h3 align="center">
  Visit the app live at <a href="https://kiwipxl.github.io/kurzgesagt-tldr/">https://kiwipxl.github.io/kurzgesagt-tldr/</a>
</h3>

## How it works
The API (node.js) populates the MongoDB database by fetching data from the Kurzgesagt youtube channel (science and education) with the <a href="https://www.npmjs.com/package/youtube-api">youtube-api</a>. This includes uploaded videos, video information, video transcripts, tags, and video soundtrack. It even parses their research citations so that we can format them in a prettier way.

The SPA (React web app) then displays all this information. At build time, <a href="https://nextjs.org/">next.js</a> is used to generate static HTML files for every single page in the site. This was done as a proof of concept to show that we don't need a server to deliver content.