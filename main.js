var x = false, output;

function submit() {
    if (x) {
        document.getElementById('source').remove();
        output = '';
    }
    var url = document.getElementById('textInput').value;
    $.getJSON('https://whatever-origin.herokuapp.com/get?url=' + encodeURIComponent(url) + '&callback=?', function (data) {
        output = data.contents;
    });
    
    setTimeout(function () {
        var p = document.createElement('p');
        var body = document.getElementsByTagName('body');
        body[0].appendChild(p);
        p.setAttribute('id', 'source');

        document.getElementById('source').textContent = output;
        
        p.scrollIntoView({behavior: "smooth", block: "start"});
        x = true;
    }, 7500);
}