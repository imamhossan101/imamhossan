document.getElementById("load-btn").addEventListener("click", () => {
  fetch("https://brianobruno.github.io/cats.json")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("cat-image").src = data.catPhoto;

      data.facts.sort((a, b) => a.factId - b.facId);

      const tbody = document.getElementById("facts-table-body");
      tbody.innerHTML = "";

      data.facts.forEach((item) => {
        tbody.innerHTML += `
        <tr>
        <td>${item.factId}</td>
        <td>${item.fact}</td>
        </tr>
        `;
      });
    });
});
