export default function MoveEvaluation({move}) {
    let badgeNoMatch = "";
    if (move.hasNoMatch())
       badgeNoMatch = <span id="mastermind-nomatch" className="badge bg-warning">No Match</span>;
    let badgePartialMatch = "";
    if (move.partialMatch > 0)
        badgePartialMatch = <span id="mastermind-partial" className="badge bg-danger">{move.partialMatch}</span>;
    let badgePerfectMatch = "";
    if (move.perfectMatch > 0)
        badgePerfectMatch = <span id="mastermind-perfect" className="badge bg-success">{move.perfectMatch}</span>;
    return (
      <>
          {badgeNoMatch}
          {badgePartialMatch}
          {badgePerfectMatch}
      </>
    );
}
