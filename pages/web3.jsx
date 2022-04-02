import { useState } from 'react';
import SolidityCode from '../components/SolidityCode';
import styles from '../styles/Web3.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>I am currently learning Web3 Development!</h3>
        <p className={styles.p}>Check out my ethereumm smart contracts and interact with them here!</p>
        <br></br>
        <SolidityCode />
      </div>

    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
