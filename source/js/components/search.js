class Search {
  constructor(inputId, items) {
    this.searchInput = document.getElementById(inputId);
    this.items = document.querySelectorAll(items);
    this.search();
  }

  search() {
    // event на поле поиска
    this.searchInput.addEventListener('keyup', () => {
      // получаем информацию с поиска и убираем пробелы
      let value = this.searchInput.value.toLowerCase().trim();

      if (value != '') {
        this.items.forEach(el => {
          // получаем только текст, без тегов.
          // search - ищет подстроку в строке и возвращает номер подстроки / -1 (если нет)
          if (el.innerText.toLowerCase().search(value) == -1) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
          }
        });
      } else {
        this.items.forEach(el => {
          el.classList.remove('hidden');
        });
      }
    });
  }

  // showElement(el) {
  //   el.style.display = 'block';

  //   setTimeout(() => {
  //     el.style.transform = 'scale(1)';
  //   }, 200);
  // }

  // hideElement(el) {
  //   el.style.transform = 'translateX(-1000px)';

  //   setTimeout(() => {
  //     el.style.display = 'none';
  //   }, 200);
  // }
}

export default Search;