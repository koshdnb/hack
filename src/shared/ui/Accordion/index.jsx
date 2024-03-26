import { useCollapse } from 'react-collapsed';
import { Children, cloneElement, useState } from 'react';

import {
  Toggle,
  Panel,
  Item,
  Title,
  ToggleIcon,
  Wrapper,
} from './styled';

export const Collapse = ({ isActive, onSelect, title, children }) => {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isActive,
  });

  return (
    <Item>
      <Toggle
        {...getToggleProps({
          onClick: onSelect,
        })}
      >
        <ToggleIcon aria-hidden="true">{isActive ? '-' : '+'}</ToggleIcon>
        <Title>{title}</Title>
      </Toggle>
      <div {...getCollapseProps()}>
        <Panel>{children}</Panel>
      </div>
    </Item>
  );
};

export const AccordionParent = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <Wrapper>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ...child,
          isActive: activeIndex === index,
          onSelect: () => setActiveIndex(activeIndex === index ? null : index),
        })
      )}
    </Wrapper>
  );
};
