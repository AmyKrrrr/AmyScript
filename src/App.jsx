import { useState } from 'react'; // for creating states (active buttons)
import './App.css'

import About from './Components/Contents/About';
import Education from './Components/Contents/Education';
import Exp from './Components/Contents/Exp';
import Skills from './Components/Contents/Skills';
import Projs from './Components/Contents/Projs';
import Resume from './Components/Contents/Resume';


function App() {
  const tabs = ['About', 'Education', 'Experience', 'Projects', 'Skills & Tools', 'Resume'];
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch(activeTab){
      case 'About':
        return <About />
      case 'Education':
        return <Education />
      case 'Experience':
        return <Exp />
      case 'Skills & Tools':
        return <Skills />
      case 'Projects':
        return <Projs />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  };

  return (
    <div className="container">
      <h1 className="name">Amitesh Kar</h1>
      
      <div className="social-links">
        <a href="https://leetcode.com/u/Amykrrrr/" target="_blank">Leetcode</a>
        <span>•</span>
        <a href="https://codeforces.com/profile/amykrrrr" target="_blank">Codeforces</a>
        <span>•</span>
        <a href="https://github.com/Amykrrrr" target="_blank">GitHub</a>
      </div>

      <div className="menu">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
          {tab}
          </button>
        ))}
      </div>

      <div className="content-box">
        {renderContent()}
      </div>

    </div>
  )
}

export default App