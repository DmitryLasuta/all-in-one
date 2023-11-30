export const ColumnGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-">{children}</div>
}
