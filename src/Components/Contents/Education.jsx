import { useState } from 'react';
import './Contents.css';

// Our object containing the educational data
const eduData = {
  gitam: {
    id: 'gitam',
    title: 'GITAM University',
    subtitle: '(Btech. Computer Science)',
    years: '(2024 - 2028)',
    content: (
      <>
        <p>Had an incredible time at this college, surrounded by <span className="purple">great friends</span>, a <span className="purple">supportive environment</span>, and excellent infrastructure.</p>
        <p>The <span className="purple">library has always been my favorite place</span>, a peaceful space where the silence helps me focus, reflect, and recharge.</p>
        <p>
          <span className="purple">No regrets, no backlogs.</span><br />
          <span className="yellow">CGPA : 8.92</span> <span className="grey">(present)</span>
        </p>
      </>
    )
  },
  shivom: {
    id: 'shivom',
    title: 'Shivom Vidyapeeth',
    subtitle: '(Intermediate)',
    years: '(2020 - 2023)',
    content: (
      <>
        <p>I have <span className="purple">studied in 7 different schools</span> from nursery to 12th standard, and trust me, this was the <span className="purple">worst school ever</span>. Sorry, this <span className="purple">IS</span> the worst school ever.</p>
        <p>I don't have anything else to say about my school and my school life. Just wanted to <span className="purple">crash out</span> somewhere.</p>
        <p>
          <span className="yellow">10th : 71.2%</span><br />
          <span className="yellow">12th : 76%</span>
        </p>
      </>
    )
  }
};

export default function Education() {
  const [activeSchool, setActiveSchool] = useState('gitam');

  return (
    <div className="education-container">

      <div className="edu-menu">

        {Object.values(eduData).map((school) => (
          <div 
            key={school.id} 
            className={`edu-item ${activeSchool === school.id ? 'active' : ''}`}
            onClick={() => setActiveSchool(school.id)}
          >
            <div>{school.title}</div>
            <div>{school.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="edu-details">
        <p className="grey">{eduData[activeSchool].years}</p>
        {eduData[activeSchool].content}
      </div>

    </div>
  );
}