Feed my Feed is a little react redux app.
It enables someone to connect to a feed of news articles and then select and keep the interesting article in his own feed.

To start the project you must:

- Go to the root directory of the project and start the node server with the commend: "node server.js"

- Once the server is running you must lanch webpack to bundle the project with the command: "webpack"

- You can then launch you favorite browser and got to localhost:3000 to start using FeedMyFeed

- There seems to be some errors with the new Foundation-site lib, if the project doesn't run please execute this following line of command from your terminal:

    *npm install foundation-sites@6.2.0 --save-exact --save-dev



To run the tests:

make sure you have npm installed and then just execute in your terminal: "npm test".

TODO:

- Implement a Search system for the user to find his articles articles
- Implement a search system to collect specific articles from the guardian api
- General UI improvement
- Correction of little bugs
- Display toast/modale to user

