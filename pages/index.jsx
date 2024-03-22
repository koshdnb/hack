import { Roboto } from 'next/font/google';
import Main from '../src/pages/Main';
import { getLocaleStaticProps } from '../src/shared/libs/getLocaleStaticProps';


const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['cyrillic-ext', 'latin-ext'],
});

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Main />
    </>
  );
}

export const getStaticProps = getLocaleStaticProps;
