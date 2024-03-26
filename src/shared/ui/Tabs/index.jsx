/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { cx } from '@emotion/css';

import {
  Tab as BaseTab,
  Tabs,
  TabProps,
  TabList as BaseTabList,
  TabListProps,
  TabPanel,
} from 'react-tabs';
import { tab, tabList, TabListWrapper } from './styled';

const Tab = ({ className, children, ...restProps }) => {
  return (
    <BaseTab className={cx(tab, className)} {...restProps}>
      {children}
    </BaseTab>
  );
};

Tab.tabsRole = 'Tab';

const TabList = ({ className, ...restProps }) => (
  <TabListWrapper>
    <BaseTabList className={cx(tabList, className)} {...restProps} />
  </TabListWrapper>
);

TabList.tabsRole = 'TabList';

export { Tab, Tabs, TabList, TabPanel };
