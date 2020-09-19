var num = 12;

for (j = 1; j <= num; j++) {
    var tr = document.createElement('tr');

    for (i = 1; i <= num; i++) {
        var td = document.createElement('td');
        var w = 100 / num + '%';
        td.style.width = w;
        if (num > 16) {
            td.style.fontSize = "1.8vw";
        } else if (num > 22) {
            td.style.fontSize = "1.4vw";
        }

        td.innerHTML = i * j;
        tr.appendChild(td);
        document.querySelector('table').appendChild(tr);
    }
}
