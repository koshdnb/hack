import { Modal, useModal } from 'react-morphing-modal';
import RegistrationForm from '/src/shared/ui/RegistrationForm';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Tabs, Tab, TabList, TabPanel } from '../../../../shared/ui/Tabs';

import { ScheduleItem } from './ScheduleItem';
import { scheduleDay1, scheduleDay2 } from './constants';
import {
  Wrapper,
  ProgramWrap,
  Description,
  CtaButton,
  tabListClassName,
  tabClassName,
} from './styled';
import { Layout } from '../../styled';

export const Program = () => {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });

  return (
    <Wrapper id="Schedule">
      <Layout>
        <ProgramWrap>
          <GradientTitle>The hackaithon program</GradientTitle>
          <Description>
            The HackAIthon is split over two days, check below to see the full agenda.<br/>
            There will be complimentary food and drinks being served all day.
          </Description>

          <Tabs>
            <TabList className={tabListClassName}>
              <Tab className={tabClassName}>Day 1</Tab>
              <Tab className={tabClassName}>Day 2</Tab>
            </TabList>
            <TabPanel>
              {scheduleDay1.map((item) => (
                <ScheduleItem item={item} key={item.title} />
              ))}
            </TabPanel>
            <TabPanel>
              {scheduleDay2.map((item) => (
                <ScheduleItem item={item} key={item.title} />
              ))}
            </TabPanel>
          </Tabs>

          <CtaButton {...getTriggerProps()}>Register now</CtaButton>
          <Modal {...modalProps}>
            <RegistrationForm />
          </Modal>
        </ProgramWrap>
      </Layout>
    </Wrapper>
  );
};
