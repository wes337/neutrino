"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  {
    text: `"I've noticed my recovery seems easier and I have consistent energy levels." ³⸍²`,
    author: "Natalie W., 21/07/23",
  },
  {
    text: `"With Neutrino I feel more energized and focused first thing in the morning." ²⸍⁴`,
    author: "Steven R., 18/04/23",
  },
  {
    text: `"It tastes great and gives me energy." ²`,
    author: "Stefanie M., 26/10/2023",
  },
  {
    text: `"People keep complimenting my hair and skin. Good nutrition pays off in many ways." ⁵`,
    author: "Nichol B., 27/10/2023",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((currentReviewIndex) => {
        const nextReviewIndex = currentReviewIndex + 1;

        if (nextReviewIndex > REVIEWS.length - 1) {
          return 0;
        }

        return nextReviewIndex;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentReview = REVIEWS[currentReviewIndex];

  return (
    <div className="flex flex-col text-center tracking-tight md:text-left">
      <p className="flex items-center justify-center h-[56px] text-md italic md:text-2xl md:h-[64px] md:justify-start md:max-w-[600px]">
        {currentReview.text}
      </p>
      <p className="font-mono text-xs text-black/50 uppercase md:text-lg">
        {currentReview.author}
      </p>
    </div>
  );
}
