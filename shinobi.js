function Shinobi() { }

Shinobi.prototype.selectEl = function(el) {
    return document.querySelector(el);
}

Shinobi.prototype.innerHTML = function(el, html) {
    return el.innerHTML = html;
}

Shinobi.prototype.createEl = function(el) {
    return document.createElement(el);
}

Shinobi.prototype.appendEl = function(el, toAppend) {
    return el.appendChild(toAppend);
}

Shinobi.prototype.click = function(el, callback) {
    el.addEventListener('click', callback);
}

Shinobi.prototype.fullEl = function(el, html, appendTo) {
    const newEl = document.createElement(el);
    newEl.innerHTML = html;
    appendTo.appendChild(newEl);
    return newEl;
}

Shinobi.prototype.checkLocalStorage = function(dataName, setEmpty) {
    if (!JSON.parse(localStorage.getItem(dataName))) {
        this.setLocalStorage(dataName, []);
        return false;
    } else {
        return true;        
    };
}

Shinobi.prototype.setLocalStorage = function(dataName , data) {
    localStorage.setItem(dataName, JSON.stringify(data));
}

Shinobi.prototype.getLocalStorage = function(dataName) {
    return JSON.parse(localStorage.getItem(dataName));
}

Shinobi.prototype.createUl = function(listData) {
    const list = this.createEl('ul');
    listData.forEach(function(data) {
        this.fullEl('li', data, list);
    }, this);

    return list;
}

Shinobi.prototype.createTrWithTd = function(data) {
    const row = this.createEl('tr');
    data.forEach(function(data) {
        this.fullEl('td', data, row);
    }, this);

    return row;
}
