// Converted jQuery functions to vanilla JS
var sidebarOpen = function() {};
var sidebarClose = function() {};

document.addEventListener('DOMContentLoaded', function() {
    // Variables to store touch start coordinates and time
    var startX, startY, startT;

    // Thresholds for detecting gestures
    var swipeThreshold = 100; // Minimum distance for a swipe gesture
    var swipeTimeThreshold = 500; // Maximum time allowed for a swipe gesture
    var tapTimeThreshold = 150; // Maximum time for a tap (no swipe)
    var longTouchTime = 500; // Minimum time for a long touch (no swipe)
    var tapMoveThreshold = 10; // Maximum distance finger may move to still be considered a tap
    var isSwipe = false; // To determine if movement is a swipe
    var directionDetermined = false; // To determine y or x scroll
    var isHorizontal = false;
    var touchStartedOnOverride = false;

    // elements
    var main_screen = document.querySelector('main');
    var sidebar_left = document.getElementById('sidebar-left');
    var sidebar_right = document.getElementById('sidebar-right');

    // sidebar width and restraints
    var sidebarWidth = sidebar_left.offsetWidth;
    var max_transform_left = -sidebarWidth;
    var max_transform_right = sidebarWidth; 
    window.addEventListener('resize', function() {
        sidebarWidth = sidebar_left.offsetWidth;
        max_transform_left = -sidebarWidth;
        max_transform_right = sidebarWidth;    
    });

    // Function to handle touch start
    function onTouchStart(event) {
        if (!touchStartedOnOverride) {
            touchStartedOnOverride = event.target.closest('.touch-override') !== null;
            
            var touchObj = event.touches[0];
            startX = touchObj.pageX;
            startY = touchObj.pageY;
            startT = new Date().getTime(); // Record time when finger first makes contact with surface
            isSwipe = false; // Reset swipe status
            directionDetermined = false; // Reset direction status

            // update element positions
            var main_offset = main_screen.getBoundingClientRect();
            var main_offset_viewport = {
                top: main_offset.top - window.pageYOffset,
                left: main_offset.left - window.pageXOffset
            };
        }
    }

    // Function to handle touch move
    function onTouchMove(event) {
        if (touchStartedOnOverride){
            return; // Allow default behavior on touch-override elements
        } 
        
        var touchObj = event.touches[0];
        var distX = touchObj.pageX - startX; // Horizontal distance
        var distY = touchObj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        var elapsedTime = new Date().getTime() - startT; // Time elapsed
        var velocityX = distX / elapsedTime; // Velocity of swipe

        if (Math.abs(velocityX) > 0.3 && Math.abs(distX) > 30) { // Check if the horizontal velocity is above a threshold
            isSwipe = true;
        }

        // If we haven't determined the direction yet
        var moveX = event.touches[0].pageX;
        var moveY = event.touches[0].pageY;
        var diffX = moveX - startX;
        var diffY = moveY - startY;        
        if (!directionDetermined) {
            directionDetermined = true;
            isHorizontal = Math.abs(diffX) > Math.abs(diffY);
        }
        if(isHorizontal){
            event.preventDefault();
            sidebarMovement(distX, distY);
        }
    }

    // Function to handle touch end
    function onTouchEnd(event) {
        if (touchStartedOnOverride) {
            touchStartedOnOverride = false; // Reset the flag
            return; // Allow default behavior on touch-override elements
        }

        var touchObj = event.changedTouches[0];
        var distX = touchObj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        var distY = touchObj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        var elapsedTime = new Date().getTime() - startT; // get time elapsed
        
        var main_offset = main_screen.getBoundingClientRect();
        var main_offset_viewport = {
            top: main_offset.top - window.pageYOffset,
            left: main_offset.left - window.pageXOffset
        };

        // only snap sidebars if slow scroll open/close
        if(directionDetermined && isHorizontal){
            // Snap sidebars to where they should be ()
            if (main_offset.left > 0 && main_offset.left <= sidebarWidth) {
                // Left sidebar logic
                if (Math.abs(main_offset.left) >= (sidebarWidth/2)) { // Closer to -sidebarWidth
                    console.log("Left sidebar is closer to being open");
                    sidebarOpen('left');
                } else { // Closer to 0
                    console.log("Left sidebar is closer to being closed");
                    sidebarClose('left');
                }
            } else if (main_offset.left <= 0 && main_offset.left >= -sidebarWidth) {
                // Right sidebar logic
                if (main_offset.left <= -(sidebarWidth/2)) { // Closer to sidebarWidth
                    console.log("Right sidebar is closer to being open");
                    sidebarOpen('right');
                    
                } else { // Closer to 0
                    console.log("Right sidebar is closer to being closed");
                    sidebarClose('right');
                }
            }
        }        

        // Check if gesture is a swipe based on time and distance
        if (isSwipe && elapsedTime <= swipeTimeThreshold) {
            if (Math.abs(distX) >= swipeThreshold && Math.abs(distY) <= swipeThreshold) {
                if (distX < 0) {
                    // Swipe Left
                    if(main_offset.left > 0){
                        sidebarClose('left');
                    } else {
                        sidebarOpen('right');
                    }
                } else {
                    // Swipe Right
                    if(main_offset.left < 0){
                        sidebarClose('right');
                    } else {
                        sidebarOpen('left');
                    }
                }
            }
            if (Math.abs(distY) >= swipeThreshold && Math.abs(distX) <= swipeThreshold) {
                if (distY < 0) {
                    // Swipe Up
                    sheetClose('top');
                } else {
                    // Swipe Down
                }
            }
        } else if (!isSwipe && elapsedTime <= tapTimeThreshold && Math.abs(distX) <= tapMoveThreshold && Math.abs(distY) <= tapMoveThreshold) {
            // Tap detected
        } else if (!isSwipe && elapsedTime >= longTouchTime) {
            // Long touch detected
        }

        if(!isSwipe){
            // only snap sidebars if slow scroll open/close
            if (main_offset.left > 0 && main_offset.left <= sidebarWidth) {
                // Left sidebar logic
                if (Math.abs(main_offset.left) >= (sidebarWidth/2)) { // Closer to -sidebarWidth
                    console.log("Left sidebar is closer to being open");
                    sidebarOpen('left');
                } else { // Closer to 0
                    console.log("Left sidebar is closer to being closed");
                    sidebarClose('left');
                }
            } else if (main_offset.left <= 0 && main_offset.left >= -sidebarWidth) {
                // Right sidebar logic
                if (main_offset.left <= -(sidebarWidth/2)) { // Closer to sidebarWidth
                    console.log("Right sidebar is closer to being open");
                    sidebarOpen('right');
                    
                } else { // Closer to 0
                    console.log("Right sidebar is closer to being closed");
                    sidebarClose('right');
                }
            }
        }
    }

    // Binding the event listeners to the body
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);

    function sidebarMovement(distX, distY){
        var main_offset = main_screen.getBoundingClientRect();
        var position_calc = main_offset.left + distX; // current position + drag amount
        
        // maximum slide constraints
        if(position_calc < max_transform_left){
            position_calc = max_transform_left;
        }
        if(position_calc > max_transform_right){
            position_calc = max_transform_right;
        }

        // slide main screen
        main_screen.style.transform = 'translateX(' + position_calc + 'px)';
        
        // slide sidebars in tandem with main view
        var sidebar_left_position = position_calc - sidebarWidth;
        var sidebar_right_position = position_calc + sidebarWidth;
        sidebar_left.style.transform = 'translate3d(' + sidebar_left_position + 'px, 0, 0)';
        sidebar_right.style.transform = 'translate3d(' + sidebar_right_position + 'px, 0, 0)';

        updateOpacities();
    }

    function sidebarStatus(){
        var main_offset = main_screen.getBoundingClientRect();
        var main_offset_viewport = {
            top: main_offset.top - window.pageYOffset,
            left: main_offset.left - window.pageXOffset
        };
        if(main_offset.left > 0){
            return 'left'
        }
        else if(main_offset.left < 0){
            return 'right';
        }
        else if(main_offset.left == 0){
            return 'none';
        }
    }

    function updateOpacities() {
        var main_offset = main_screen.getBoundingClientRect();
        var main_offset_viewport = {
            top: main_offset.top - window.pageYOffset,
            left: main_offset.left - window.pageXOffset
        };
            
        var distanceFromCenter = Math.abs(main_offset_viewport.left);
        var percentage = distanceFromCenter / sidebarWidth;
        
        var mainOpacity = 1 - (0.8 * percentage);
        var sidebarOpacity = 0.2 + (0.8 * percentage);
        
        main_screen.style.opacity = mainOpacity;
        sidebar_left.style.opacity = sidebarOpacity;
        sidebar_right.style.opacity = sidebarOpacity;
    }

    sidebarOpen = function(side){
        sheetClose();
        
        if(side == 'left'){
            sidebar_left.style.transform = 'translate3d(0px, 0, 0)';
            sidebar_left.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            sidebar_left.style.opacity = '1';

            sidebar_right.style.transform = 'translate3d('+sidebarWidth+'px, 0, 0)';
            sidebar_right.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            sidebar_right.style.opacity = '0.2';

            main_screen.style.transform = 'translate3d('+sidebarWidth+'px, 0, 0)';
            main_screen.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            main_screen.style.opacity = '0.2';
            main_screen.style.pointerEvents = 'none';
        }
        else if(side == 'right'){
            sidebar_left.style.transform = 'translate3d(-'+sidebarWidth+'px, 0, 0)';
            sidebar_left.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            sidebar_left.style.opacity = '0.2';

            sidebar_right.style.transform = 'translate3d(0px, 0, 0)';
            sidebar_right.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            sidebar_right.style.opacity = '1';

            main_screen.style.transform = 'translate3d(-'+sidebarWidth+'px, 0, 0)';
            main_screen.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
            main_screen.style.opacity = '0.2';
            main_screen.style.pointerEvents = 'none';
        }        
    }

    sidebarClose = function (side){
        sidebar_left.style.transform = 'translate3d(-'+sidebarWidth+'px, 0, 0)';
        sidebar_left.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
        sidebar_left.style.opacity = '0.2';

        sidebar_right.style.transform = 'translate3d('+sidebarWidth+'px, 0, 0)';
        sidebar_right.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
        sidebar_right.style.opacity = '0.2';

        main_screen.style.transform = 'translate3d(0px, 0, 0)';
        main_screen.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
        main_screen.style.opacity = '1';
        main_screen.style.pointerEvents = 'auto';
    }
    
    // Remove the transition animations once the transition is complete
    main_screen.addEventListener('transitionend', function() {
        sidebar_right.style.transition = '';
        sidebar_left.style.transition = '';
        main_screen.style.transition = '';
    });     

    // tap background to close sidebar
    document.addEventListener('click', function(event) {
        var sidebar_status = sidebarStatus();
        if(sidebar_status != 'none'){ // check if the sidebar is open
            // don't close the sidebar if <main> opacity is 1
            // because this means we're looking at the desktop version
            if (getComputedStyle(main_screen).opacity < 1) {
                // Check if clicked outside of .sidebar and not on the menu button
                if (!event.target.closest('.sidebar')) {
                    event.preventDefault(); // Prevent default action of the clicked element
                    event.stopPropagation(); // Stop the event from bubbling up
                    sidebarClose('left');
                    sidebarClose('right');
                }
            }
        }
    });

    // open menu triggers
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href="#sidebar-left"]')) {
            e.preventDefault();
            var sidebar_status = sidebarStatus();
            if(sidebar_status != 'none'){
                sidebarClose('left');
            } else {
                sidebarOpen('left');
            }
        } else if (e.target.matches('a[href="#sidebar-right"]')) {
            e.preventDefault();
            if(sidebar_status != 'none'){
                sidebarClose('right');
            } else {
                sidebarOpen('right');
            }
        }
    });

    function disableMain(){
        main_screen.style.touchEvents = 'none';
    }
    disableMain();

    function sheetMovement(distX, distY){
        var main_offset = main_screen.getBoundingClientRect();
        var position_calc = main_offset.left + distX; // current position + drag amount
        
        // maximum slide constraints
        if(position_calc < max_transform_left){
            position_calc = max_transform_left;
        }
        if(position_calc > max_transform_right){
            position_calc = max_transform_right;
        }

        // slide main screen
        main_screen.style.transform = 'translateX(' + position_calc + 'px)';
        
        // slide sidebars in tandem with main view
        var sheet_top_position = '';

        var sidebar_left_position = position_calc - sidebarWidth;
        var sidebar_right_position = position_calc + sidebarWidth;
        sidebar_left.style.transform = 'translate3d(' + sidebar_left_position + 'px, 0, 0)';
        sidebar_right.style.transform = 'translate3d(' + sidebar_right_position + 'px, 0, 0)';
    }

    function sheetStatus(){ 
        var sheetStatus = 'none';
        document.querySelectorAll('.sheet').forEach(function(sheet) {
            if (isElementInView(sheet)) {
                sheetStatus = 'visible';
            } else {
                sheetStatus = 'none';
            }
        });
        return sheetStatus;
    }

    function isElementInView(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }    

    function sheetClose(position){
        var topSheet = document.querySelector('.top-sheet');
        topSheet.style.transform = 'translateY(-100%)';
        topSheet.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
        main_screen.style.opacity = '1';
    }

    function sheetOpen(position){
        var topSheet = document.querySelector('.top-sheet');
        topSheet.style.transform = 'translateY(0%)';
        topSheet.style.transition = 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
        main_screen.style.opacity = '0.2';
    }

    // tap background to close sheet
    document.addEventListener('click', function(event) {
        var sheet_status = sheetStatus();
        if(sheet_status != 'none'){ // check sheet is open
            // Check if clicked outside of .sheet
            if (!event.target.closest('.sheet') && !event.target.matches('*[data-action="open-sheet-top"]')) {
                event.stopPropagation();
                sheetClose();
            }
        }
    });  

    // open sheet triggers
    document.addEventListener('click', function(e) {
        if (e.target.matches('*[data-action="open-sheet-top"]')) {
            e.preventDefault();
            sheetOpen('top');
        } else if (e.target.matches('*[data-action="open-sheet-bottom"]')) {
            e.preventDefault();
            sheetOpen('bottom');
        }
    });
});



