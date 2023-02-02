import laPazImg from '../images/lapaz.jpg';
import telAvivImg from '../images/telaviv.jpg';
import magenImg from '../images/magen.jpg';
import herzlyaImg from '../images/herzliya.jpg';
import petachTikvaImg from '../images/petachtikva.webp';

const maps = [
  {
    place: 'La Paz, Bolivia',
    url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15965.063889716175!2d-68.1499465!3d-16.4990124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c8f4af8e7c2e2e7!2sLa%20Paz!5e0!3m2!1sen!2sus!4v1613604899042!5m2!1sen!2sus',
    img: laPazImg,
  },
  {
    place: 'Tel Aviv, Israel',
    url: 'https://maps.google.com/maps?q=Tel%20Aviv&t=&z=13&ie=UTF8&iwloc=&output=embed',
    img: telAvivImg,
  },
  {
    place: 'Kibbutz Magen, Israel',
    url: 'https://maps.google.com/maps?q=Kibutz%20Magen&t=&z=13&ie=UTF8&iwloc=&output=embed',
    img: magenImg,
  },

  {
    place: 'Herzliya, Israel',
    url: 'https://maps.google.com/maps?q=Herzliya&t=&z=13&ie=UTF8&iwloc=&output=embed',
    img: herzlyaImg,
  },

  {
    place: 'Petach Tikva, Israel',
    url: 'https://maps.google.com/maps?q=Petach%20Tikva&t=&z=13&ie=UTF8&iwloc=&output=embed',
    img: petachTikvaImg,
  },
];

const education = [
  {
    startYear: '2019',
    endYear: '2020',
    subject: 'Coding Bootcamp',
    location: 'Israel Tech Challenge (ITC)',
    description:
      'Full-time, five-months training course in full-stack development; focus on research and self-learning while using the industry’s leading trends',
  },
  {
    startYear: '2016',
    endYear: '2019',
    subject: 'BA Psychology',
    location: 'Reichman University (IDC)',
    description: "Was in the Dean's List, participated in an Honors research program",
  },
  {
    startYear: '2011',
    endYear: '2014',
    subject: 'IDF',
    location: 'Paratroopers 101',
    description: 'Lone soldier in combat unit of the paratroopers',
  },
];

const experience = [
  {
    startYear: '2021',
    endYear: 'Present',
    subject: 'Full Stack Lecturer',
    location: 'Israel Tech Challenge (ITC)',
    description: 'Teach and give lectures on: React, JavaScript, Node.js, HTML/CSS, MongoDB and Git in a coding bootcamp',
  },
  {
    startYear: '2020',
    endYear: '2021',
    subject: 'Front End Developer',
    location: 'Zoomin Software',
    description: 'Develop websites from concept to deployment using React',
  },
  {
    startYear: '2020',
    endYear: '2020',
    subject: 'Full Stack Developer',
    location: 'Kavanu',
    description: 'Developed a server-side service and CRM for hair salon management',
  },
];

const skills = [
  { name: 'React', percent: 85 },
  { name: 'JavaScript', percent: 85 },
  { name: 'Node.js', percent: 80 },
  { name: 'MongoDB', percent: 80 },
  { name: 'HTML/CSS', percent: 85 },
  { name: 'Git', percent: 85 },
  { name: 'SQL', percent: 65 },
  { name: 'TypeScript', percent: 75 },
];

export { maps, education, experience, skills };
