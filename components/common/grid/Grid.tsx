import { GridItem } from './GridItem'
import { ReactElement } from 'react'

type GirdItemElement = ReactElement<typeof GridItem>
interface GridProps {
  children: GirdItemElement[] | GirdItemElement
}

export const Grid = ({ children }: GridProps) => {
  return <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">{children}</ul>
}
