import React from 'react';
import CvCard from '../components/CvCard';
import Title from '../components/Title';
import '../App.css';
import SkillsCard from '../components/SkillsCard';
import pdf from '../pdf/cv_yonatan_salmon.pdf';
import { experience, education, skills } from '../data/Data';

const Resume = ({resumeRef}) => {
  return (
    <section className='ResumeContainer' ref={resumeRef} id='container'>
      <Title backgroundTitle='Summary' frontalTitle='Resume' />
      <div className='CvInfo'>
      <div className='ExperienceContainer'>
          <h1 className='CvTitle'>My Experience</h1>
          {experience.map((cvEl) => (
            <CvCard cvEl={cvEl} key={cvEl.description} />
          ))}{' '}
        </div>
        <div className='EducationContainer'>
          <h1 className='CvTitle'>My Education</h1>
          {education.map((cvEl) => (
            <CvCard cvEl={cvEl} key={cvEl.description} />
          ))}
        </div>
      </div>
      <div className='SkillsContainer'>
        <h1 className='CvTitle SkillsHeader'>My Skills</h1>
        <div className='SkillsCardContainer'>
          {skills.map((skill) => (
            <SkillsCard skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      <button className='DownloadCvBtn'>
        <a href={pdf} download='cv_yonatan_salmon.pdf'>
          Download CV
        </a>
      </button>
    </section>
  );
};

export default Resume;
