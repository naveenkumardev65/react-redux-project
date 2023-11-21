import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Page2 = () => {
  const title = 'Page 2 Title';
  const description = 'This is the description for Page 2.';
  const imageUrl = 'https://www.w3schools.com/html/img_girl.jpg';

  useEffect(() => {
    // Dynamically update meta tags on the client side
    document.title = title;
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
  }, [title, description, imageUrl]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt="Page 2" />
    </div>
  );
};

export default Page2;
