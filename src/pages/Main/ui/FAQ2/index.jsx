import questions from './data';
import FAQCard from './FAQCard';
import { Wrapper, Title, FAQList, IdeaWrap, IdeaText } from './styled';

export default function FAQ() {
  return (
    <Wrapper>
      <Title>FAQ'S</Title>
      <FAQList>
        {questions.map(({ answer, question }) => (
          <FAQCard answer={answer} question={question} />
        ))}
      </FAQList>
      <IdeaWrap>
        <IdeaText>Have an <strong>AI</strong>dea already?</IdeaText>
      </IdeaWrap>
    </Wrapper>
  );
}
