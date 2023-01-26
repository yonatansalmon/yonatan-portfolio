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
    {year:'', title:'', place:'', description:'' }
  ]



  const experience = [
    {year:'', title:'', place:'', description:'' }

  ]




  export {maps, education, experience}