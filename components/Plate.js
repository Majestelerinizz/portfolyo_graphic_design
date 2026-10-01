const display = "var(--font-display), Georgia, serif"
const sans = "var(--font-sans), sans-serif"

function Board({ label, decorative, children }) {
  return (
    <svg
      viewBox="0 0 800 1000"
      role="img"
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
    >
      {children}
    </svg>
  )
}

function NoraHero({ decorative }) {
  return (
    <Board label="Nora identity mark" decorative={decorative}>
      <rect width="800" height="1000" fill="#1c1612" />
      <text x="64" y="88" fill="#d7c4a8" fontFamily={sans} fontSize="18" letterSpacing="6">
        NORA — 01
      </text>
      <circle cx="400" cy="460" r="220" fill="none" stroke="#d7c4a8" strokeWidth="2" />
      <line x1="180" y1="460" x2="620" y2="460" stroke="#d7c4a8" strokeWidth="1.5" />
      <circle cx="620" cy="460" r="7" fill="#a68456" />
      <text
        x="400"
        y="482"
        textAnchor="middle"
        fill="#f3efe6"
        fontFamily={display}
        fontSize="84"
        letterSpacing="16"
      >
        NORA
      </text>
      <text
        x="400"
        y="860"
        textAnchor="middle"
        fill="#d7c4a8"
        fontFamily={sans}
        fontSize="16"
        letterSpacing="7"
      >
        CULTURAL VENUE
      </text>
    </Board>
  )
}

function NoraSign({ decorative }) {
  return (
    <Board label="Nora facade sign" decorative={decorative}>
      <rect width="800" height="1000" fill="#2a241e" />
      <rect x="70" y="180" width="660" height="640" fill="#1c1612" />
      <circle cx="400" cy="430" r="120" fill="none" stroke="#d7c4a8" strokeWidth="2" />
      <line x1="280" y1="430" x2="520" y2="430" stroke="#d7c4a8" />
      <text
        x="400"
        y="700"
        textAnchor="middle"
        fill="#f3efe6"
        fontFamily={display}
        fontSize="54"
        letterSpacing="10"
      >
        NORA
      </text>
      <text
        x="400"
        y="760"
        textAnchor="middle"
        fill="#a68456"
        fontFamily={sans}
        fontSize="14"
        letterSpacing="4"
      >
        WATERFRONT
      </text>
    </Board>
  )
}

function KesikHero({ decorative }) {
  return (
    <Board label="Kesik magazine cover" decorative={decorative}>
      <rect width="800" height="1000" fill="#f6f1e6" />
      <rect width="800" height="620" fill="#111111" />
      <text x="48" y="88" fill="#e2f25a" fontFamily={sans} fontSize="18" letterSpacing="6">
        ISSUE 07
      </text>
      <text x="-20" y="520" fill="#f6f1e6" fontFamily={display} fontSize="188">
        KESIK
      </text>
      <rect y="620" width="800" height="26" fill="#e2f25a" />
      <text x="48" y="740" fill="#111111" fontFamily={sans} fontSize="20" letterSpacing="5">
        ISSUE 07
      </text>
      <text x="48" y="800" fill="#111111" fontFamily={display} fontSize="42">
        The cut essay
      </text>
      <text x="48" y="900" fill="#111111" fontFamily={sans} fontSize="16" letterSpacing="3">
        INDEPENDENT MAGAZINE
      </text>
    </Board>
  )
}

function KesikSpread({ decorative }) {
  return (
    <Board label="Kesik contents spread" decorative={decorative}>
      <rect width="800" height="1000" fill="#111111" />
      <rect x="48" y="48" width="330" height="904" fill="#f6f1e6" />
      <rect x="422" y="48" width="330" height="904" fill="#f6f1e6" />
      <text x="72" y="140" fill="#111111" fontFamily={sans} fontSize="14" letterSpacing="3">
        CONTENTS
      </text>
      <text x="72" y="230" fill="#111111" fontFamily={display} fontSize="64">
        07
      </text>
      {[0, 1, 2, 3, 4].map((line) => (
        <rect
          key={line}
          x="72"
          y={300 + line * 70}
          width={line % 2 === 0 ? 250 : 190}
          height="8"
          fill="#111111"
        />
      ))}
      <rect x="446" y="120" width="282" height="16" fill="#e2f25a" />
      {[0, 1, 2, 3, 4, 5, 6].map((line) => (
        <rect
          key={line}
          x="446"
          y={180 + line * 48}
          width={line === 3 ? 160 : 260}
          height="8"
          fill="#111111"
          opacity={line === 6 ? 0.35 : 1}
        />
      ))}
    </Board>
  )
}

