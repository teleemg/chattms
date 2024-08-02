
var sidebarOpen = function(){};
var sidebarClose = function(){};

$(document).ready(function() {
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
    main_screen = $('#main-screen');
    sidebar_left = $('#sidebar-left');
    sidebar_right = $('#sidebar-right');

    // sidebar width and restraints
    var sidebarWidth = sidebar_left.outerWidth();
    var max_transform_left = -sidebarWidth;
    var max_transform_right = sidebarWidth; 
    $(window).resize(function() {
        sidebarWidth = sidebar_left.outerWidth();
        max_transform_left = -sidebarWidth;
        max_transform_right = sidebarWidth;    
    });
    

    // Function to handle touch start
    function onTouchStart(event) {

        if (!touchStartedOnOverride) {
            touchStartedOnOverride = $(event.target).closest('.touch-override').length > 0;
            var touchObj = event.touches[0];
            startX = touchObj.pageX;
            startY = touchObj.pageY;
            startT = new Date().getTime(); // Record time when finger first makes contact with surface
            isSwipe = false; // Reset swipe status
            directionDetermined = false; // Reset direction status

            // update element positions
            main_offset = main_screen.offset();
            main_offset_viewport = {
                top: main_offset.top - $(window).scrollTop(),
                left: main_offset.left - $(window).scrollLeft()
            }
        }
    }

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
        else {
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
        var main_offset = main_screen.offset();
        var main_offset_viewport = {
            top: main_offset.top - $(window).scrollTop(),
            left: main_offset.left - $(window).scrollLeft()
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
    }



    // Binding the event listeners to the body
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);


    function sidebarMovement(distX, distY){
        var position_calc = main_offset.left + distX; // current position + drag amount
        
        // maximum slide constraints
        if(position_calc < max_transform_left){
            position_calc = max_transform_left;
        }
        if(position_calc > max_transform_right){
            position_calc = max_transform_right;
        }

        // slide main screen
        main_screen.css('transform', 'translateX(' + position_calc + 'px)');
        
        // slide sidebars in tandem with main view
        sidebar_left_position = position_calc - sidebarWidth;
        sidebar_right_position = position_calc + sidebarWidth;
        sidebar_left.css('transform', 'translate3d(' + sidebar_left_position + 'px, 0, 0)');
        sidebar_right.css('transform', 'translate3d(' + sidebar_right_position + 'px, 0, 0)');

        updateOpacities();
    }

    function sidebarStatus(){
        var main_offset = main_screen.offset();
        var main_offset_viewport = {
            top: main_offset.top - $(window).scrollTop(),
            left: main_offset.left - $(window).scrollLeft()
        };
        if(main_offset.left > 0){
            return 'left'
        }
        else if(main_offset.left < 0){
            return('right');
        }
        else if(main_offset.left == 0){
            return 'none';
        }
    }

    // This function will calculate the opacity based on main_offset.left
    function updateOpacities() {
    
        var main_offset = $('main').offset();
        var main_offset_viewport = {
            top: main_offset.top - $(window).scrollTop(),
            left: main_offset.left - $(window).scrollLeft()
        };
            
        // Calculate the absolute distance from the center (0 position)
        var distanceFromCenter = Math.abs(main_offset_viewport.left);
        
        // Calculate percentage of offset from the middle (0)
        var percentage = distanceFromCenter / sidebarWidth; // This will be 1 at the extremes and 0 at the center
        
        // Opacity for main should decrease from 1 to 0.2 as it moves away from the center
        var mainOpacity = 1 - (0.8 * percentage); // main will turn to 20% opacity at the extremes
        
        // Opacity for the sidebar should increase from a minimum to 1 as the main opacity decreases
        var sidebarOpacity = 0.2 + (0.8 * percentage); // sidebar will turn to 100% opacity when main is at 20% opacity
        
        // Apply the calculated opacities to the main and sidebar elements
        $('main').css('opacity', mainOpacity);
        $('.sidebar').css('opacity', sidebarOpacity);
    }
    //updateOpacities(); // set initial values

    sidebarOpen = function(side){
        
        
        if(side == 'left'){
            sidebar_left.css({
                'transform': 'translate3d(0px, 0, 0)', // Updated to use translate3d
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity':1
            });
            sidebar_right.css({
                'transform': 'translate3d('+sidebarWidth+'px, 0, 0)', // Updated to use translate3d
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity' : 0.2
            });
            main_screen.css({
                'transform': 'translate3d('+sidebarWidth+'px, 0, 0)', // Updated to use translate3d
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity' : 0.2,
                'pointer-events':'none',
            });
        }
        else if(side == 'right'){
            sidebar_left.css({
                'transform': 'translate3d(-'+sidebarWidth+'px, 0, 0)', // Using translate3d for potential GPU acceleration
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity' : 0.2
            });
            sidebar_right.css({
                'transform': 'translate3d(0px, 0, 0)', // Using translate3d for potential GPU acceleration
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity':1
            });
            main_screen.css({
                'transform': 'translate3d(-'+sidebarWidth+'px, 0, 0)', // Using translate3d for potential GPU acceleration
                'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                'opacity' : 0.2,
                'pointer-events':'none'
            });
        }        
    }
    sidebarClose = function (side){
        sidebar_left.css({
            'transform': 'translate3d(-'+sidebarWidth+'px, 0, 0)', // Updated to use translate3d
            'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            'opacity':0.2
        });
        sidebar_right.css({
            'transform': 'translate3d('+sidebarWidth+'px, 0, 0)', // Updated to use translate3d
            'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            'opacity':0.2
        });
        main_screen.css({
            'transform': 'translate3d(0px, 0, 0)', // Updated to use translate3d
            'transition': 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            'opacity' : 1,
            'pointer-events':'auto',
        });
    }
    
    // Remove the transition animations once the transition is complete
    main_screen.on('transitionend', function() {
        sidebar_right.css('transition', '');
        sidebar_left.css('transition', '');
        main_screen.css('transition', '');
    });     


    // esc close
    $(document).keyup(function(e) {
        sidebarClose('left');
        sidebarClose('right');
    });


    // tap background to close sidebar
    $(document).on('click', function(event) {
        var sidebar_status = sidebarStatus();
        if(sidebar_status != 'none'){ // check if the sidebar is open

            // don't close the sidebar if <main> opacity is 1
            // because this means we're looking at the desktop version
            if ($('main').css('opacity') < 1) {

                // Check if clicked outside of .sidebar and not on the menu button
                if ($(event.target).closest('.sidebar').length === 0) {
                    event.preventDefault(); // Prevent default action of the clicked element
                    event.stopPropagation(); // Stop the event from bubbling up
                    sidebarClose('left');
                    sidebarClose('right');
                }
            }
        }
    });



    // open menu triggers
    $(document).on('click','#sidebar-left',function(e){
        e.preventDefault();
        var sidebar_status = sidebarStatus();
        if(sidebar_status != 'none'){
            sidebarClose('left');
        } else {
            sidebarOpen('left');
        }
    });
    $(document).on('click','#sidebar-right',function(e){
        e.preventDefault();
        if(sidebar_status != 'none'){
            sidebarClose('right');
        } else {
            sidebarOpen('right');
        }
    });

});






// STICKY HEADER
$(document).ready(function() {
    var lastScrollTop = 0;
    var headerTranslation = 0;
    var $stickyHeader = $('#header-nav');
    var stickyHeaderHeight = $stickyHeader.outerHeight();

    $('#main-screen').scroll(function() {

        if (!$stickyHeader.length) {
            $stickyHeader = $('#header-nav');
            stickyHeaderHeight = $stickyHeader.outerHeight();
        }
        var currentScrollTop = $(this).scrollTop();
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

        $stickyHeader.css({
            'transform': 'translateY(' + headerTranslation + 'px)',
            'opacity': headerOpacity
        });
        lastScrollTop = currentScrollTop;
    });
});
