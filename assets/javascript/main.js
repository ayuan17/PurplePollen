var queryURL = "http://food2fork.com/api/search?key=ff84bc9ded705856321486ca38126b53&q=shredded%20chicken";

   $.ajax({
     url: queryURL,
     method: 'GET',
     crossDomain: true,
     dataType: 'json',
     beforeSend: function(request) {
        request.setRequestHeader('Access-Control-Allow-Origin', 'x-request-head');
        console.log(request);
      },
   }).done(function(response) {
     console.log(response);
   });

