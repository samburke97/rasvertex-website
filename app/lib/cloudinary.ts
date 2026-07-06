const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

type Options = {
  width?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif";
};

export function cld(publicId: string, { width, quality = 80, format = "auto" }: Options = {}) {
  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `${BASE}/${transforms}/${publicId}`;
}
