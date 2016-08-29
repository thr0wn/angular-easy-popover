'use strict';

angular.module('angular-easy-popover', []).directive('thrPopover', [function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: false,
        scope: {
            bindTo: '@',
            closeOnClick: '@',
            side: '@'
        },
        template: '<div class="popover-container">\n                <ng-transclude></ng-transclude>\n            </div>',
        link: function link(scope, element) {
            var isOpen = false;
            var container = element.find('.popover-container');
            scope.closeOnClick = typeof scope.closeOnClick !== 'undefined' ? scope.closeOnClick : true;

            element.closest('thr-popover').show();

            angular.element(document).click(function (e) {
                var bind = angular.element(scope.bindTo);
                var isInnerClick = bind.is(e.target) || bind.has(e.target).length;
                var isOuterClick = !container.is(e.target) && container.has(e.target).length === 0 && isOpen;
                if (isInnerClick) {
                    toggle(bind);
                } else if (isOuterClick || scope.closeOnClick) {
                    container.slideUp('fast');
                    isOpen = false;
                }
            });

            var toggle = function toggle(bind) {
                if (isOpen) {
                    container.slideUp('fast');
                } else {
                    var offset = calcPosition(bind);
                    container.css({ top: offset.top, left: offset.left });
                    container.slideDown('fast');
                }
                isOpen = !isOpen;
            };

            var calcPosition = function calcPosition(elem) {
                var position = angular.copy(elem.position());
                if (scope.side !== 'right') {
                    position.left += elem.outerWidth() - container.outerWidth();
                }
                position.top += elem.outerHeight() + 1;
                return position;
            };
        }
    };
}]);