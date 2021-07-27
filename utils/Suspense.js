import React, { Suspense } from "react";

const OriImg = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

const LazyLoadImg = ({ src, alt, ratio }) => {
  const placeholder = generatePlaceholder(ratio, "black");

  return (
    <Suspense fallback={<img src={placeholder} alt={alt} />}>
      <OriImg src={src} alt={alt} />
    </Suspense>
  );
};