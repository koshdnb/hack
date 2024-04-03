import { Modal, useModal } from 'react-morphing-modal';
import { AccordionParent, Collapse } from '../../../../shared/ui/Accordion';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';

import { Wrapper, Accordion, IdeaWrap, IdeaText, CtaButton } from './styled';
import RegistrationForm from '/src/shared/ui/RegistrationForm';

let accordionItems = [
  {
    title: 'What is HackAIThon - AI in Fintech: The Power of Personalisation?',
    description: 'HackAIThon - AI in Fintech: The Power of Personalisation is a groundbreaking event set in Limassol on June 15-16, focused on harnessing AI to create personalized fintech solutions. Participants will tackle categories such as financial education, trading chatbots, customized trading experiences, voice-activated assistants, social networks, and AR/VR environments, aiming to transform user experiences in finance.',
  },
  {
    title: 'Who can participate in HackAIThon?',
    description: 'Anyone from developers, financial experts, and designers to data scientists, cybersecurity professionals, and more from around the globe. The event encourages a diverse mix of talents to innovate and shape the future of fintech personalisation.',
  },
  {
    title: 'What are the prizes for this year\'s HackAIThon?',
    description: 'This year\'s HackAIThon - AI in Fintech: The Power of Personalisation is set to award substantial prizes to recognize and reward outstanding innovation. The first-place team will receive a monetary prize of €30,000, highlighting the event\'s commitment to fostering breakthroughs in fintech. The second and third place winners will be awarded €7,500 and €2,500, respectively, in non-monetary prizes, supporting further development and exposure for their innovative solutions.',
  },
  {
    title: 'What\'s the registration deadline for HackAIThon?',
    description: 'Make sure to register by May 30th. Whether you\'re flying solo or already have a team, everyone\'s welcome to bring their unique skills to the table.',
  },
  {
    title: 'Can I join if I\'m signing up alone?',
    description: 'Absolutely! Solo participants will be matched with others to form dynamic teams, fostering collaboration and innovation.',
  },
  {
    title: 'What kind of support does HackAIThon offer?',
    description: 'Participants will benefit from mentorship by industry veterans and access to a wealth of resources including financial data, to guide their project development from idea to prototype.',
  },
  {
    title: 'Are pre-formed teams allowed?',
    description: 'Yes, teams of 2 to 5 members are encouraged to join and bring their collective expertise to the challenge.',
  },
  {
    title: 'Can we stay overnight at the venue?',
    description: 'Teams wishing to immerse themselves fully can stay overnight. Just remember to bring anything you might need, like a sleeping bag, for comfort.',
  },
  {
    title: 'What criteria will the projects be judged on?',
    description: 'Judges will look for innovation, relevance to fintech personalisation, user value, market potential, and the functionality of the prototype.',
  },
  {
    title: 'Are there any restrictions on projects?',
    description: 'The hackathon celebrates originality; thus, projects should be initiated and developed during the event, although preliminary research and design thinking are encouraged.',
  },
  {
    title: 'Where exactly is HackAIThon happening?',
    description: 'This engaging event will unfold in Limassol on June 15 and 16, bringing together over 100 innovators from various countries to explore the power of personalisation in fintech through AI.',
  },
  {
    title: 'Who is organizing HackAIThon?',
    description: 'HackAIThon - AI in Fintech: The Power of Personalisation is organized by Quadcode, a company renowned for its innovative solutions in the fintech sector. Quadcode specializes in developing advanced trading platforms, financial software, and other tech solutions aimed at enhancing the financial industry.',
  },
];

export const Faq = () => {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });
  return (
    <Wrapper>
      <Layout>
        <GradientTitle style={{ position: 'relative', top: '30px' }}>
          faq’s
        </GradientTitle>
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
          <CtaButton {...getTriggerProps()}>Register now</CtaButton>
          <Modal {...modalProps}>
            <RegistrationForm />
          </Modal>
        </IdeaWrap>
      </Layout>
    </Wrapper>
  );
};
