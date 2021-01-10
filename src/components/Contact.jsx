import React, { useState } from 'react';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErr('Please fill the form completely');
      setTimeout(() => {
        setErr('');
      }, 1500);
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setShow(true))
      .catch(() => alert('There is a problem in sending message'));
  };

  const { name, email, message } = form;
  return (
    <section className="contact">
      {!show && <div className="heading">Contact</div>}
      <div className="container">
        {!show ? (
          <form name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                type="text"
                onChange={handleChange}
                value={message}
              />
            </div>
            {err && <div className="error">{err}</div>}
            <button className="btn btn-submit" type="submit">
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
