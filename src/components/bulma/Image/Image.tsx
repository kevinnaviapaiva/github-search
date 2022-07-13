interface ImageProps {
  alt?: string,
  className?: string,
  isUserAvatar?: boolean,
  isRounded?: boolean,
  square?: 16 | 24 | 32 | 48 | 64 | 96 | 128,
  src?: string,
}

export const Image = ({ alt, className, isRounded, isUserAvatar, square, src}: ImageProps) => {
  return (
    <figure className={`image ${className ?? ''}${square ? ` is-${square}x${square}`: ''}${isUserAvatar ? ' is-user-avatar' : ''}`}>
      <img className={`${isRounded && ' is-rounded'}`} src={src} alt={alt} />
    </figure>
  )
}