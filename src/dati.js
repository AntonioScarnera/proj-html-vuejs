const service = [
    'marketing plan',
    'sales developement',
    'digital marketing',
    'pricing',
    'why us',
    'case studies'
];

const resources = [
    'learning center',
    'video tutorials',
    'customers',
    'blog'
];

const company = [
    'who we are',
    'contact us',
    'careers'
]

const logos = [
    {
       url: require('./assets/images/abstract.png')
    },
    {
       url: require('./assets/images/cglobal.png')
    },
    {
       url: require('./assets/images/next.png')
    },
    {
       url: require('./assets/images/hemisferio.png')
    },
    {
       url: require('./assets/images/spaces.png')
    },
    {
       url: require('./assets/images/digitalbox.png')
    }  
]

const awards= [
   {
      url: require('./assets/images/award-a.png'),
      color: 'filter: hue-rotate(180deg)  opacity(1) drop-shadow(0 0 0 aqua)',
      name: 'Winner Seo Master MAGT',
      year: 'Smart Start Award 2017'
   },
   {
      url: require('./assets/images/award-b.png'),
      color: '',
      name: 'Top Social Media Agencies',
      year: 'Next Partner 2018'
   },
   {
      url: require('./assets/images/award-c.png'),
      color: 'filter: saturate(7)  opacity(0.4) drop-shadow(0 0 0 red)',
      name: '10 Fastest Growing Abstract',
      year: 'Solution Providers 2019'
   },
   {
      url: require('./assets/images/award-d.png'),
      color: 'filter: hue-rotate(180deg)  opacity(1) drop-shadow(0 0 0 blue)',
      name: 'National Excellence Agencie',
      year: 'Award Winner 2020'
   },
]

export {service, resources, company, logos, awards};