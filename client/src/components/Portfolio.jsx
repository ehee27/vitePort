import NFL from '/assets/NFL.jpeg'
import Baseball from '/assets/Baseball.jpeg'
import Games from '/assets/sooperGames.jpeg'
import Figma from '/assets/Figma.jpeg'
import Tech from '/assets/27Tech.jpeg'
import AnimatedCard from './AnimatedCard'

const projects = [
  {
    title: 'SOOPERGAMES',
    image: Games,
    link: 'https://soopergames27.com/',
    about:
      'eCommerce Website selling classic video games. Selections and cart managed with ContextAPI. Users can view details on games and checkout via the Stripe API.',
  },
  {
    title: 'NFL News',
    image: NFL,
    link: 'https://football-news.onrender.com/',
    about:
      'Mock ESPN site for NFL news leveraging sportsdata.io NFL API to showcase league news, schedule/standings and individual team headlines',
  },
  {
    title: 'SHOTIME',
    image: Baseball,
    link: 'https://baseballcardz27.com/',
    about:
      'To get recruited to play college baseball, high school student-athletes must put in a lot of hard work to keep up their grades and continue to improve their game. ',
  },

  {
    title: 'TwoSeven Technical',
    image: Tech,
    link: 'https://scottnotes.onrender.com/',
    about:
      'MERN stack app to manage help desk tickets. Tickets assigned by unique ID, completion status, and protected by routes based on employee role.',
  },
  {
    title: 'Figma Design',
    image: Figma,
    link: 'https://www.scottlchat.com/',
    about:
      "Utilizing React to convert a client's Figma concept into a modern UI. This project was simply a frontend design challenge.",
  },
]

const Portfolio = () => {
  return (
    <div className="px-5 py-10 md:py-20 md:px-10" id="work">
      <p className="text-2xl font-Teko text-white">MY WORK</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {projects.map((project, i) => {
          return (
            // <div key={i} className="bg-secondary rounded-md p-3 m-1">
            // <PortfolioCard key={i} project={item} />
            <AnimatedCard key={i} project={project} />
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
