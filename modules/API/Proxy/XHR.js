module.exports = {

    
    load(url, done) {
        let xhr = new XMLHttpRequest();

        xhr.open('get', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }

            done(xhr);
        };

        xhr.send(null);

    },
};