define([], function() {
    const createDD = (list, fun) => list.reduce(createUl, document.createElement('ul'))
    const createUl = (ulEl, item) => {
        let li = createEl('li', getName(item.name))
        li.item = item.name
        ulEl.appendChild(li)
        return ulEl
    }
    const getName = name => `${name.title} ${name.first} ${name.last}`
    const createEl = (el, text) => {
        let $ele = document.createElement(el),
            textNode = document.createTextNode(text)
        $ele.appendChild(textNode)
        return $ele
    }
    const search = (v, n) => (n.title.indexOf(v) > -1 || n.first.indexOf(v) > -1 || n.last.indexOf(v) > -1)
    return { createDD, getName, createEl, search }
});