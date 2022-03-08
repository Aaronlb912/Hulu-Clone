function Nav() {
  return (
    <nav>
        <div>
            {Object.entrties(requests).map((key, {t}))}
        </div>
    </nav>
  )
}

export default Nav