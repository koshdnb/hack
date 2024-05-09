import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
              name="description"
              content="Cyprus' biggest hackathon, HackAIthon 2024, invites innovators to tackle challenges in trading, AR/VR, education, and more, using AI for financial personalization. Join us in Limassol for the ultimate fintech innovation event."
          />
          <title>
            HackAIthon: AI in Fintech - The Power of Personalisation
          </title>
          <meta
              name="keywords"
              content="HackAIthon 2024, AI in Fintech, Financial Personalization, Cyprus Hackathon, Fintech Challenges, Trading Innovation, AR/VR Finance, AI Education in Finance, Fintech Development, Limassol Event"
          />
          <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-4LGBKLXBMF"
          ></script>
        </Head>
        <body>
        <noscript>
          <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KDC5JKFT"
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
