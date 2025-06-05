export function formatSignalScore(score: number): string {
  if (score >= 0.9) return "💎 Diamond";
  if (score >= 0.7) return "🔥 Strong";
  if (score >= 0.5) return "⚖️ Neutral";
  if (score >= 0.3) return "⚠️ Weak";
  return "❌ Jeet";
}
