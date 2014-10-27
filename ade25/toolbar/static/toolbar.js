'use strict';
(function ($) {
    $(document).ready(function () {
        if ($('body').hasClass('lt-ie7')) {
            return;
        }
        $('a.popoverLogin').prepOverlay(
            {
                subtype: 'ajax',
                filter: common_content_filter,
                formselector: 'form#login_form',
                noform: 'redirect',
                redirect: function (overlay, responseText) {
                    var href = location.href;
                    if (href.search(/pwreset_finish$/) >= 0) {
                        return href.slice(0, href.length-14) + 'logged_in';
                    } else {
                        // look to see if there has been a server redirect
                        var newTarget = $("<div>").html(responseText).find("base").attr("href"); 
                        if ($.trim(newTarget) && newTarget !== location.href) { 
                            return newTarget; 
                        }
                        // if not, simply reload
                        return href;
                    }
                }
            }
        );
    });
}(jQuery));