import { Wrapper } from './styled';

export const GradientTitle = ({ children, className, style }) => {
  return (
    <Wrapper
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
