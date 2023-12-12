import { ParametersList } from '@/components/sidePanel'
import { ReactElement } from 'react'

type SidePanelItem = ReactElement<typeof ParametersList>
interface SidePanelProps {
  children: SidePanelItem | SidePanelItem[]
}

export const SidePanel = async ({ children }: SidePanelProps) => {
  return (
    <aside className="md:pr-4 lg:pr-8 min-h-full border-b-2 md:border-r-2 md:border-b-0">
      <div className="w-full h-fit sticky top-[100px]">
        <h3 className="uppercase font-bold text-xl mb-2 text-center md:text-left">Filters & Sorting</h3>
        <div>{children}</div>
      </div>
    </aside>
  )
}
