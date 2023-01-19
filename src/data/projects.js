

const pages = [
  {
    "id": "1",
    "title": "Birds of a Feather",
    "description": "Birds of a Feather is an app to connect LGBTQ+ families together.  A user can view events happening in their area, RSVP to an event, and create their own.",
    "category": "Group",
    "url": "https://birds-ui.vercel.app",
    "body": "This was my capstone project at Turing School of Software and Design.  It was a continuation of my previous solo project (which is listed in the projects area).  I had to first pitch the idea of Birds of a Feather to my cohort and was fortunate that it was voted on and selected to be one of the 7 projects to be built. We were put into a group of 7 students - 3 Frontend and 4 Backend. We built the app with a React frontend and Rails backend and our goal was to implement a technology that our school did not formally teach us- as a group we decided to implement GraphQL on both Client and Server side. We had daily standups, utilized a Jira board, Github projects, and Slack.",
    "img": "/static/media/boaf-group.ad66f789caac8fa4f795.png",
    "tech": ["React", "Javascript", "React Router", "GraphQL/Apollo", "CircleCI", "Cypress", "Postman", "Heroku/Vercel"],
    "future": ["User Authentication/signin", "User Messaging", "Utilize an API"],
  },
  {
    "id": "2",
    "title": "Birds of a Feather - solo",
    "description": "This version of Birds of a Feather is aimed at connecting LGBTQ+ families in the Las Vegas area.  A user can select a zip code and see events that are happening in that area",
    "url": "https://birds-of-a-feather-omega.vercel.app",
    "body": "This was my final solo project for mod 3 at Turing school of Software and design. We had a short window to create this, so we were tasked with coming up with a very small, very niche audience.  After hearing my brother and his husband talk about how hard it was for them to find other families with similar dynamics as theirs, I decided to create Birds of a Feather as a site that connects LGBTQ+ families. The goal of the project was to demonstrate our understanding of React, React Router, and Cypress while solving a unique issue for our chosen audience.",
    "img": "/static/media/boaf-solo.20856b95fecbdf53ee04.png",
    "tech": ["React", "Javascript", "Cypress", "Heroku/Vercel"],
    "future": ["User Authentication/signin","Responsive Design"],
  },
  {
    "id": "3",
    "title": "Golden Tic-Tac-Toe",
    "description": "Adding a little sass to the classic game of tic-tac-toe. Choose your fighter- Blanche Devereaux or Dorothy Zbornak from the Golden Girls.",
    "url": "https://golden-tic-tac-toe.vercel.app",
    "body": "This project is strictly Vanilla Javascript, HTML, and CSS.  The goal was to demonstrate understanding of DRY Javascript, event delegation, data model vs DOM, and project planning. This was the first time that I was responsible for creating the project iterations and I leaned into my organizational skills and drew a cascading timeline of what I believed the user should experience when playing the game.  ",
    "img": "/static/media/golden.90c090386b75aa577a39.png",
    "tech": ["Javascript", "HTML", "CSS", "Mocha/Chai", "Heroku/Vercel"],
    "future": ["Responsive design", "Local Storage", "Choose a Golden Girls Player!", "Player High Scores List" ],
  },
  {
    "id": "4",
    "title": "Scream Streams",
    "description": "An app designed for scary movie lovers! You can browse our site to see scary movie ratings, details, images, runtimes and more. You can even create a watch list! But you'll have to create an account first.",
    "url": "https://scream-streams.vercel.app",
    "body": "This was a paired project that we made to learn React and React Router.  The original idea was to use the movie data base to display all genres - similar to Rotten Tomatoes, however we wanted to spice it up a bit and decided to make it unique to horror movies. This allowed us to have fun with the styling and play with the project name - and so Scream Streams was born!",
    "img": "/static/media/scream-streams.f22546738da60a238bc9.png",
    "tech": ["React", "Javascript", "React Router", "Cypress", "Heroku/Vercel"],
    "future": ["Google OAuth", "Responsive Design"],
  }
]

module.exports = pages