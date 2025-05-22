import React, { useState, useEffect } from 'react';
const BlockChainLabels = ({ labels }: { labels: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (labels.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [labels]);

  return (
    <span className="animate-fadeInOut d-inline-block">
      {labels[currentIndex]}
    </span>
  );
};

export default BlockChainLabels;