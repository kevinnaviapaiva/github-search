interface ImageProps {
  alt?: string,
  isUserAvatar?: boolean,
  isRounded?: boolean,
  square?: 16 | 24 | 32 | 48 | 64 | 96 | 128,
  src?: string,
}

export const Image = ({ alt, isRounded, isUserAvatar, square, src}: ImageProps) => {
  return (
    <figure className={`image${square ? ` is-${square}x${square}`: ''}${isUserAvatar ? ' is-user-avatar' : ''}`}>
      <img className={`${isRounded && ' is-rounded'}`} src={src} alt={alt} />
    </figure>
  )
}