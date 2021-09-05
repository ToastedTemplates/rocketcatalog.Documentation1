
function activatedocumentready(engineUrlWithProtocol) {

    $('.clearsearch').unbind("click");
    $('.clearsearch').click(function () {
        $('#searchcategoryid').val('0');
        $('#searchtext').val('');
        $('.dosearch').trigger('click');
        return false; // prevent the button click from happening
    });

    if ($('#searchtext').val() !== '') {
        $('.dosearch').hide();
        $('.clearsearch').show();
    }

    $('.actionentrykey').unbind('keypress');
    $('.actionentrykey').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $('#searchcategoryid').val('0');
            $('.dosearch').trigger('click');
            return false; // prevent the button click from happening
        }
    });

    $('.actionentrykey').focus();

    // move cursor to end of line
    var tmpStr = $('.actionentrykey').val();
    $('.actionentrykey').val('');
    $('.actionentrykey').val(tmpStr);

    //  change color of panel, s we show it has a selection
    if (tmpStr != '') {
        $('#searchtext').addClass('w3-border-orange');
    }

}




