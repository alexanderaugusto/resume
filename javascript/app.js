function showLeftMenu() {
  document.getElementById('cv-container').classList.add('menu--open')
}

function hideLeftMenu() {
  document.getElementById('cv-container').classList.remove('menu--open')
}

function applyLightTheme() {
  document.getElementById('bg-container').classList.add('theme--light')
  document.getElementById('bg-container').classList.remove('theme--dark')
  document.getElementById('btn-theme-home').innerHTML = '<i class="fas fa-moon"></i>'
  document.getElementById('btn-theme-menu').innerHTML = '<i class="fas fa-moon"></i>'
}

function applyDarkTheme() {
  document.getElementById('bg-container').classList.add('theme--dark')
  document.getElementById('bg-container').classList.remove('theme--light')
  document.getElementById('btn-theme-home').innerHTML = '<i class="fas fa-sun"></i>'
  document.getElementById('btn-theme-menu').innerHTML = '<i class="fas fa-sun"></i>'
}

function changeTheme() {
  if (document.getElementById('bg-container').classList.contains('theme--light')) {
    applyDarkTheme()
  } else {
    applyLightTheme()
  }
}