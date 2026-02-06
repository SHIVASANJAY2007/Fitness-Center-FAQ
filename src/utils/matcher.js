export function keywordScore(query, keywords) {
  let match = 0;
  keywords.forEach(k => {
    if (query.includes(k)) match++;
  });
  return match / keywords.length;
}

export function findBestMatch(query, items) {
  let best = null;
  let score = 0;

  items.forEach(item => {
    const s = keywordScore(query, item.keywords || []);
    if (s > score) {
      score = s;
      best = item;
    }
  });

  return score >= 0.3 ? best : null;
}
