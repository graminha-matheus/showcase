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
  
      <img src="/meno.png" className="me"></img>

      <main className = "main">
      {/* <button onClick={toggleDarkMode}><CgDarkMode size="20"/></button> */}
        <h1>
        Matheus Graminha Moreli
        </h1>
        <br />
        <span className = "Job" onClick={toggleDarkMode}>
       
        </span>

        <div className="grid">
          
          <a className="socialsc" href="https://linktr.ee/matheusgraminha" target="_blank" className="card">
            <MdAccountCircle/>
            <h3>Socials</h3>
            <p>Follow me on all my social media!</p>
          </a>

          <a className="githubc" href="https://github.com/graminha-matheus" target="_blank"className="card">
            <AiFillGithub/>
            <h3>GitHub </h3>
            <p>Take a peek at <br /> my repos!</p>
          </a>

          <a className="emailc" href="mailto:matheus.g.moreli@gmail.com" target="_blank" className="card">
            <MdEmail/>
            <h3>Get in Touch</h3>
            <p>Click here to send me an email!</p>
          </a>

          <a className="othersc" href="https://linktr.ee/matheusgraminha" target="_blank" className="card">
            <BsFillStarFill/>
            <h3>Curriculum</h3>
            <p>A brief view on my accomplishments!</p>
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
