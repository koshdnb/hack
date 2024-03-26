import Image from 'next/image';

import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Wrapper, RulesList, Rule, Subtitle, RulesWrap } from './styled';

const rules = [
  'Form teams from 1 to 5 people',
  'Implement the idea within 48 hrs',
  'Innovative ideas is a must ',
  'Your idea – you make the team',
  'But we can also help!',
  'Implementation cannot start early!',
  'Only functional prototypes will be allowed',
  'Presentation to be clear & insightful',
];

export const Rules = () => {
  return (
    <Wrapper>
      <GradientTitle>The hackaithon rules</GradientTitle>
      <Subtitle>
        To be a winner your prototype is a functional idea that has business
        potential, and the Technological solution is effective, and your
        presentation is clear & insightful.
      </Subtitle>
      <RulesWrap>
        <Image
          src="/images/rules.png"
          alt="Man with laptop"
          width={393}
          height={278.76}
        />
        <RulesList>
          {rules.map((rule) => (
            <Rule>{rule}</Rule>
          ))}
        </RulesList>
      </RulesWrap>
    </Wrapper>
  );
};
