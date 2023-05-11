$(document).ready(function() {
    var table1 = $('#example1').DataTable( {
        responsive: true,
    });

    var table2 = $('#example2').DataTable( {
        responsive: true,
    });

    var table3 = $('#example3').DataTable( {
        responsive: true,
    });

    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (event) {
        var tabID = $(event.target).attr('href');
        if ( tabID === '#tab2' ) {
            table2.columns.adjust().responsive.recalc();
        } else if (tabID === '#tab3') {
            table3.columns.adjust().responsive.recalc();
        }
    });
});