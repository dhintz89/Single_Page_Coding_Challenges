// Significant commits that didn't count because I used a non-master branch on my own project:

const additions = [
  {repo: "VisualStore", message: "change gemfile & gemfile.lock, create_users migration, and devise initializer to remove devise-jwt", link: "https://github.com/dhintz89/visual_store/commit/67c84b8b409d730f0105cd1cc0d1890dde8f306b"},
  {repo: "VisualStore", message: "update routes and User to remove devise-jwt related content", link: "https://github.com/dhintz89/visual_store/commit/e0624c535a4e42254b8c5a762e7c4127ea3d3387"},
  {repo: "VisualStore", message: "remove devise-jwt code and replace with custom jwt functionality in Application Controller", link: "https://github.com/dhintz89/visual_store/commit/3ed84ba7df93df8653e836959c23b5dc3bd2e895"},
  {repo: "VisualStore", message: "remove devise-jwt code and replace with customized devise for Registration Controller", link: "https://github.com/dhintz89/visual_store/commit/295554e9943cbca9f6deffe9bc0f370c73b19da3"}
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
