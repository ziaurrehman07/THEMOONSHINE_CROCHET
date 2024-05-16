var Rsgrid= Rs('.collection-list').isotape({
    // option
});
// filter items on button click
Rs('.filter-button-group').on("click", "button", function() {
    var filtervalue = Rs(this).attr('data-filter');
    resetFilterBtns();
    Rs(this)addClass('active-filter-btn');
    Rsgrid.isotape({ filter: filtervalue });
});

var filterBtns = RS('.filter-button-group').find('button');
function resetFilterBtns(){
    filterBtns.each(function(){
        Rs(this).removeClass('active-filter-btn');
    });
}