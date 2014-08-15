ko.bindingHandlers.date = {
	update	: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var timestamp = valueAccessor();

		var format = allBindings.get('format');

		if (typeof (moment) == undefined) {
			ko.bindingHandlers.text.update(element, function(){
				return '--';
			});
			return;
		}

		if (format == '' || format == undefined) {
			format = 'MM/DD/YYYY hh:mm A';
		}

		var formatedValue = moment(timestamp * 1000).format(format);
		ko.bindingHandlers.text.update(element, function(timestamp, format){
			return formatedValue;
		});
	}
};