const searchbox = document.querySelector('.searchform');
const profileContainer = document.querySelector('.profile-section');

searchbox.addEventListener('submit', e => {
  e.preventDefault();
  const login = searchbox.elements.login.value;
  fetchUser(login).then(showProfile);
});

function showProfile({
  public_repos,
  bio,
  name,
  avatar_url,
  followers,
  following,
}) {
  profileContainer.innerHTML = `<div class="profile">
  <img src="${avatar_url}" class="avatar" alt="user avatar" width="120" height="120" />
  <div class="content">
  ${name ? `<h1 class="name">${name}</h1>` : ''}
  ${bio ? ` <p class="bio">${bio}</p>` : ''}
   
    <ul>
      <li>Follovers: <span>${followers}</span></li>
      <li>Folloving: <span>${following}</span></li>
      <li>Repos: <span>${public_repos}</span></li>
    </ul>
  </div>
</div>`;
}

function fetchUser(login) {
  return fetch(`https://api.github.com/users/${login}`).then(response =>
    response.json(),
  );
}
