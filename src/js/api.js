import debounce from 'lodash.debounce';

const searchbox = document.querySelector('.searchform > input');
const profileContainer = document.querySelector('.profile-section');

searchbox.addEventListener(
  'input',
  debounce(() => {
    fetchUser(searchbox.value).then(showProfile).catch(showError);
    console.log(searchbox.value);
  }, 500),
);

function showError(error) {
  console.log(error);
  profileContainer.innerHTML = 'Ops!!!';
}

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
  return fetch(`https://api.github.com/users/${login}`).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}

// console.log('!');

// const callback = function () {
//   console.log('after');
//   console.log('2' + '2');
// };

// setTimeout(callback, 2000);

// console.log('2');

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: 'Petya',
//   showName() {
//     console.log(petya.username);
//   },
// };
