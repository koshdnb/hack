import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Tabs, Tab, TabList, TabPanel } from '../../../../shared/ui/Tabs';

import { ScheduleItem } from './ScheduleItem';
import { scheduleDay1, scheduleDay2 } from './constants';
import { Wrapper, Description, CtaButton, tabListClassName } from './styled';
export const Program = () => {
  return (
    <Wrapper>
      <GradientTitle>hackaithon</GradientTitle>
      <Description>
        The HackAIthon is split over two days, check below to see how the days
        will be split.
      </Description>

      <Tabs>
        <TabList className={tabListClassName}>
          <Tab>Day 1</Tab>
          <Tab>Day 2</Tab>
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
    </Wrapper>
  );
};
