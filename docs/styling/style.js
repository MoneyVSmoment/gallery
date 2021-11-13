window.onload = function() {
	const header = document.getElementById('header')
	const burger = document.getElementById('burgerBtn')
	const body = document.getElementById('body')

	function scrollReaction() {

		window.onscroll = scrollFunction

		function scrollFunction() {
			if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
				header.classList.add('stick-top')
			} else {
				header.classList.remove('stick-top')
			}
		}

		scrollFunction()
	}

	function burgerMenu() {
		burger.addEventListener('click', event => {
			body.classList.toggle('menu')
			header.classList.toggle('stick-top')
		})
	}

	burgerMenu()
	scrollReaction()
}