// Sticky header/footer logic
document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = 0;
    var headerTranslation = 0;
    var footerTranslation = 0;

    var stickyFooter = document.getElementById('footer-nav');
    var stickyFooterHeight = stickyFooter ? stickyFooter.offsetHeight : 0;
    var stickyHeader = document.getElementById('header-nav');
    var stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 0;

    var main = document.querySelector('main');
    main.addEventListener('scroll', function() {
        // these have to be re set when content is changed with ajax
        stickyFooter = document.getElementById('footer-nav');
        stickyFooterHeight = stickyFooter ? stickyFooter.offsetHeight : 0;
        stickyHeader = document.getElementById('header-nav');
        stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
        
        var currentScrollTop = this.scrollTop;
        var scrollDelta = currentScrollTop - lastScrollTop;

        if (scrollDelta > 0) {
            // Scrolling down
            headerTranslation = Math.max(headerTranslation - scrollDelta, -stickyHeaderHeight);
        } else {
            // Scrolling up
            headerTranslation = Math.min(headerTranslation - scrollDelta, 0);
        }

        // Calculate opacity based on translation
        var headerOpacity = 1 - Math.abs(headerTranslation / stickyHeaderHeight);

        // Apply transformation and opacity
        if (stickyHeader) {
            stickyHeader.style.transform = 'translateY(' + headerTranslation + 'px)';
            stickyHeader.style.opacity = headerOpacity;
        }

        lastScrollTop = currentScrollTop;
    });
});