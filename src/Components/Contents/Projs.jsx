import { useState } from 'react';
import './Contents.css';
import AlgoGit from './ProjectDetails/AlgoGit';
import Tickalizer from './ProjectDetails/Tickalizer';
import AmyScript from './ProjectDetails/AmyScript';

const projectData = {
  algogit: {
    id: 'algogit',
    proj_name: 'AlgoGit',
    proj_link: 'https://algogit.vercel.app/',
    proj_desc: <AlgoGit />
  },
  tickalizer: {
    id: 'tickalizer',
    proj_name: 'Tickalizer',
    proj_link: 'https://github.com/AmyKrrrr/Tickalizer',
    proj_desc: <Tickalizer />
  },
  amyscript: {
    id: 'amyscript',
    proj_name: 'AmyScript',
    proj_link: 'https://amyscript.vercel.app/',
    proj_desc: <AmyScript />
  }
};

export default function Projs() {
  const [activeProj, setActiveProj] = useState('algogit');

  return (
    <div className="education-container">
      
      <div className="edu-menu">

        {Object.values(projectData).map((proj) => (
          <div 
            key={proj.id} 
            className={`edu-item ${activeProj === proj.id ? 'active' : ''}`}
            onClick={() => setActiveProj(proj.id)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div>{proj.proj_name}</div>
            
            <a 
              href={proj.proj_link} 
              target="_blank" 
              rel="noreferrer" 
              className="grey"
              style={{ fontSize: '0.9rem', textDecoration: 'none' }}
              onClick={(e) => e.stopPropagation()} 
            >
              [Link]
            </a>
          </div>
        ))}

      </div>

      <div className="edu-details">
        {projectData[activeProj].proj_desc}
      </div>

    </div>
  );
}