const modesDiv = document.getElementById("modes");

for (let i = 1; i <= 8; i++) {
  modesDiv.innerHTML += `
    <div class="mode">
      <h3>Mode ${i}</h3>

      <label>Upload Photo:</label><br>
      <input type="file" accept="image/*"><br><br>

      O₂ <input id="o2_${i}" size="4">
      CO <input id="co_${i}" size="4">
      NO <input id="no_${i}" size="4">
      NO₂ <input id="no2_${i}" size="4">
      NOx <input id="nox_${i}" size="4">
      CO₂ <input id="co2_${i}" size="4">
    </div>
  `;
}

function generateTable() {
  let html = `
    <table>
      <tr>
        <th>Mode</th>
        <th>O₂</th>
        <th>CO</th>
        <th>NO</th>
        <th>NO₂</th>
        <th>NOx</th>
        <th>CO₂</th>
      </tr>
  `;

  for (let i = 1; i <= 8; i++) {
    html += `
      <tr>
        <td>${i}</td>
        <td>${document.getElementById("o2_" + i).value}</td>
        <td>${document.getElementById("co_" + i).value}</td>
        <td>${document.getElementById("no_" + i).value}</td>
        <td>${document.getElementById("no2_" + i).value}</td>
        <td>${document.getElementById("nox_" + i).value}</td>
        <td>${document.getElementById("co2_" + i).value}</td>
      </tr>
    `;
  }

  html += "</table>";
  document.getElementById("output").innerHTML = html;
}

function generatePDF() {
  window.print();
}
