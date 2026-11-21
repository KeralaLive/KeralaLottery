const results = [
  { name: "KARUNYA KR-777", date: "21.11.2026", link: "karunya-KR-21-11-2026Result.html" },
  { name: "SUVARNA KERALAM SK-78", date: "20.11.2026", link: "suvarna-keralam-sk-20-11-2026-result.html" },
  { name: "KARUNYA PLUS KN-650", date: "19.11.2026", link: "KarunyaPlusKN-650Result.html" },
  { name: "DHANALAKSHMI DL-78", date: "18.11.2026", link: "DhanalakshmiDL-78Result.html" },
];

// LIVE = 1st item
document.getElementById("live-box").innerHTML = `
<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:10px;">
<div><b>🔴 LIVE TODAY - ${results[0].name}</b><br><span style="font-size:12px;color:#666;">${results[0].date} - Result Today 3 PM</span></div>
<a href="${results[0].link}" style="background:linear-gradient(90deg,#059669,#0f766e);color:#fff;padding:8px 14px;font-size:12px;font-weight:700;border-radius:8px;text-decoration:none;">View →</a>
</div>`;

// RECENT = 2nd muthal
document.getElementById("recent-box").innerHTML = results.slice(1).map(r => `
<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:10px;"><div><b>${r.name}</b><br><span style="font-size:12px;color:#666;">${r.date} - Result Out</span></div><a href="${r.link}" style="background:linear-gradient(90deg,#059669,#0f766e);color:#fff;padding:8px 14px;font-size:12px;font-weight:700;border-radius:8px;text-decoration:none;white-space:nowrap;">View →</a></div>
`).join("");
