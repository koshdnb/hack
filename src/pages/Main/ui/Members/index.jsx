import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';
import {
  Wrapper,
  MembersWrap,
  CardWrapper,
  Image,
  Name,
  Description,
  Cards,
} from './styled';

let teamMembers = [
  {
    imgSrc: '/images/jury/3.png',
    name: 'Sergei Dobrovolskii',
    description: 'CEO, Founder at Quadcode',
  },
  {
    imgSrc: '/images/jury/2.png',
    name: 'Felix Vladimirsky',
    description: 'Chief Revenue Officer at Quadcode',
  },
  {
    imgSrc: '/images/jury/1.png',
    name: 'Michael Tyrimos',
    description: 'Managing Director at Capacitor Partners',
  },
  {
    imgSrc: '/images/jury/unknown.png',
    name: 'To Be Revealed Soon',
    description: '',
  },
  {
    imgSrc: '/images/jury/unknown.png',
    name: 'To Be Revealed Soon',
    description: '',
  },
  // {
  //   imgSrc: '/images/jury/1.png',
  //   name: 'Michael Tyrimos',
  //   description: 'Managing Director Capacitor Partner',
  // },
  // {
  //   imgSrc: '/images/jury/3.png',
  //   name: 'Sergei Dobrovolskii',
  //   description: 'CEO, Founder Quadcode',
  // },
];

export const Members = () => {
  return (
    <Wrapper>
      <Layout>
        <MembersWrap>
          <GradientTitle>Meet our Jury</GradientTitle>
          <Cards>
            {teamMembers.map((item) => (
              <CardWrapper key={item.name}>
                <Image src={item.imgSrc} />
                <Name>{item.name}</Name>
                <Description>{item.description}</Description>
              </CardWrapper>
            ))}
          </Cards>
        </MembersWrap>
      </Layout>
    </Wrapper>
  );
};
