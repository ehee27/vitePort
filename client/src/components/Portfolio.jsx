import NFL from '../assets/NFL.jpeg'
import Baseball from '../assets/Baseball.jpeg'
import Games from '../assets/Games.jpeg'
import Figma from '../assets/Figma.jpeg'
import Tech from '../assets/27Tech.jpeg'
import PortfolioCard from './PortfolioCard'

const projects = [
  {
    title: 'NFL',
    image: NFL,
    link: 'https://football-news.onrender.com/',
    about:
      'Mock ESPN site for NFL news leveraging sportsdata.io NFL API to showcase league news, schedule/standings and individual team headlines',
  },
  {
    title: 'Baseball',
    image: Baseball,
    link: 'https://baseballcardz27.com/',
    about:
      'To get recruited to play college baseball, high school student-athletes must put in a lot of hard work to keep up their grades and continue to improve their game. ',
  },
  {
    title: 'Games',
    image: Games,
    link: 'https://soopergames27.com/',
    about:
      'PERN stack app showcasing vintage video game classics. JWT authentication required to select products and checkout via Stripe API.',
  },
  {
    title: 'Tech',
    image: Tech,
    link: 'https://scottnotes.onrender.com/',
    about:
      'MERN stack app to manage help desk tickets. Tickets assigned by unique ID, completion status, and protected by routes based on employee role.',
  },
  {
    title: 'Figma',
    image: Figma,
    link: 'https://www.scottlchat.com/',
    about:
      "Utilizing React to convert a client's Figma concept into a modern UI. This project was simply a frontend design challenge. View the Figma concept HERE",
  },
]

const Portfolio = () => {
  return (
    <div className="p-3">
      <p className="text-2xl font-Teko">My Work</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((item, i) => {
          return (
            // <div key={i} className="bg-secondary rounded-md p-3 m-1">
            <PortfolioCard key={i} project={item} />
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
