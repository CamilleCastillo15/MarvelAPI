$(window).on('load', function () {
    $.tablesorter.themes.bootstrap = {
            // these classes are added to the table. To see other table classes available,
            // look here: http://getbootstrap.com/css/#tables
            table        : '',
            caption      : 'caption',
            // header class names
            header       : '',
            sortNone     : '',
            sortAsc      : '',
            sortDesc     : '',
            active       : 'colonne_tri', // applied when column is sorted
            hover        : '', // custom css required - a defined bootstrap style may not override other classes
            // icon class names
            icons        : '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
            iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
            iconSortAsc  : 'glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
            iconSortDesc : 'glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
            filterRow    : '', // filter row class; use widgetOptions.filter_cssFilter for the input/select element
            footerRow    : '',
            footerCells  : '',
            even         : '', // even row zebra striping
            odd          : ''  // odd row zebra striping
        };

        var $table = $('#myTable').tablesorter({
            theme : "bootstrap",
            widthFixed: true,
            headerTemplate : '{content} {icon}',
            dateFormat : "ddmmyyyy",
            sortList: [[7,0]],
            // debug : true,
            headers: {
                0: {sorter: true},
                1: {sorter: true}
            },
            widgets: ["uitheme", "filter"],
            widgetOptions: {
                filter_external : '.search',

                filter_columnFilters: false,
                filter_saveFilters : false,
                filter_reset: '.reset'
            }
        })
        .tablesorterPager({
            container: $('#pager_tab_inscriptions'),
            // output string - default is '{page}/{totalPages}'; possible variables: {page}, {totalPages}, {startRow}, {endRow} and {totalRows}
            output: '{startRow} - {endRow} / {filteredRows}',
            size: 5,
            fixedHeight: false
        })
});

