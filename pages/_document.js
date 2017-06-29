import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { bodyFont } from '../lib/fonts';
import { textColor } from '../lib/colors';

const globalStyles = `
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'),
         local('Roboto-Regular'),
         url(https://fonts.gstatic.com/s/roboto/v16/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2)
         format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather'),
         local('Merriweather-Regular'),
         url(https://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EBampu5_7CjHW5spxoeN3Vs.woff2)
         format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    src: local('Merriweather Bold'),
         local('Merriweather-Bold'),
         url(https://fonts.gstatic.com/s/merriweather/v15/ZvcMqxEwPfh2qDWBPxn6nshHwsiXhsDb0smKjAA7Bek.woff2)
         format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: italic;
    font-weight: 400;
    src: local('Merriweather Italic'),
         local('Merriweather-Italic'),
         url(https://fonts.gstatic.com/s/merriweather/v15/So5lHxHT37p2SS4-t60SlGfrnYWAzH6tTbHZfcsRIsM.woff2)
         format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: 'PT Mono';
    font-style: normal;
    font-weight: 400;
    src: local('PT Mono'),
         local('PTMono-Regular'),
         url(https://fonts.gstatic.com/s/ptmono/v4/G-CKroWfxRiFDKkMmCHyAgLUuEpTyoUstqEm5AMlJo4.woff2)
         format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  html, body {
    font-size: 16px;
    line-height: 1.5;
    font-family: ${bodyFont};
    font-style: normal;
    padding: 0;
    margin: 0;
    color: ${textColor};

    -webkit-font-smoothing: subpixel-antialiased;
  }
`;

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>tricksters.io</title>

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />

          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
