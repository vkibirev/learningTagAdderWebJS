let tag = function(tagName, text, children=[]) {
    let item = document.createElement(tagName);
    if (text) {
        item.textContent = text;
    }    
    for (let i = 0; i < children.length; ++i) {
        item.appendChild(children[i]);
    }
    return item;
}

document.body.insertBefore(
    tag('div', '', [
        tag('h1', 'H1 tag'),
        tag('p', 'P tag'),
        tag('ul', '', [
            tag('li', 'first'),
            tag('li', 'second'),
            tag('li', 'third'),
        ]),
]), document.querySelector('script'));