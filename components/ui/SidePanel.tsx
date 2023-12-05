export const SidePanel = async ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <aside className="pr-8 min-h-full border-b-2 md:border-r-2 md:border-b-0">
      <div className="w-full h-fit sticky top-[100px]">
        <h3 className="uppercase font-bold text-xl mb-2">{title}</h3>
        <div>{children}</div>
      </div>
    </aside>
  )
}
