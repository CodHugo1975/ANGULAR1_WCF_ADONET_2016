﻿app.directive('showOnRowHover',

function () {
    return {
        link: function (scope, element, attrs) {

            element.closest('tr').bind('mouseenter', function () {
                element.show();
            });
            element.closest('tr').bind('mouseleave', function () {
                element.hide();

                //var contextmenu = element.find('#contextmenu');

                //contextmenu.removeClass('open');

            });

        }
    };
})