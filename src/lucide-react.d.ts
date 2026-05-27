declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  type Icon = FC<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>
  export const Shield: Icon; export const DollarSign: Icon; export const Users: Icon
  export const Heart: Icon; export const ArrowRight: Icon; export const MapPin: Icon
  export const Phone: Icon; export const Mail: Icon; export const CheckCircle: Icon
  export const ChevronDown: Icon; export const Menu: Icon; export const X: Icon
}
