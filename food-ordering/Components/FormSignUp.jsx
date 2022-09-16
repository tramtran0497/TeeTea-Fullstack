import React from 'react';
import { useState } from 'react';

function FormSignUp() {
  const [signUpUser, setSignUpUser] = useState({
    name: '',
    address: '',
    DOB: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [acceptPromotion, setAcceptPromotion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // showing user's info
    console.log(signUpUser, acceptPolicy, acceptPromotion);
    // if(!acceptPolicy)
    // post to api

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="E.g: Tram Tran"
        name="user_name"
        value={signUpUser.name}
        onChange={(event) => setSignUpUser({ ...signUpUser, name: event.target.value })}
        required
      />
      <input
        type="email"
        placeholder="E.g: tramtran@gmail.com"
        name="user_email"
        value={signUpUser.email}
        onChange={(event) => setSignUpUser({ ...signUpUser, email: event.target.value })}
        required
      />
      <input
        type="tel"
        pattern="^\d{3}-\d{3}-\d{4}$"
        placeholder="E.g: 043-233-2333"
        name="user_phoneNumber"
        value={signUpUser.phoneNumber}
        onChange={(event) => setSignUpUser({ ...signUpUser, phoneNumber: event.target.value })}
        required
      />
      <input
        type="date"
        name="user_DOB"
        value={signUpUser.DOB}
        min="2022-01-01"
        max="2022-12-31"
        onChange={(event) => setSignUpUser({ ...signUpUser, DOB: event.target.value })}
        required
      />
      <input
        type="text"
        placeholder="E.g: Kaivokselantie 5"
        name="user_address"
        value={signUpUser.address}
        onChange={(event) => setSignUpUser({ ...signUpUser, address: event.target.value })}
        required
      />
      <input
        type="password"
        name="user_password"
        value={signUpUser.password}
        onChange={(event) => setSignUpUser({ ...signUpUser, password: event.target.value })}
        required
      />
      <input
        type="checkbox"
        id="policy"
        value={acceptPolicy ? 'agree' : 'disagree'}
        onChange={() => setAcceptPolicy(!acceptPolicy)}
      />
      <label htmlFor="agree">
        By creating an account, you confirm that agree to be bound by our Privacy Policy and Terms
        of Use
      </label>
      <input
        type="checkbox"
        id="promotion"
        value={acceptPromotion ? 'agree' : 'disagree'}
        onChange={() => setAcceptPromotion(!acceptPromotion)}
      />
      <label htmlFor="disagree">
        You would like to receive events from TeeTea through your contact
      </label>
      {
        acceptPolicy ?  <input type="submit" value="submit" /> :  <input type="submit" value="submit" disabled="disabled"/>
      }
     
    </form>
  );
}

export default FormSignUp;
