"use client";
import { ReExtProvider } from '@gusmano/reext';
import './layout/global.css';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

export default function RootLayout({ children }) {
  var ReExtData = {
    "sdkversion": "7.7.0",
    "toolkit": "classic",
    "theme": "classic",
    "packages": {
      "charts": false,
      "fontawesome": false,
      "ux": false,
      "calendar": false,
      "d3": false,
      "exporter": false,
      "pivot": false,
      "pivotd3": false,
      "pivotlocale": false,
      "froalaeditor": false
    },
    "debug": false,
    "license": "b116e32e-0847-4764-94ef-a16987070407",
    "url": "local"
  }
  return (
    <html className="zcol" lang="en">
      <body className="zcol">
        <ReExtProvider ReExtData={ReExtData}>
          <Header />
          <div className="zrow">
            <Nav />
            <div className="zcol">{children}</div>
          </div>
          <Footer />
        </ReExtProvider>
      </body>
    </html>
  );
}
