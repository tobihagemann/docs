import useBaseUrl from '@docusaurus/useBaseUrl';

interface ImageProps {
  src: string;
  srcset?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Image({ src, srcset, alt, width, height, className }: ImageProps) {
  const imageSrc = useBaseUrl(src);
    const processedSrcset = srcset
    ? srcset
        .split(',')
        .map(item => {
          const [url, descriptor] = item.trim().split(/\s+/);
          return `${useBaseUrl(url)} ${descriptor || ''}`.trim();
        })
        .join(', ')
    : undefined;
  return (
    <p>
      <img
        src={imageSrc}
        srcSet={processedSrcset}
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
