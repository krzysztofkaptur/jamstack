const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=update`
  )
  .then(res => res.json())
  .catch(err => console.error(err))

  const markup = repos
    .map(
      repo => `
        <li>
          <a href="${repo.html_url}">${repo.name}</a>
        </li>
      `
    )
    .join('')

  const content = document.querySelector('#content')

  content.innerHTML = `<ul>${markup}</ul>`
}

listRepos('jlengstorf')