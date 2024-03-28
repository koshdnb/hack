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

  return (
    <Wrapper>
      <Layout>
        <ContentWrap>
          <LogoWrap>
            <HackathonIcon viewBox="0 0 514 79" />
            <HackathonMobIcon viewBox="0 0 162 287" />
          </LogoWrap>
          <TextWrap>
            <Title>Compete in Cyprus&apos; BIGGEST HackAIthon.</Title>
            <Subtitle>
              Can you harness the power of artificial intelligence to create
              innovative solutions that will elevate the worlds of Fintech and
              Digital Marketing.
            </Subtitle>
            <Date>The Warehouse by IT Quarter 15:06:24 Limassol, Cyprus.</Date>
          </TextWrap>
          <Button {...getTriggerProps()}>Reserve your spot</Button>
          <Modal {...modalProps}>
            <RegistrationForm />
          </Modal>
        </ContentWrap>
      </Layout>
    </Wrapper>
  );
}
