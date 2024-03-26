import { useState } from 'react';
import { FAQCard, Answer, Question } from './styled';

export default function FAQCardComponent({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQCard key={question} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Question>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </FAQCard>
  );
}
