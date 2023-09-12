import React, { useState } from 'react';

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const accordionItems = [
    {
      title: 'Ph no.',
      content: '8888888888',
    },
    {
      title: 'email',
      content: 'kk@gmail.com',
    },
    {
      title: 'Insta',
      content: '@kk',
    },
    {
      title: 'Facebook',
      content: '@akk',
    },
  ];

  return (
    <div className="container">
      <h2>Contact Page</h2>
      <div id="contactAccordion">
        {accordionItems.map((item, index) => (
          <div className="card" key={index}>
            <div
              className={`card-header ${activeAccordion === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h5 className="mb-0">
                <button className="btn btn-link">
                  {item.title}
                </button>
              </h5>
            </div>
            <div
              className={`collapse ${activeAccordion === index ? 'show' : ''}`}
            >
              <div className="card-body">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
