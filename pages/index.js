import Head from 'next/head';
import './style.css';
import { MdAccountCircle } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { BsFillStarFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {

  function toggleDarkMode() {
    var change = document.body;
    change.classList.toggle("dm");
  }

  return (
    <div className="container">
      
      <Head>
        <title>Matheus Graminha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <img src="/meno.png" className="me" onClick={toggleDarkMode}></img>

      <main className = "main">
      <button onClick={toggleDarkMode}><CgDarkMode size="20"/></button>
        <h2>
        Matheus Graminha Moreli
        </h2>

        <span className = "Job">
        {"<Web Developer/>"}
        </span>

        <div className="grid">
          
          <a href="https://linktr.ee/matheusgraminha" className="card">
            <MdAccountCircle/>
            <h3>Socials</h3>
            <p>Follow me on all my social media!</p>
          </a>

          <a href="https://github.com/graminha-matheus" className="card">
            <AiFillGithub/>
            <h3>My GitHub </h3>
            <p>Take a peek at <br /> my projects!</p>
          </a>

          <a href="https://linktr.ee/matheusgraminha" className="card">
            <MdEmail/>
            <h3>E-Mail</h3>
            <p>Any questions, suggestions? Click here to contact me!</p>
          </a>

          <a href="https://linktr.ee/matheusgraminha" className="card">
            <BsFillStarFill/>
            <h3>Other stuff</h3>
            <p>Personal projects, hobbies and personal favorites!</p>
          </a>

        </div>
      </main>

      <footer>
        <br />
         <span>Made with <AiFillHeart/> by <a href="https://github.com/graminha-matheus">Matheus</a></span>
         <br />
         <br />
      </footer>

    </div>
  )
}
