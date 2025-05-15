import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * AllCaps
   */

  allCaps?: boolean;

  /**
   * Color label
   */

  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font Color label
   */

  fontColor?: string;
}

/**
 * Todas son opcionales
 * allCaps: boolean,
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary',
 * fontColor: string, texto del span
 */

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor
}: Props) => {
  return (
    <span className={`${size} ${color}`}
      style={{color: fontColor}}
    >
      { allCaps? label.toUpperCase() : label}
    </span>
  )
}
