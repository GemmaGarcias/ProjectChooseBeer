(function() {
    $('#search').on('submit', function(e) {
        e.preventDefault()
        const query = $(this).find('input').val()

        BEER_SERVICE.searchBrand(query)
            .then(function(oData) {
                console.log(oData)
                var contentbeerNames = '<option disabled selected>Select...</option>'
                console.log(oData)

                oData.forEach(function(oBeerNames) {
                    contentbeerNames += '<option value=' + oBeerNames.id + '>'
                    contentbeerNames += oBeerNames.name
                    contentbeerNames += '</option>'
                })
                $('#beernames select').html(contentbeerNames)
                $('#trainspot').addClass('hidden')

            })
    })

    $('#beernames select').on('change', function() {
        const choosenBeer = $(this).val()

        console.log(choosenBeer)
        BEER_SERVICE.infoBrand(choosenBeer)
            .then(function(oData) {
                console.log(oData)
                var nameBeer = oData.name
                var descriptionBeer = oData.style.description
                var imgDefault = 'img/beer.jpg'
                var finalImage = oData.labels && oData.labels.medium || imgDefault
                console.log(finalImage)

                $('.infoBeer h3').text(nameBeer)
                $('.infoBeer p').text(descriptionBeer)
                $('#trainspot').removeClass('hidden')
                $('#trainspot .logoImage').attr('src', finalImage)

            })
    })

})()