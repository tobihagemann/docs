import useBaseUrl from '@docusaurus/useBaseUrl';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Image({ src, alt, width, height, className }: ImageProps) {
  const imageSrc = useBaseUrl(src);
  
  return (
    <p>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        decoding="async"
        loading="lazy"
        style={{height: 'auto'}}
      />
    </p>
  );
}
