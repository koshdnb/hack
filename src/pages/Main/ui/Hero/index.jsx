import { Modal, useModal } from 'react-morphing-modal';
import RegistrationForm from '/src/shared/ui/RegistrationForm';

import HackathonIcon from './images/hackathon.svg';
import HackathonMobIcon from './images/hackathon-mob.svg';

import { Layout, Button } from '../../styled';

import {
  Wrapper,
  ContentWrap,
  LogoWrap,
  TextWrap,
  Title,
  Subtitle,
  Date,
} from './styled';

export default function Hero() {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });

  const handleCtaClick = () => {
    window.dataLayer?.push({
      event: 'lead',
    });
  };

  return (
    <Wrapper>
      <Layout>
        <ContentWrap>
          <LogoWrap>
            <div style={{ width: '514px', height: '80px', marginTop: '-20px' }}>
              <HackathonIcon />
            </div>
            <HackathonMobIcon viewBox="0 0 162 301" />
          </LogoWrap>
          <TextWrap>
            <Title>AI in Fintech - The Power of Personalization</Title>
            <Subtitle>
              The future is shaped by automation and AI. We invite the best
              talent to participate in one of Cyprus&apos;s grandest hackathons
              - To envision, craft, and develop pioneering solutions in the
              industry.
            </Subtitle>
            <Date>
              The Warehouse by IT Quarter
              June&nbsp;15th&nbsp;&&nbsp;16th,&nbsp;2024
            </Date>
          </TextWrap>
          <Button onClick={handleCtaClick} {...getTriggerProps()}>
            Register now
          </Button>
          <Modal {...modalProps}>
            <RegistrationForm />
          </Modal>
        </ContentWrap>
      </Layout>
    </Wrapper>
  );
}