function SolHero({ decorative }) {
  return (
    <Board label="Sol olive oil label" decorative={decorative}>
      <rect width="800" height="1000" fill="#efe6d4" />
      <rect x="230" y="140" width="340" height="720" rx="6" fill="#143028" />
      <path
        d="M400 250c18-40 62-52 70-20-28 6-48 28-70 52-22-24-42-46-70-52 8-32 52-20 70 20z"
        fill="#c6a15a"
      />
      <text
        x="400"
        y="500"
        textAnchor="middle"
        fill="#efe6d4"
        fontFamily={display}
        fontSize="108"
      >
        SOL
      </text>
      <text
        x="400"
        y="560"
        textAnchor="middle"
        fill="#c6a15a"
        fontFamily={sans}
        fontSize="16"
        letterSpacing="6"
      >
        OLIVE OIL
      </text>
      <text
        x="400"
        y="780"
        textAnchor="middle"
        fill="#efe6d4"
        fontFamily={sans}
        fontSize="14"
        letterSpacing="3"
      >
        500 ML
      </text>
    </Board>
  )
}

function SolBottles({ decorative }) {
  return (
    <Board label="Sol bottle lineup" decorative={decorative}>
      <rect width="800" height="1000" fill="#efe6d4" />
      {[0, 1, 2].map((bottle) => (
        <g key={bottle} transform={`translate(${120 + bottle * 200} 180)`}>
          <rect x="48" y="0" width="64" height="36" rx="4" fill="#143028" />
          <rect width="160" height="560" y="36" rx="18" fill={bottle === 1 ? "#143028" : "#1d4034"} />
          <rect x="28" y="180" width="104" height="220" fill="#efe6d4" />
          <text
            x="80"
            y="300"
            textAnchor="middle"
            fill="#143028"
            fontFamily={display}
            fontSize="36"
          >
            SOL
          </text>
        </g>
      ))}
    </Board>
  )
}

function GeceHero({ decorative }) {
  return (
    <Board label="Gece concert poster" decorative={decorative}>
      <rect width="800" height="1000" fill="#0c1020" />
      <polygon points="0,0 800,250 800,360 0,110" fill="#ff3b30" />
      <text
        x="56"
        y="620"
        fill="#f4efe6"
        fontFamily={display}
        fontSize="168"
        fontStyle="italic"
      >
        Gece
      </text>
      <text x="56" y="820" fill="#f4efe6" fontFamily={sans} fontSize="20" letterSpacing="4">
        SAT 24 OCT
      </text>
      <text x="56" y="868" fill="#8d93a8" fontFamily={sans} fontSize="20" letterSpacing="4">
        DOORS 21:00
      </text>
    </Board>
  )
}

function GeceStack({ decorative }) {
  return (
    <Board label="Gece poster sizes" decorative={decorative}>
      <rect width="800" height="1000" fill="#e7e1d6" />
      <rect x="180" y="120" width="360" height="760" fill="#0c1020" transform="rotate(-6 360 500)" />
      <rect x="230" y="150" width="360" height="700" fill="#ff3b30" />
      <text x="270" y="520" fill="#f4efe6" fontFamily={display} fontSize="92" fontStyle="italic">
        Gece
      </text>
      <rect x="300" y="210" width="250" height="520" fill="#0c1020" />
      <text
        x="425"
        y="480"
        textAnchor="middle"
        fill="#f4efe6"
        fontFamily={display}
        fontSize="48"
        fontStyle="italic"
      >
        Gece
      </text>
    </Board>
  )
}

