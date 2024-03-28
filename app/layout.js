"use client";
import { ReExtProvider } from '@gusmano/reext';
import './layout/global.css';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html className="zcol" lang="en">
      <body className="zcol">
        <ReExtProvider>
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
