
function layout({header, sidebar, content}) {
  return (
    <div>
      <div>{header}</div>
      <div style={{
        display:"flex"
      }}></div>
      <div>
        {sidebar}
        {content}
      </div>
    </div>
  )
}

export default layout
