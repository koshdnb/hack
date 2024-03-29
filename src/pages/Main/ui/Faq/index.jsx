import { Modal, useModal } from 'react-morphing-modal';
import { AccordionParent, Collapse } from '../../../../shared/ui/Accordion';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';

import { Wrapper, Accordion, IdeaWrap, IdeaText, CtaButton } from './styled';
import RegistrationForm from '/src/shared/ui/RegistrationForm';

let accordionItems = [
  {
    title: 'What is a Hackathon?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'What is Quadcode?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'Who can participate in the HackAlthon?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'What is the deadline for the registration?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'How will the Hackathon teams be made?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'Can I join the competition with my ready-made team?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title: 'What if I don’t have a team?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
  {
    title:
      'Do all the team members have to be physically present at the competition?',
    description:
      'A team consists of 1-5 individuals, out of which at least one must be a developer. You can register in the Hackathon with your ready-made team by pitching an idea. Or sign up to join a team, based on your skills.',
  },
];

export const Faq = () => {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });
  return (
    <Wrapper>
      <Layout>
        <GradientTitle>faq’s</GradientTitle>
        <Accordion>
          <AccordionParent>
            {accordionItems.map((accordionItem) => (
              <Collapse title={accordionItem.title} key={accordionItem.title}>
                {accordionItem.description}
              </Collapse>
            ))}
          </AccordionParent>
        </Accordion>
        <IdeaWrap>
          <IdeaText>
            Have an <strong>AI</strong>dea already?
          </IdeaText>
          <CtaButton {...getTriggerProps()}>Register here</CtaButton>
          <Modal {...modalProps}>
            <RegistrationForm />
          </Modal>
        </IdeaWrap>
      </Layout>
    </Wrapper>
  );
};
