import { GradientTitle } from 'src/shared/ui/GradientTitle';

import { Layout } from '../../styled';

import {
  Wrapper,
  ChallengeBlock,
  ContentWrapper,
  Title,
  Item,
  Description,
  Number,
  ItemContent,
} from './styled';

const content = [
  {
    title: 'Trading',
    description:
      'Personalization in Trading. Create AI voice assistants, social networking features, and chatbots for personalized fintech, adapting to user behaviors and preferences.',
  },
  {
    title: 'AR/VR',
    description:
      'Use AR and VR technologies to blend digital and physical realms in finance, tailoring immersive experiences to trading behaviors and preferences.',
  },
  {
    title: 'Education',
    description:
      'Develop an AI-driven financial education system, with adaptive modules for personalized learning and simulations, using diverse datasets.',
  },
  {
    title: 'Bring your own idea',
    description:
      'Submit groundbreaking fintech ideas focused on personalization and AI to transform the industry. Proposals will be admitted pending approval by the organizing committee.',
  },
];

export const Challenge = () => {
  return (
    <Wrapper id="Challenges">
      <Layout>
        <GradientTitle>the ai challenge</GradientTitle>
        <ChallengeBlock>
          <ContentWrapper>
            {content.map(({ title, description }, index) => (
              <Item key={title}>
                <Number>#{index + 1}</Number>
                <ItemContent>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </ItemContent>
              </Item>
            ))}
          </ContentWrapper>
        </ChallengeBlock>
      </Layout>
    </Wrapper>
  );
};
