import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.png" />
          <meta name="theme-color" content="#000000" />
	        <meta http-equiv="Content-Security-Policy" content="require-trusted-types-for 'script';" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
