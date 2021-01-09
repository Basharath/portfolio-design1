import React, { useState } from 'react';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErr('Please fill the form completely');
      setTimeout(() => {
        setErr('');
      }, 1500);
      return;
    }

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form).toString(),
    });

    if (!response.ok) {
      return alert('There is problem in sending message');
    }

    setShow(true);
  };
  return (
    <section className="contact">
      {!show && <div className="heading">Contact</div>}
      <div className="container">
        {!show ? (
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                min="1"
                max="100"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" type="text" onChange={handleChange} />
            </div>
            {err && <div className="error">{err}</div>}
            <button
              className="btn btn-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        ) : (
          <div className="success-message">
            Your message is sent successfully.
          </div>
        )}
      </div>
    </section>
  );
}
