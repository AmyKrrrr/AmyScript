import './Contents.css';

export default function About() {
  return (
    <div className="single-box">
      <p style={{color: '#ffbd59'}}>
        Hello!
      </p>
      <p>
        I'm Amitesh, a Computer Science student at GITAM, Hyderabad, who loves turning <span style={{color: '#cb6ce6'}}>ideas into reality</span> with code.
      </p>
      <p>
        I spend my days <span style={{color: '#cb6ce6'}}>building projects</span> and struggling through <span style={{color: '#cb6ce6'}}>DSA/CP.</span>
      </p>

      <p>
        <br />Contact me via:
        <br/> <span className="yellow">Email: </span> amiteshkar@gmail.com
        <br/> <span className="yellow">linkedin: </span> <a href="https://www.linkedin.com/in/amiteshkar/" target="_blank">amiteshkar</a>
        <br/> <span className="yellow">Instagram: </span> <a href="https://www.instagram.com/amykrrrr/" target="_blank">amykrrrr</a>
        <br/> <span className="yellow">Twitter: </span> <a href="https://x.com/amykrrrr" target="_blank">amykrrrr</a>
      </p>
    </div>
  );
}