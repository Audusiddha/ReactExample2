import React, { useState } from 'react';

function FormWithAlert() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Form submitted! \nFirst Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email}`);
    // Optionally, you can reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div>
      <h2>Form with Alert Notifications</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWithAlert;
