angular
    .module('angular-easy-popover', [])
    .directive('thrPopover', [
        () => ({
            restrict: 'E',
            transclude: true,
            replace: false,
            scope: {
                bindTo: '@',
                closeOnClick: '@',
                side: '@'
            },
            template:
            `<div class="popover-container">
                <div ng-transclude></div>
            </div>`,
            link: (scope, element) => {
                let isOpen = false;
                const container = element.find('.popover-container');
                scope.closeOnClick = typeof scope.closeOnClick !== 'undefined' ? scope.closeOnClick : true;

                element.closest('thr-popover').show();

                angular.element(document).click(e => {
                    const bind = angular.element(scope.bindTo);
                    const isInnerClick = bind.is(e.target) || bind.has(e.target).length;
                    const isOuterClick = !container.is(e.target) &&
                        container.has(e.target).length === 0 && isOpen;
                    if (isInnerClick) {
                        toggle(bind);
                    } else if (isOuterClick || scope.closeOnClick) {
                        container.slideUp('fast');
                        isOpen = false;
                    }
                });

                const toggle = bind => {
                    if (isOpen) {
                        container.slideUp('fast');
                    } else {
                        var offset = calcPosition(bind);
                        container.css({ top: offset.top, left: offset.left });
                        container.slideDown('fast');
                    }
                    isOpen = !isOpen;
                };

                const calcPosition = elem => {
                    var position = angular.copy(elem.position());
                    if (scope.side !== 'right') {
                        position.left += elem.outerWidth() - container.outerWidth();
                    }
                    position.top += elem.outerHeight() + 1;
                    return position;
                };
            }
        })
    ]);
