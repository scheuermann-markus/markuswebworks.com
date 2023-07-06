import "./about.css";
import ProfileImage from "../images/profile-image.jpg";

const Editor = () => {
  return (
    <div className="editor">
      <div className="editor__header">
        <div className="editor__header-btns">
          <span className="editor__header-btn btn__1"></span>
          <span className="editor__header-btn btn__2"></span>
          <span className="editor__header-btn btn__3"></span>
        </div>
      </div>
      <div className="editor__content">
        <div className="editor__line-numbers">
          <span className="editor__line-number">1</span>
          <span className="editor__line-number">2</span>
          <span className="editor__line-number">3</span>
          <span className="editor__line-number">4</span>
          <span className="editor__line-number">5</span>
          <span className="editor__line-number">6</span>
          <span className="editor__line-number">7</span>
          <span className="editor__line-number">8</span>
          <span className="editor__line-number">9</span>
        </div>
        <div className="editor__text">
          <span className="editor__text-line">
            const [markus, setMarkus] = useState(&#123;
          </span>
          <span className="editor__text-line">&nbsp; firstName: "Markus",</span>
          <span className="editor__text-line">
            &nbsp; lastName: "Scheuermann",
          </span>
          <span className="editor__text-line">
            &nbsp; birthdate: 30-05-1995,
          </span>
          <span className="editor__text-line">
            &nbsp; street: "Luitpold-Lipp-Weg 2",
          </span>
          <span className="editor__text-line">
            &nbsp; location: "86871, Rammingen",
          </span>
          <span className="editor__text-line">
            &nbsp; phone: "0159 / 01274662",
          </span>
          <span className="editor__text-line">
            &nbsp; e-mail: "scheuermann-markus@gmx.de",
          </span>
          <span className="editor__text-line">&#125;);</span>
        </div>
      </div>
    </div>
  );
}; 

function About() {
  return (
    <div className="about" id="AboutMe">

      <div>
        <h2 style={{ marginBottom: "40px" }}>About Me</h2>
        <Editor />
      </div>
      <div>
        <img className="profile-img" src={ProfileImage} alt="profile img" />
      </div>
      <div className="about-div-paragraph">
        <p>
          Hi, my name is Markus and I am a self-taught front-end programmer at
          the age of 28. Although my academic background is in Logistics
          Management (BSc.) and Business Analytics (MSc.), it was during my
          studies that I first discovered programming languages. In 2022, I made
          the decision to pursue programming as my profession, as it allows me
          to combine analytical thinking with creative expression in a unique
          way. I enjoy overcoming the challenges that arise with each new
          component, and I have a passion for learning something new every day.
        </p>
      </div>
    </div>
  );
}

export default About;
