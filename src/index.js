let tag = function(tagName, text, children=[], attrs={}) {
    let item = document.createElement(tagName);
    if (text) {
        item.textContent = text;
    }    
    for (let i = 0; i < children.length; ++i) {
        item.appendChild(children[i]);
    }

    for (let attr in attrs) {
        item.setAttribute(attr, attrs[attr])
    }
    return item;
}

//in this code new tags should be written
//order <tag>, text for tag (can be skipped), child tags (can be skipped), attributes (can be skipped)
document.body.insertBefore(
    tag('div', '', [
        tag('h1', 'H1 tag', [], {style: 'color: red'}),
        tag('p', 'P tag', [], {style: 'text-decoration: underline'}),
        tag('ul', '', [
            tag('li', 'first'),
            tag('li', 'second', [], {contenteditable: true}),
            tag('li', 'third'),
        ]),
]), document.querySelector('script'));