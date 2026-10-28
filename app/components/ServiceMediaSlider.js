"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServiceMediaSlider({ image, video, title }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="service-media-slider" role="group" aria-label={`${title} media`}>
      <div className="service-media-stage">
        {activeSlide === 0 ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 780px) 90vw, 45vw"
            priority
          />
        ) : (
          <video controls playsInline preload="metadata" aria-label={`${title} video`}>
            <source src={video} type="video/mp4" />
            Your browser does not support this video format.
          </video>
        )}
      </div>
      <div className="service-media-pagination" aria-label="Choose media">
        <button
          type="button"
          aria-label={`Show ${title} photo`}
          aria-current={activeSlide === 0}
          onClick={() => setActiveSlide(0)}
        >
          <span />
        </button>
        <button
          type="button"
          aria-label={`Show ${title} video`}
          aria-current={activeSlide === 1}
          onClick={() => setActiveSlide(1)}
        >
          <span />
        </button>
      </div>
    </div>
  );
}