export const NAVLINKS= [
  {
    label: 'Home',
    url: '#hero'
  },
  {
    label : 'About',
    url: '#about'
  },
  {
    label : 'Works',
    url: '#work'
  },
  {
    label : 'Service',
    url: '/#service'
  },
  
]

export const PROFILE = {
  firstname : 'Mohamad',
  lastname: 'Thoriq',
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'Fullstack Developer & IoT Developer',
  avatar: '/images/profile.jpg'
}

export const HERO = {
  badge: 'Available for freelance',
  headline: `Hey, I'm ${PROFILE.lastname}. I'm a ${PROFILE.role}`,
  subline : "I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications."
}

export const SERVICE = {
  label: 'service',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  services: [
    {
      name: "Web Development",
      icon: 'Scroll',
      description: 'This section highlights Web Development, a key area focusing on building and maintaining websites. It covers the essential skills and processes involved in creating robust and engaging web experiences.',
      thumbnails: ''
    },
    {
      name: "Mobile Development",
      icon: 'MobileProgramming',
      description: 'This section showcases Mobile Development, dedicated to crafting applications for mobile devices. It emphasizes the creation of user-friendly and high-performing apps, as illustrated by the provided thumbnail.',
      thumbnails: 'https://cdn.dribbble.com/userupload/36796487/file/original-436c64a72733941273f9fd1f4d994883.jpg?resize=752x&vertical=center'
    },
    {
      name: "UI/UX Designer",
      icon: 'PenTool2',
      description: 'This section describes UI/UX Design, a critical field centered on creating intuitive and aesthetically pleasing user interfaces and overall user experiences. It covers the principles and practices that ensure digital products are both beautiful and easy to use.',
      thumbnails: ''
    },
   
  ]
}

export const WORK = {
  label: 'work',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  works: [
    {
      name: "Cafe Street - Landing Page",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'cafestreet-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "FurniLux",
      live_demo: '#',
      description: 'Make your home comfortable with best furniture.',
      thumbnails: 'furnilux-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "Let's Food UI Kit",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'letsfood-landingpage.webp',
      type: 'Web Design'
    },
    {
      name: "Creative Agency",
      live_demo: '#',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'creativeagency-landingpage.webp',
      type: 'Web Company'
    },
    {
      name: "Login Register Design",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'loginregister-design.webp',
      type: 'UI Design'
    },
    {
      name: "IRATOON - Streaming App",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'iratoon-mobileapp.webp',
      type: 'Mobile App'
    },
  ]
}

export const ABOUT = {
  label: 'Let me introduce my self',
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. I specialize in creating seamless and visually appealing user interfaces, combining design and development to enhance user experiences.`,
    "I love turning ideas into interactive and functional web applications. Excited to collaborate and build amazing digital products together!"
  ]
}

export const CTA = {
  label: 'Let’s Build Something Great Together',
  description: 'Need a clean, functional UI? I’m here to help bring your vision to life—simple, responsive, and user-focused.'
}
