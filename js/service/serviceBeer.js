(function () {
    const urlfirstSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q='
    const urlGetBrand = 'https://quiet-inlet-67115.herokuapp.com/api/beer/<%U_BRAND%>'

    function searchBrand (query) {
        const urlSearch = urlfirstSearch + query
        return $.ajax({
            url: urlSearch,
        })
    }
    function infoBrand (choosenBeer) {
        var urlBrand = urlGetBrand.replace('<%U_BRAND%>', choosenBeer)
        return $.ajax({
            url: urlBrand,
        })
    }

    window.BEER_SERVICE = { searchBrand, infoBrand }

})()