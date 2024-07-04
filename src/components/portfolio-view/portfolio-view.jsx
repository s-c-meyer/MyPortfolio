import { Button, Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PortfolioPiece } from '../portfolio-piece/portfolio-piece';

export const PortfolioView = () => {
  return (
    <Container className='mb-5'>
      <Row className='d-flex justify-content-center'>
        <Col xs={11}>
          <PortfolioPiece 
            isCompleted = {false}
            image = {{
              src: require("../../img/MannaShelterPortfolioPiece.svg"),
              alt: 'Computer and Phone screen showcasing the Manna Shelter Website'
            }}
            title = "Manna Shelter Website"
            body = "Manna Shelter is a local homeless shelter that I found through Catchafire, a website designed to make skill-based connections between professional volunteers and non-profits. I am designing and developing a website for Manna Shelter using React with Vite. It will serve to increase awareness and visibility while also facilitating donations and recruiting volunteers."
          />
          <PortfolioPiece 
            isCompleted={false}
            image = {{
              src: require("../../img/WordleBotPortfolioPiece.svg"),
              alt: "A screenshot from Discord showing the working bot"
            }}
            title = "Wordle Discord Bot"
            body = "A Discord Bot that takes user messages that contain the score from any of the NYT Games and creates a leaderboard from a database of those recorded scores. Built using MongoDB for the database and JavaScript. Currently works with Connections, but I intend to add other games."
            githubLink = 'https://github.com/s-c-meyer/DiscordBot'
          />
          <PortfolioPiece 
            isCompleted = {false}
            image = {{
              src: require("../../img/MeyersMatchupsPortfolioPiece.svg"),
              alt: 'Computer Screen showcasing a Figma Mockup'  
            }}
            title = "Meyer's Matchups"
            body = "I love board games and card games. I don't love always needing a pen and paper on hand to keep score of said games. This app would make it easy to score both, and keep a database of the score of past games. I'm using this as a way to teach myself Figma as seen in the image."
            githubLink = 'https://github.com/s-c-meyer/meyers-matchup'
          />
          <PortfolioPiece
            isCompleted = {true}
            image = {{ 
              src: require("../../img/MeetApp2Screens.png"),
              alt: 'Computer and Phone Screen showcasing the Meyer\'s Meet App' 
            }}
            title = "Meyer's Meet App"
            body = "Meyer's Meet App is a serverless, progressive web application which was built using React with a Test-Driven Development (TDD) Technique. It uses the Google Calendar API to fetch upcoming events. Users can filter events by city, and view the data for their search update in real time."
            githubLink = 'https://github.com/s-c-meyer/meet'
            demoLink = 'https://s-c-meyer.github.io/meet/'
          />
          <PortfolioPiece 
            isCompleted={true}
            image ={{
              src: require("../../img/chatAppThreePhones.png"),
              alt: "Three phones displaying the Chat App"
            }}
            title="Meyer's Messages App"
            body="Meyer's Messages is a chat app that was built using React Native and tested using an Android Emulator. The app provides users with a chat interface and options to share their location and/or images. Images may be shared either from the devices media library, or directly from the camera within the app."
            githubLink="https://github.com/s-c-meyer/chatDemo"
          />
          <PortfolioPiece 
            isCompleted={true}
            image ={{
              src: require("../../img/MeyersMoviesReact.png"),
              alt: "Computer and Phone Screen showcasing the Meyer\'s Movies App built using React"
            }}
            title="Meyer's Movies (React)"
            body="Meyer's Movies is a single page application that pulls data about movies from a database using a REST API that I built. User's can create a profile to save their favorite movies, and click to learn more about each movie in the database. The frontend was developed using the React framework."
            githubLink="https://github.com/s-c-meyer/myFlix-client"
            demoLink="https://meyersmovies.netlify.app/"
            caseStudyLink="/casestudy"
          />
          <PortfolioPiece 
            isCompleted={true}
            image ={{
              src: require("../../img/MeyersMoviesAngular.png"),
              alt: "Computer and Phone Screen showcasing the Meyer\'s Movies App built using Angular"
            }}
            title="Meyer's Movies (Angular)"
            body="Meyer's Movies is a single page application that pulls data about movies from a database using a REST API that I built. User's can create a profile to save their favorite movies, and can learn more through modals that show the movie's genre, director, or summary. The frontend was developed using the AngularJS framework."
            githubLink="https://github.com/s-c-meyer/myFlix-Angular-client"
          />
          <PortfolioPiece 
            isCompleted={true}
            image ={{
              src: require("../../img/PokedexApp.png"),
              alt: "Computer and Phone Screen showcasing the Pokedex App"
            }}
            title="Pokedex App"
            body="This app uses the PokeAPI to pull information about pokemon and display them to the user. The user can click on a pokemon to see additional information."
            githubLink="https://github.com/s-c-meyer/simple-js-app"
            demoLink="https://s-c-meyer.github.io/simple-js-app/"
          />
        </Col>
      </Row>
    </Container>


   


  );
};