//header
let needResize = true;
manageHeaderHeight();
window.addEventListener('scroll', manageHeaderHeight);

function manageHeaderHeight() {
  if (window.innerWidth > 767.98) {
    if (window.scrollY > 35) {
      if (needResize) {
        document.querySelector('.header').classList.add('_scroll');
        needResize = false;
        return true;
      }
    } else {
      if (!needResize) {
        document.querySelector('.header').classList.remove('_scroll');
        needResize = true;
        return false;
      }
    }
  }
}
