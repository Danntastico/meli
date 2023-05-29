import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react"

const ICONS = ['logo_meli', 'search', 'shipping'] as const;

type HTMLImageTagType = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
interface IconProps extends Omit<HTMLImageTagType, 'src'> {
  name: typeof ICONS[number];
}

export const Icon: React.FC<IconProps>  = (props) => {
  const { name, alt, width = '50px', ...rest} = props
  return (
    <img 
      src={`./src/assets/${name}.png`} 
      alt={ alt ?? name}
      width={width}
      {...rest}
    />
  )
}
