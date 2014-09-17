function issueFunction(container, templateID, model) {
    var templateFunction = _.template($('#' + templateID).text());
    var renderTemplate = templateFunction(model);
    $(container).append(renderTemplate);
}

$.ajax("https://api.github.com/issues", {
    type: 'GET',
    datatype: 'json'
}).done(function(issues) {
    _.each(issues, function(issue) {
    issueFunction('.issues-list', 'template-list', issue);
    });

});

setInterval (function(){
	$(document).on('click', '.link', function(e){
e.preventDefault();
  $('.stuff').empty();
    var title = $(this).text();
	    $.ajax({
	    type: 'GET',
	    datatype: 'json',
	    url: $(this).attr('data-id')
})

.done(function(issues) {
	    	console.log(issues);

      _.each(issues, function(issue) {
	     issue.commentTitle = title;
	     issueFunction('.context', 'descript', issue);
        	});
    	});
	});
}, 10000);
