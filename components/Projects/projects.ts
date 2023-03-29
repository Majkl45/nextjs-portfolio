interface Projects {
  id: number,
  img: string,
  title: string,
  type: string,
  web: string,
  description?: string,
  progress?: string,
  tags?: Tag[]
}

interface Tag {
  id: number,
  name: string;
  icon: string;
}

const projects: Projects[] = [
  {
    id: 1,
    img: '/projects/inga-tvoje-investicni-hra.jpg',
    title: 'INGA - Investment Game',
    type: "App",
    web: 'https://michael-rohm.netlify.app/#projects',
    description: '',
    progress: 'In development',
    tags: [
      {id: 1, name: "Vue JS", icon: '/skills/frontend/vuejs.svg' },
      {id: 2, name: "Bootstrap", icon: '/skills/frontend/bootstrap.svg' },
    ],
  },
  {
    id: 2,
    img: '/projects/heat-pujcovna.jpg',
    title: 'Heat Rental',
    type: "App",
    web: 'https://www.agionet.cz/reference/programovani-aplikace-reference/heat-group-pujcovna-a-revize',
    description: '',
    tags: [
      {id: 1, name: "Vue JS", icon: '/skills/frontend/vuejs.svg' },
      {id: 2, name: "Bootstrap", icon: '/skills/frontend/bootstrap.svg' },
      {id: 3, name: "Node JS", icon: '/skills/backend/nodejs.svg' },
    ],
  },
  {
    id: 3,
    img: '/projects/vouchery-app.jpg',
    title: 'Vouchers',
    type: "App",
    web: 'https://www.agionet.cz/info/voucher-system/',
    description: '',
    tags: [
      {id: 1, name: "Vue JS", icon: '/skills/frontend/vuejs.svg' },
      {id: 2, name: "Vuetify", icon: '/skills/frontend/vuetify.svg' },
    ],
  },
  {
    id: 4,
    img: '/projects/portfolio.jpg',
    title: 'Portfolio',
    type: "Website",
    web: 'https://michael-rohm.netlify.app/',
    description: '',
    tags: [
      {id: 1, name: "Next JS", icon: '/skills/frontend/next-js.svg' },
      {id: 2, name: "TypeScript", icon: '/skills/frontend/typescript.svg' },
      {id: 3, name: "Tailwind", icon: '/skills/frontend/tailwindcss.svg' },
    ],
  },
  {
    id: 5,
    img: '/projects/pila-sytno.jpg',
    title: 'Sawmill Sytno',
    type: "Website",
    web: 'https://pilasytno.cz/',
    description: '',
    tags: [
      {id: 1, name: "HTML", icon: '/skills/frontend/html.svg' },
      {id: 2, name: "CSS", icon: '/skills/frontend/css.svg' },
      {id: 3, name: "Javascript", icon: '/skills/frontend/javascript.svg' },
    ],
  },
  {
    id: 6,
    img: '/projects/genprili.jpg',
    title: 'GenPrili',
    type: "Website",
    web: 'https://www.agionet.cz/reference/tvorba-webovych-stranek-reference/gen-prili-agionet-webprezentace-pro-generator-ceniku-menu',
    description: '',
    tags: [
      {id: 1, name: "HTML", icon: '/skills/frontend/html.svg' },
      {id: 2, name: "CSS", icon: '/skills/frontend/css.svg' },
      {id: 3, name: "Javascript", icon: '/skills/frontend/javascript.svg' },
    ],
  },
  {
    id: 7,
    img: '/projects/izolace-staveb-plzen.jpg',
    title: 'Building Insulation Pilsen',
    type: "Website",
    web: 'https://www.agionet.cz/reference/tvorba-webovych-stranek-reference/arealitycz-web-izolaceplzen-cz',
    description: '',
    tags: [
      {id: 1, name: "HTML", icon: '/skills/frontend/html.svg' },
      {id: 2, name: "CSS", icon: '/skills/frontend/css.svg' },
      {id: 3, name: "Javascript", icon: '/skills/frontend/javascript.svg' },
    ],
  },
]

export default projects