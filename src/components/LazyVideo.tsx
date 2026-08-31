import { useState } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  /** Embed URL, e.g. https://www.youtube.com/embed/ID or https://player.vimeo.com/video/ID */
  src: string;
  title: string;
  className?: string;
  /** Optional poster override */
  poster?: string;
}

const getThumbnail = (src: string) => {
  const yt = src.match(/youtube\.com\/embed\/([\w-]+)/);
  if (yt) return `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg`;
  const vimeo = src.match(/vimeo\.com\/video\/(\d+)/);
  if (vimeo) return `https://vumbnail.com/${vimeo[1]}.jpg`;
  return undefined;
};

const withAutoplay = (src: string) =>
  src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

const LazyVideo = ({ src, title, className = '', poster }: LazyVideoProps) => {
  const [active, setActive] = useState(false);
  const thumb = poster ?? getThumbnail(src);

  if (active) {
    return (
      <iframe
        src={withAutoplay(src)}
        title={title}
        className={`w-full h-full ${className}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play ${title}`}
      className={`relative w-full h-full bg-primary/90 group/video ${className}`}
    >
      {thumb && (
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <span className="absolute inset-0 bg-black/25 transition-smooth group-hover/video:bg-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary shadow-glow transition-transform duration-300 group-hover/video:scale-110">
          <Play className="h-6 w-6 translate-x-[2px] fill-current" />
        </span>
      </span>
    </button>
  );
};

export default LazyVideo;
