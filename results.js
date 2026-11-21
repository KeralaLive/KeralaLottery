const results = [
  { n: "KARUNYA KR-777", d: "21.11.2026", l: "karunya-kr-21-11-2026-result.html" },
  { n: "SUVARNA KERALAM SK-78", d: "20.11.2026", l: "suvarna-keralam-sk-20-11-2026-result.html" }
];

const live = document.getElementById("live-box");
if (live) {
  live.innerHTML = "<b>" + results[0].n + "</b><br>" + results[0].d;
}

const recent = document.getElementById("recent-box");
if (recent) {
  let html = "";
  for (let i = 1; i < results.length; i++) {
    html += "<div><b>" + results[i].n + "</b><br>" + results[i].d + "</div><hr>";
  }
  recent.innerHTML = html;
}
