import React from 'react';
import CvCard from '../components/CvCard';
import Title from '../components/Title';
import '../App.css';
import SkillsCard from '../components/SkillsCard';
import pdf from '../pdf/yonatansalmon_cv.pdf';
import { experience, education, skills } from '../data/Data';

console.log(education);

const Resume = () => {
  return (
    <section className='ResumeContainer'>
      <Title backgroundTitle='Summary' frontalTitle='Resume' />
      <div className='CvInfo'>
        <div className='EducationContainer'>
          <h1 className='CvTitle'>My Education</h1>
          {education.map((cvEl) => (
            <CvCard cvEl={cvEl} />
          ))}
        </div>
        <div className='ExperienceContainer'>
          <h1 className='CvTitle'>My Experience</h1>
          {experience.map((cvEl) => (
            <CvCard cvEl={cvEl} />
          ))}{' '}
        </div>
      </div>
      <div className='SkillsContainer'>
        <h1 className='CvTitle SkillsHeader'>My Skills</h1>
        <div className='SkillsCardContainer'>
          {skills.map((skill) => (
            <SkillsCard skill={skill} />
          ))}
        </div>
      </div>
      <button className='DownloadCvBtn'>
        <a href={pdf} download='yonatansalmon_cv.pdf'>
          Download CV
        </a>
      </button>
    </section>
  );
};

export default Resume;
