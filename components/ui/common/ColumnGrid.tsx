export const ColumnGrid = ({ children }: { children: React.ReactNode }) => {
  return <ul className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-">{children}</ul>
}
