import Image from 'next/image';

import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';
import {
  Wrapper,
  RulesWrapper,
  RulesList,
  Rule,
  Subtitle,
  RulesWrap,
  Button,
} from './styled';

const rules = [
  'Teams should consist of 1 to 5 people.',
  'Teams can be formed prior to the event  or during the team formation period.',
  'Projects must be original works developed  during the HackAIthon.',
  'All projects must be submitted by the deadline  on Day 2.',
  'Presentations should clearly state the problem, propose a solution, and discuss its impact.',
];

export const Rules = () => {
  return (
    <Wrapper id="Rules">
      <Layout>
        <RulesWrapper>
          <GradientTitle>The hackaithon rules</GradientTitle>
          <Subtitle>
            To be a winner your prototype is a functional idea that has business
            potential, and <br />
            the Technological solution is effective, and your presentation is
            clear & insightful.
          </Subtitle>
          <RulesWrap>
            <Image
              src="/images/rules.png"
              alt="Man with laptop"
              width={393}
              height={278.76}
            />
            <div>
              <RulesList>
                {rules.map((rule) => (
                  <Rule key={rule}>{rule}</Rule>
                ))}
              </RulesList>
              <Button>read full terms</Button>
            </div>
          </RulesWrap>
        </RulesWrapper>
      </Layout>
    </Wrapper>
  );
};
