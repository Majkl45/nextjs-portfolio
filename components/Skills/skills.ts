interface Skills {
  id: number,
  title: string,
  img: string,
  color?: string,
  level?: string,
}

const mySkills: Skills[] = [
  {
    id: 1,
    title: 'HTML',
    img: '/skills/frontend/html.svg',
    color: '#fc4503',
  },
  {
    id: 2,
    title: 'CSS',
    img: '/skills/frontend/css.svg',
    color: '#1c88c7',
  },
  {
    id: 3,
    title: 'JavaScript',
    img: '/skills/frontend/javascript.svg',
    color: '#fefe01',
  },
  {
    id: 4,
    title: 'TypeScript',
    img: '/skills/frontend/typescript.svg',
    color: '#007ACC',
    level: 'basics'
  },
  {
    id: 5,
    title: 'Vue JS',
    img: '/skills/frontend/vuejs.svg',
    color: '#41B883',
  },
  {
    id: 6,
    title: 'React JS',
    img: '/skills/frontend/react.svg',
    color: '#61DAFB',
  },
  {
    id: 7,
    title: 'Sass',
    img: '/skills/frontend/sass.svg',
    color: '#CF649A',
  },
  {
    id: 8,
    title: 'Bootstrap',
    img: '/skills/frontend/bootstrap.svg',
    color: '#7111f5',
  },
  {
    id: 9,
    title: 'Tailwind',
    img: '/skills/frontend/tailwindcss.svg',
    color: '#38BDF8',
  },
  {
    id: 10,
    title: 'Node JS',
    img: '/skills/backend/nodejs.svg',
    color: '#87bf00',
    level: 'basics'
  },
  {
    id: 11,
    title: 'PHP',
    img: '/skills/backend/php.svg',
    color: '#7377ad',
    level: 'basics'
  },
  {
    id: 12,
    title: 'Git',
    img: '/skills/others/git.svg',
    color: '#e84d31',
  },
]

export default mySkills