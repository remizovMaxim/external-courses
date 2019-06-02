var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
//use that
var cardsBlock = document.getElementById('main');
getJSON('https://rsu-library-api.herokuapp.com/books',
    function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            for(var i=0;i<data.length;i++){
                cardsBlock.innerHTML = cardsBlock.innerHTML +
                    "<div id='" + data[i].id +
                    "' class=\"main-card\" data-categories='" +
                    data[i].categories+"'>" +
                    "<img src=\"" +
                    data[i].image_url +
                    "\" alt=\"\">" +
                    "<p id=\"card-book\">"+
                    data[i].title + "</p>"+
                    "<p id=\"card-author\">by "+
                    data[i].author.firstName+" "+
                    data[i].author.lastName+
                    "</p>"+
                    "<div id=\"rating"+data[i].id+"\" class=\"card-rating\"" +
                    "data-rating = \"" + data[i].rating+ "\">" +
                    "</div>"+
                    "</div>";
                renderRating(data[i].id);
            }
        }
    }
);
function renderRating(num) {
    ratingBlock = document.getElementById('rating'+num);
    rat = ratingBlock.getAttribute('data-rating');
    for( i=1;i<=5;i++){
        if(rat >= 1){
            rat--;
            ratingBlock.innerHTML = ratingBlock.innerHTML + "<i class=\"fas fa-star\" data-rat-num="+i+"></i>"
        }else{
            ratingBlock.innerHTML = ratingBlock.innerHTML + "<i class=\"far fa-star\" data-rat-num="+i+"></i>"
        }
    }
}
//filters buttons aside
myFilters("must_read");
myFilters("best");
myFilters("classic");
myFilters("non_fiction");
function myFilters(myFilter) {
    var filt = document.getElementById(myFilter);
    filt.onclick = function () {
        getJSON('https://rsu-library-api.herokuapp.com/books',
            function(err, data) {
                if (err !== null) {
                    alert('Something went wrong: ' + err);
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var book = document.getElementById(data[i].id);
                        book.style.display = 'block';
                        var cat = book.getAttribute('data-categories');
                        var arr = cat.split(',');
                        var res = arr.some(function (value) {
                            return value === myFilter;
                        });
                        if(!res){
                            book.style.display = 'none';
                        }
                    }
                }
            }
        )
    }
}
//filters buttons top line
var allBooks = document.getElementById('all_books');
allBooks.onclick = function() {
    getJSON('https://rsu-library-api.herokuapp.com/books',
        function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                for (var i = 0; i < data.length; i++) {
                    var book = document.getElementById(data[i].id);
                    book.style.display = 'block';
                }
            }
        }
    )
}




