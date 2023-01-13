export default function Button({text, handler}) {
  return (
    <button className="btn" onClick={handler}>{text}</button>
  )
}