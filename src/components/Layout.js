import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jxmedia | Official Quality & Style</title>

        <meta
          name="description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 7 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <meta
          property="og:description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 7 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        ></meta>
        <meta
          property="og:site_name"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 7 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        ></meta>
        <meta
          name="twitter:title"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <link
          rel="icon"
          href="https://imgix.cosmicjs.com/f25e6a80-fb54-11ea-9c2f-cb7d732c4747-Web-logo.png"
        />
      </Helmet>

      <Header />
      <main class="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
