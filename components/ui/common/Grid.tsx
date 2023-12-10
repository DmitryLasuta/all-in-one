export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
      {children}
    </ul>
  )
}
