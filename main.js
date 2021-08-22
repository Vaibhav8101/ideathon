console.log("Hello");
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
const searchDisease = async searchText => {

    const res = await fetch('../json/data.json');
    // let dat=JSON.stringify(res);
    const disease = await res.json();
    // console.log(disease);
    let matches = disease.filter(dis => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return dis.Dise.match(regex);
    });
    console.log(matches);
    if (searchText.length == 0) {
        matches = [];
        matchList.innerHTML = [];
    }
    outputHtml(matches);
};

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="list-group" 
        margin-right: 117px;">
  <a href="template.html" class="list-group-item list-group-item-action">${match.Dise}</a>
</div>
        `).join('');
        matchList.innerHTML = html;
    }
}
search.addEventListener('input', () => searchDisease(search.value));