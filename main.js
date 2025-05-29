let tabNames = [
	'game',
	'inning',
	'teams',
	'player',
	'log'
];

const tabElems = {};

tabNames.forEach(name => {
	tabElems[name] = document.getElementById('tab-button-' + name);
});

const iframeElems = {};

tabNames.forEach(name => {
	iframeElems[name] = document.getElementById('iframe-' + name);
});

const tabToIframe = {};

tabNames.forEach(name => {
	tabToIframe[tabElems[name].id] = iframeElems[name];
});

function selectTab(tabElem) {
	Object.values(tabElems).forEach(elem => {
		elem.classList.remove('current-tab');
	});
	tabElem.classList.add('current-tab');

	Object.values(iframeElems).forEach(iframe => {
		iframe.style.display = 'none';
	});

	tabToIframe[tabElem.id].style.display = 'block';
}

Object.values(tabElems).forEach(elem => {
	elem.addEventListener('click', event => {
		selectTab(event.target);
	});
});

selectTab(tabElems[tabNames[3]]);














function newGame() {
	alert('Are you sure you\'d like to start a new game?');
}