import "./projects.css"

export default function Projects() {
    return (
    <div className="projects" id="projects">
<header>Projects</header>
<div className="column1">
<img src={process.env.PUBLIC_URL+"gifs&grub.png"} alt="Kiahna Carmack"/>
<a href="https://joecliffordofficial.github.io/project_one_gr5/ ">Gifs and Grub <br></br> Check it out!</a>
<img src={process.env.PUBLIC_URL+"alumniMB.png"} alt="Kiahna Carmack"/>
<a href="https://alumni-messageboard.herokuapp.com/ ">Alumni Message Board! <br></br> Check it out!</a>
<img src={process.env.PUBLIC_URL+"medley.png"} alt="Kiahna Carmack"/>
<a href="https://project2-full-stack-app.herokuapp.com/ ">Melody Melody <br></br> Check it out!</a>
</div><div className="column2">
<img src={process.env.PUBLIC_URL+"Wapp.png"} alt="Kiahna Carmack"/>
<a href="https://kiahnacarmack.github.io/WeatherDashboard/ ">Weather Dashboard <br></br> Check it out!</a>
<img src={process.env.PUBLIC_URL+"wd.png"} alt="Kiahna Carmack"/>
<a href=" https://kiahnac.github.io/workdayScheduler/ ">Workday Scheduler <br></br> Check it out!</a>
<img src={process.env.PUBLIC_URL+"codequix.png"} alt="Kiahna Carmack"/>
<a href=" https://kiahnac.github.io/CodeQuiz/  ">Code Quiz<br></br> Check it out!</a>
</div>





    </div>
       
     
    );
  }
  