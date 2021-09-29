let tabItem = document.querySelectorAll('nav a.tab-navigation-item');
tabItem.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('a.selected').classList.remove('selected');
        this.classList.add('selected');
        let setAttr = this.getAttribute('data-content');
        console.log(setAttr);
        document.querySelector(`article.tab-content-item.selected`).classList.remove('selected');
        document.querySelector(`article.tab-content-item[data-content="${setAttr}"]`).classList.add('selected');
    })
})


