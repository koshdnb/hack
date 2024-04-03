import Image from 'next/image';
import { Modal, useModal } from 'react-morphing-modal';

import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';
import { FullRules } from './FullRules';
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
  '<strong>Eligibility:</strong> Open to individuals with a background in development, finance, UI/UX design, data analysis, engineering, compliance, or students with an interest in fintech, AI, AR/VR, and more.',
  '<strong>Team Formation:</strong> Teams of 2-5 members can form prior to or during the event. Idea submission required for team formation.',
  '<strong>Equipment:</strong> Participants must bring their own equipment, including any necessary AR/VR gear - if applicable.',
  '<strong>Registration:</strong> Mandatory pre-event registration, detailing participant specialization and team status.',
  '<strong>Project Development:</strong> Projects must be original and developed during the hackathon. Existing projects are not permitted.',
];

export const Rules = () => {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });

  return (
    <Wrapper id="Rules">
      <Layout>
        <RulesWrapper>
          <GradientTitle style={{marginBottom: '32px'}}>Participation Rules</GradientTitle>
          {/*<Subtitle>*/}
          {/*  To be a winner your prototype is a functional idea that has business*/}
          {/*  potential, and <br />*/}
          {/*  the Technological solution is effective, and your presentation is*/}
          {/*  clear & insightful.*/}
          {/*</Subtitle>*/}
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
                  <Rule key={rule} dangerouslySetInnerHTML={{ __html: rule }} />
                ))}
              </RulesList>
              <Button {...getTriggerProps()}>Read the FAQ</Button>
              <Modal {...modalProps}>
                <FullRules />
              </Modal>
            </div>
          </RulesWrap>
        </RulesWrapper>
      </Layout>
    </Wrapper>
  );
};
