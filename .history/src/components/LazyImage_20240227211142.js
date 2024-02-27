export default function LazyImage({ src, alt, className }) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  }