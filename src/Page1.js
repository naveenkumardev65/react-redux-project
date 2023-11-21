import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Page1 = () => {
  const title = 'Page 1 Title';
  const description = 'This is the description for Page 1.';
  const imageUrl = 'https://www.w3schools.com/html/pic_trulli.jpg';

  useEffect(() => {
    // Dynamically update meta tags on the client side
    document.title = title;
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if(ogTitleMeta) ogTitleMeta.setAttribute('content', title)
    if(ogDescription) ogDescription.setAttribute('content', description);
    if(ogImage) ogImage.setAttribute('content', imageUrl);
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
      <img src={imageUrl} alt="Page 1" />
    </div>
  );
};

export default Page1;
