import styles from "./Background.module.css";
import { useNavigate } from "react-router-dom";


const Background = () => {
  const Navigate=useNavigate();
   const click=()=>{
    Navigate('/create-form');
  }
  return (
    <section id="home">
    <div

      className={styles.article} 
      style={{ backgroundImage: `url(${'https://www.accountingweb.com/sites/default/files/styles/inline_banner/public/helpingbusiness.jpg?itok=tyZ-jh4Y'})` }}
    >
      <h1 className={styles.header}>Create a free Sample survey</h1>
      <button type="button" className={styles.button} onClick={click}>Get Started</button>
     
    </div>
    </section>
  );
};

export default Background;