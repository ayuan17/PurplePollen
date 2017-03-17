var queryURL = "http://food2fork.com/api/search?key=1f35aa9b21774c9228255e0d0e0844f2&q=shredded%20chicken";

   $.ajax({
     url: queryURL,
     method: 'GET'
   }).done(function(response) {
     console.log(response);
   });