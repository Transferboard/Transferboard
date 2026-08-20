export function EvidenceBoard() {
  return (
    <figure className="evidence-board" aria-hidden="true">
      <svg viewBox="0 0 640 520" role="img" focusable="false">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        <path className="route route-red" d="M112 142 C198 72 272 120 334 170" />
        <path className="route route-blue" d="M335 210 C425 250 444 316 520 344" />
        <path className="route route-green" d="M168 364 C242 326 310 346 384 402" />
        <g className="node journalist"><circle cx="112" cy="142" r="48" /><text x="112" y="133">JM</text><text x="112" y="157">SOURCE</text></g>
        <g className="claim-card"><rect x="260" y="126" width="164" height="110" /><text x="282" y="158">CLAIM</text><text x="282" y="186">15:42 UTC</text><text x="282" y="210">strength 4/5</text></g>
        <g className="node player"><circle cx="168" cy="364" r="54" /><text x="168" y="358">PLAYER</text><text x="168" y="383">P-17</text></g>
        <g className="club"><rect x="382" y="360" width="132" height="84" /><text x="448" y="395">CLUB</text><text x="448" y="421">BID PATH</text></g>
        <g className="outcome"><path d="M500 292 h82 v82 h-82z" /><text x="541" y="324">✓</text><text x="541" y="352">VERIFIED</text></g>
        <path className="annotation" d="M70 258 h132 M70 286 h92 M458 92 h104 M486 118 h76" />
        <circle className="pin" cx="334" cy="170" r="7" /><circle className="pin" cx="520" cy="344" r="7" /><circle className="pin" cx="384" cy="402" r="7" />
      </svg>
      <figcaption>Journalist → Claim → Player → Club → Outcome</figcaption>
    </figure>
  );
}