function ArchiveHero({ decorative }) {
  return (
    <Board label="Archive type specimen" decorative={decorative}>
      <rect width="800" height="1000" fill="#efeae1" />
      <rect x="36" y="36" width="728" height="928" fill="none" stroke="#121212" />
      <text x="64" y="120" fill="#121212" fontFamily={sans} fontSize="16" letterSpacing="5">
        SPECIMEN 01
      </text>
      <text x="48" y="640" fill="#121212" fontFamily={display} fontSize="340">
        Ag
      </text>
      <line x1="64" y1="680" x2="736" y2="680" stroke="#e23d2b" strokeWidth="4" />
      <text x="64" y="860" fill="#121212" fontFamily={sans} fontSize="18" letterSpacing="3">
        REGULAR / ITALIC / BOLD
      </text>
    </Board>
  )
}

function ArchiveRow({ decorative }) {
  return (
    <Board label="Archive baseline" decorative={decorative}>
      <rect width="800" height="1000" fill="#efeae1" />
      {["A", "g", "R", "k"].map((glyph, index) => (
        <text
          key={glyph}
          x={90 + index * 180}
          y="560"
          fill="#121212"
          fontFamily={display}
          fontSize="180"
        >
          {glyph}
        </text>
      ))}
      <line x1="48" y1="590" x2="752" y2="590" stroke="#e23d2b" strokeWidth="3" />
      <text x="64" y="860" fill="#121212" fontFamily={sans} fontSize="18" letterSpacing="4">
        BASELINE
      </text>
    </Board>
  )
}

function System({ project, decorative }) {
  return (
    <Board label={`${project.title} color and type`} decorative={decorative}>
      <rect width="800" height="1000" fill="#f3efe6" />
      <rect x="40" y="40" width="720" height="920" fill="none" stroke="#141414" />
      {project.colors.map((color, index) => {
        const x = 72 + (index % 2) * 340
        const y = 88 + Math.floor(index / 2) * 180
        return (
          <g key={color.name}>
            <rect x={x} y={y} width="316" height="140" fill={color.hex} />
            <text
              x={x + 18}
              y={y + 82}
              fill={color.on}
              fontFamily={sans}
              fontSize="18"
              letterSpacing="2"
            >
              {color.name}
            </text>
            <text x={x + 18} y={y + 112} fill={color.on} fontFamily={sans} fontSize="16">
              {color.hex}
            </text>
          </g>
        )
      })}
      <text x="72" y="860" fill="#141414" fontFamily={display} fontSize="92">
        {project.title}
      </text>
      <text x="72" y="910" fill="#141414" fontFamily={sans} fontSize="20" letterSpacing="2">
        {project.typeName}
      </text>
    </Board>
  )
}

const heroes = {
  nora: NoraHero,
  kesik: KesikHero,
  sol: SolHero,
  gece: GeceHero,
  archive: ArchiveHero,
}

const applications = {
  nora: NoraSign,
  kesik: KesikSpread,
  sol: SolBottles,
  gece: GeceStack,
  archive: ArchiveRow,
}

export function Plate({ project, variant, decorative = false }) {
  if (variant === "system") {
    return <System project={project} decorative={decorative} />
  }

  const set = variant === "application" ? applications : heroes
  const Graphic = set[project.slug] ?? NoraHero
  return <Graphic decorative={decorative} />
}

export function Monogram() {
  return (
    <div className="monogram">
      <svg viewBox="0 0 800 1000" aria-hidden="true">
        <rect width="800" height="1000" fill="#141414" />
        <circle cx="400" cy="430" r="220" fill="none" stroke="#e23d2b" strokeWidth="2" />
        <text
          x="400"
          y="520"
          textAnchor="middle"
          fill="#f3efe6"
          fontFamily={display}
          fontSize="260"
        >
          K
        </text>
        <text
          x="400"
          y="860"
          textAnchor="middle"
          fill="#f3efe6"
          fontFamily={sans}
          fontSize="18"
          letterSpacing="8"
        >
          DESIGN BY
        </text>
      </svg>
    </div>
  )
}
