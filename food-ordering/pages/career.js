import styles from "../styles/Career.module.css";
import { JobCard } from "../Components/JobCard";
import Head from 'next/head';
import {recruitList} from "../fakeData/MenuData";
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function contact () {
    const [candidateName, setCandidateName] = useState(null);
    const [candidateEmail, setCandidateEmail] = useState(null);
    const [candidatePhone, setCandidatePhone] = useState(null);
    const [candidatePosition, setCandidatePosition] = useState(null);
    const [candidateMessage, setCandidateMessage] = useState(null);
    const form = useRef();

    useEffect(() => {
    })
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, form.current, process.env.NEXT_PUBLIC_USER)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setCandidateName("");
        setCandidateEmail("");
        setCandidatePhone("");
        setCandidatePosition("");
        setCandidateMessage("");
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>TeeTea</title>
                <meta name="description" content="Best Street Food in Lahti" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.wrapper}>
                <h1>WE ARE HIRING...</h1>
                <div className={styles.cards}>
                    {recruitList.map((position, index) => <JobCard position={position} key={index}/>)}
                </div>
            </div>
            <div className={styles.formApplyJob}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="How do we call you?" name="user_name" value={candidateName} onChange={event => setCandidateName(event.target.value)} required/>
                    <input type="email" placeholder="How do we send you a message?" name="user_email" value={candidateEmail} onChange={event => setCandidateEmail(event.target.value)} required/>
                    <input type="tel"  pattern="^\d{3}-\d{3}-\d{4}$"  placeholder="How do we contact you? Format: XXX-XXX-XXXX" name="user_phoneNumber" value={candidatePhone} onChange={event => setCandidatePhone(event.target.value)} required/>
                    <input type="text" placeholder="Which position are you interested?" name="user_position" value={candidatePosition} onChange={event => setCandidatePosition(event.target.value)} required/>
                    <input type="text" className={styles.textarea} placeholder="what do you wish for this position? Part-time or Full-time?" name="message" value={candidateMessage} onChange={event => setCandidateMessage(event.target.value)} required/>
                    <button className={styles.btn}>Apply Application Form</button>
                </form>
                <p></p>
            </div>
        </div>
    );
};