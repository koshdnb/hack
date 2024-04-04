import Iqoption from '../Header/images/iqoption.svg';
import { Layout } from '../../../pages/Main/styled';
import TwitterIcon from './images/twitter-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import LinkedinIcon from './images/linkedIn-icon.svg';
import InstagramIcon from './images/instagram-icon.svg';
import {
  Wrapper,
  TopWrap,
  Title,
  Address,
  Email,
  BottomWrap,
  LinkList,
  LinkItem,
  Link,
  SocialList,
  SocialItem,
  SocialLink,
} from './styled';

const links = [
  {
    name: 'Terms',
    url: '/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    name: 'Cookies Policy',
    url: 'cookie-policy',
  },
  {
    name: '@2024 Quadcode',
    url: '#',
  },
];

const socials = [
  {
    name: 'Quadcode Twitter',
    url: '#',
    Icon: TwitterIcon,
  },
  {
    name: 'Quadcode Instagram',
    url: '#',
    Icon: InstagramIcon,
  },
  {
    name: 'Quadcode Facebook',
    url: '#',
    Icon: FacebookIcon,
  },
  {
    name: 'Quadcode LinkedIn',
    url: '#',
    Icon: LinkedinIcon,
  },
];

export const Footer = () => {
  return (
    <Wrapper>
      <Layout>
        <TopWrap>
          <Title>Innovate. Integrate. Elevate.</Title>
          <Address>
            JUNE 15-18, 2024, The Warehouse by IT Quarter, Limassol
          </Address>
          <Email>
            Have any queries? Email us directly at 
            <strong>hackathon@quadcode.com</strong>
          </Email>
        </TopWrap>

        <BottomWrap>
          <Iqoption />
          <LinkList>
            {links.map(({ name, url }) => (
              <LinkItem key={url}>
                <Link href={url}>{name}</Link>
              </LinkItem>
            ))}
          </LinkList>
          <SocialList>
            {socials.map(({ name, url, Icon }) => (
              <SocialItem key={url}>
                <SocialLink href={url}>
                  <span>{name}</span>
                  <Icon />
                </SocialLink>
              </SocialItem>
            ))}
          </SocialList>
        </BottomWrap>
      </Layout>
    </Wrapper>
  );
};
