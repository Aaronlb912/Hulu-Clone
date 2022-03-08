function Nav() {
  return (
    <nav>
        <div>
            {Object.entrties(requests).map((key, {title}))}
        </div>
    </nav>
  )
}

export default Nav