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
  return (
    <Wrapper id="Schedule">
      <Layout>
        <ProgramWrap>
          <GradientTitle>hackaithon</GradientTitle>
          <Description>
            The HackAIthon is split over two days, check below to see how the
            days will be split.
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

          <CtaButton>Apply for your spot</CtaButton>
        </ProgramWrap>
      </Layout>
    </Wrapper>
  );
};
