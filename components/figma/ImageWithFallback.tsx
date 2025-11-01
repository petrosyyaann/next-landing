"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export function ImageWithFallback({
  src,
  alt = "",
  ...rest
}: ImageProps) {
  const [error, setError] = useState(false);

  if (!src) return null;

  return (
    <Image
      width={1080}
      height={720}
      src={error ? "/fallback.png" : src}
      alt={alt}
      onError={() => setError(true)}
      {...rest}
    />
  );
}
