import React, { useState } from 'react';
import './faqComponent.css';

function FAQ(props) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="faqSection">
      <div className="container">
        <h2>FAQ</h2>
        <div className="accordion">
          {props.faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <button
                aria-expanded={index === expandedIndex}
                onClick={() => toggleAccordion(index)}
              >
                <span
                  className={`icon ${index === expandedIndex ? 'rotated' : ''}`}
                  aria-hidden="true"
                ></span>
                <span className="accordion-title">{faq.question}</span>
              </button>
              {index === expandedIndex && (
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQApp = () => {
  const faqs = [
    {
      question: "What is framer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Is it easy to learn?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Do I need to code?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    }
  ];

  return (
    <div>
      <FAQ faqs={faqs} />
    </div>
  );
};

export default FAQApp;
