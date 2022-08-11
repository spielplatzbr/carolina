const Layout = (props: any) => {
  return (
    <div className="flex min-h-screen min-w-full flex-col bg-gray-900">
      {props.children}
    </div>
  )
}

export default Layout
