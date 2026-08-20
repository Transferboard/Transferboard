export type BoardJournalist = {
  rank: number;
  initials: string;
  name: string;
  publication: string;
  score: number;
  claims: number;
  resolved: number;
  change: string;
};

export type ClaimStatus = "Accurate" | "Verified" | "Pending" | "Unresolved" | "Inaccurate" | "Correct but collapsed";

export type LatestClaim = {
  id: string;
  timestamp: string;
  journalist: string;
  source: string;
  player: string;
  relationship: string;
  strength: 1 | 2 | 3 | 4 | 5;
  status: ClaimStatus;
  scoreImpact?: string;
};

export const demoDataNotice =
  "Demo UI data only. These names, scores, rankings, claims and outcomes are fictional placeholders for the homepage prototype.";

export const boardPreview: BoardJournalist[] = [
  { rank: 1, initials: "AM", name: "Ari Morgan", publication: "The Touchline", score: 91, claims: 84, resolved: 78, change: "+3.4" },
  { rank: 2, initials: "LC", name: "Lena Cross", publication: "North Stand Review", score: 87, claims: 62, resolved: 71, change: "+1.2" },
  { rank: 3, initials: "TB", name: "Theo Bale", publication: "Continental File", score: 82, claims: 105, resolved: 69, change: "—" },
  { rank: 4, initials: "NS", name: "Niko Shah", publication: "The Ledger", score: 79, claims: 49, resolved: 64, change: "-0.8" },
  { rank: 5, initials: "JR", name: "Jules Reid", publication: "Final Third", score: 76, claims: 91, resolved: 58, change: "+0.6" },
];

export const latestClaims: LatestClaim[] = [
  { id: "claim-001", timestamp: "14:32 UTC", journalist: "Ari Morgan", source: "The Touchline", player: "M. Alder", relationship: "bid submitted to Eastford", strength: 4, status: "Verified", scoreImpact: "+2.1" },
  { id: "claim-002", timestamp: "12:08 UTC", journalist: "Lena Cross", source: "North Stand Review", player: "D. Silva", relationship: "talks opened with Portbridge", strength: 3, status: "Pending" },
  { id: "claim-003", timestamp: "Yesterday", journalist: "Theo Bale", source: "Continental File", player: "K. Mensah", relationship: "loan path to Albion City", strength: 2, status: "Correct but collapsed", scoreImpact: "+0.4" },
  { id: "claim-004", timestamp: "Mon 09:16", journalist: "Niko Shah", source: "The Ledger", player: "R. Varga", relationship: "medical booked at Westport", strength: 5, status: "Inaccurate", scoreImpact: "-1.7" },
];

export const platformStats = [
  { label: "tracked demo claims", value: "2,418" },
  { label: "fictional sources indexed", value: "146" },
  { label: "resolved demo outcomes", value: "68%" },
  { label: "evidence notes logged", value: "5,904" },
];
