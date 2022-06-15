import styles from "../styles/Contact.module.css";
import Head from 'next/head';
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';


export default function contact () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [caseContact, setCaseContact] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE_CONTACT, form.current, process.env.NEXT_PUBLIC_USER)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName("");
      setEmail("");
      setPhone("");
      setCaseContact("");
      setMessage("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Customer Service</h1>
      <subtitle className={styles.subTil}>(We warmly welcome feedback from customers, they are strong power to develop us)</subtitle>
      <div className={styles.wrapper}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Leave your name..." className={styles.input} name="name" value={name} onChange={event => setName(event.target.value)} required/>
          <input type="email" placeholder="Leave your email address..." className={styles.input} name="email" value={email} onChange={event => setEmail(event.target.value)} required/>
          <input type="tel"  pattern="^\d{3}-\d{3}-\d{4}$" placeholder="Phone number with format XXX-XXX-XXXX" className={styles.input} name="phoneNumber" value={phone} onChange={event => setPhone(event.target.value)} required/>
          <select name="case" id="case" className={styles.select} value={caseContact} onChange={event => setCaseContact(event.target.value)}required>
            <option value="none">Choose your case...</option>
            <option value="compliment">Compliment</option>
            <option value="complain">Complain</option>
            <option value="support">Support</option>
            <option value="asking">Ask Questions</option>
          </select>
          <input type="text" placeholder="Leave your words..." className={styles.input} name="message" value={message} onChange={event => setMessage(event.target.value)} required/>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  );
};
