export default function Button({text, handler}) {
  return (
    /* render a button with custom text and function */
    <button className="btn" onClick={handler}>{text}</button>
  )
}