"use strict";

// Делегирование клика и следить куда мы кликнули,
document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;

	// если мы кликнули на бургер или его дочерний элемент,
	if (targetItem.closest('.icon-menu')) {
		// тогда мы обращаемся к HTML (documentElement) и оперируем с классами (toggle),
		// т.е. добавляем или убираем класс menu-open
		// Далее идём в CSS-стили и описываем menu-open
		document.documentElement.classList.toggle('menu-open');
	}
}
