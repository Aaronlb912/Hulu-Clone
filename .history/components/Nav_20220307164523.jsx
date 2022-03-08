function Nav() {
  return (
    <nav>
        <div>
            {Object.entrties(requests).map((key, value))}
        </div>
    </nav>
  )
}

export default Nav