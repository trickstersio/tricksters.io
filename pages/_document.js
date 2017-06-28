import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700|PT+Mono|Roboto"
            rel="stylesheet"
          />
          <title>Tricksters</title>
          <style>{globalStyles}</style>
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
