
export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
  category?: string
}

export interface PartnerMarqueeProps {
  partners: Partner[]
  speed?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  variant?: 'default' | 'premium' | 'minimal'
  className?: string
  showStats?: boolean
  gradientOverlay?: boolean
}

export interface MarqueeStats {
  partnersCount: string
  satisfactionRate: string
  supportAvailability: string
}

export type AnimationDirection = 'left' | 'right'
export type MarqueeVariant = 'default' | 'premium' | 'minimal'