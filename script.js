const data = [];

for (let i = 1; i <= 8; i++) {
  document.getElementById("modes").innerHTML += `
    <div class="mode">
      <h3>Mode ${i}</h3>
      <input type="file" accept="image/*">
      <br><br>
      O₂ <input id="o2${i}" size="4">
      CO <input id="co${i}" size="4">
      NO <input id="no${i}" size="4">
      NO₂ <input id="no2${i}" size="4">
      NOx <input id="nox${i}" size="4">
      CO₂ <input id="co2${i}" size="4">
    </div>
  `;
}

function generateTable() {
  data.length = 0;
  for (let i = 1; i <= 8; i++) {
    data.push({
      mode: i,
      o2: o2${i}.value,
      co: co${i}.value,
      no: no${i}.value,
      no2: no2${i}.value,
      nox: nox${i}.value,
      co2: co2${i}.value
    });
  }

  let html = `
    <table>
      <tr>
        <th>Mode</th><th>O₂</th><th>CO</th><th>NO</th>
        <th>NO₂</th><th>NOx</th><th>CO₂</th>
      </tr>
  `;

  data.forEach(r => {
    html += `
      <tr>
        <td>${r.mode}</td>
        <td>${r.o2}</td>
        <td>${r.co}</td>
        <td>${r.no}</td>
        <td>${r.no2}</td>
        <td>${r.nox}</td>
        <td>${r.co2}</td>
      </tr>
    `;
  });

  html += "</table>";
  document.getElementById("output").innerHTML = html;
}

function generatePDF() {
  window.print();
}
