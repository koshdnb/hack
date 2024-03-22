import { Sofia_Sans } from 'next/font/google';
import Main from '../src/pages/Main';
import { getLocaleStaticProps } from '../src/shared/libs/getLocaleStaticProps';


const sofiaSans = Sofia_Sans({
  weight: ['300', '400', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin-ext'],
});

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sofiaSans.style.fontFamily};
        }
      `}</style>

      <Main />
    </>
  );
}

export const getStaticProps = getLocaleStaticProps;
