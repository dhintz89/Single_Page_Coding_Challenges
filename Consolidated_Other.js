// Significant commits that didn't count because I used a non-master branch on my own project:

const additions = [
  {repo: "VisualStore", message: "change gemfile & gemfile.lock, create_users migration, and devise initializer to remove devise-jwt", link: "https://github.com/dhintz89/visual_store/commit/67c84b8b409d730f0105cd1cc0d1890dde8f306b"}
]

function postCommits() {
  additions.forEach(c => {
  let addition = document.createElement("div");
  addition.className = "commit";
  addition.innerHTML = `
    <h2>Repository: ${c.repo}</h2>
    <p>Commit Message: ${c.message} <a href=${c.link}>Link</a></p>`;
    document.addChildElement(addition);
  });
};
