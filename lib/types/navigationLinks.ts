type Path = `/${string}`
type URL =
  | Path
  | (Path & URLSearchParams)
  | (Path & {
      children: URL[]
    } & URLSearchParams)

export interface NavigationLinks {
  title: string
  href: URL
}
