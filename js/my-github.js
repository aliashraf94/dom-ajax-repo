// Write code here to communicate with Github
URL = "https://api.github.com/users/aliashraf94/repos";

let getRepos = () => {
  fetch(URL)
    .then(response => response.json())
    .then(reposList => renderRepos(reposList))
    .catch(error => console.log(error));
};

let renderRepos = reposList => {
  reposList.forEach(repo => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    let ul = document.querySelector("#repos-list");
    li.appendChild(link);
    ul.appendChild(li);
    li.innerText = repo.full_name;
    link.setAttribute("href", repo.html_url);
    // let x = document.querySelector('#repos-count')
    // x.innerText = reposList.length
    countRepos(reposList);
  });
};

let countRepos = gitRepos => {
  let x = document.querySelector("#repos-count");
  x.innerText = gitRepos.length;
};

getRepos();
