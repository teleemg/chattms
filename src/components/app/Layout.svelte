<script>
    import { onMount } from 'svelte';
    import Sidebar from './Sidebar.svelte';
    import Sheet from './Sheet.svelte';
  
    let leftSidebar;
    let rightSidebar;
    let topSheet;
    let bottomSheet;
    let mainContent;
    let headerNav;
    let footerNav;
  
    let startX, startY, startT;
    const swipeThreshold = 100;
    const swipeTimeThreshold = 500;
    let isSwipe = false;
    let directionDetermined = false;
    let isHorizontal = false;
  
    onMount(() => {
      mainContent.addEventListener('touchstart', onTouchStart);
      mainContent.addEventListener('touchmove', onTouchMove, { passive: false });
      mainContent.addEventListener('touchend', onTouchEnd);
  
      return () => {
        mainContent.removeEventListener('touchstart', onTouchStart);
        mainContent.removeEventListener('touchmove', onTouchMove);
        mainContent.removeEventListener('touchend', onTouchEnd);
      };
    });
  
    function onTouchStart(event) {
        console.log('hello')
      const touch = event.touches[0];
      startX = touch.pageX;
      startY = touch.pageY;
      startT = new Date().getTime();
      isSwipe = false;
      directionDetermined = false;
    }
  
    function onTouchMove(event) {
      if (!directionDetermined) {
        const touch = event.touches[0];
        const diffX = touch.pageX - startX;
        const diffY = touch.pageY - startY;
        directionDetermined = true;
        isHorizontal = Math.abs(diffX) > Math.abs(diffY);
      }
  
      if (isHorizontal) {
        event.preventDefault();
        const touch = event.touches[0];
        const distX = touch.pageX - startX;
        sidebarMovement(distX);
      }
    }
  
    function onTouchEnd(event) {
      const touch = event.changedTouches[0];
      const distX = touch.pageX - startX;
      const elapsedTime = new Date().getTime() - startT;
  
      if (Math.abs(distX) >= swipeThreshold && elapsedTime <= swipeTimeThreshold) {
        isSwipe = true;
      }
  
      if (isSwipe) {
        if (distX < 0) {
          leftSidebar.close();
          rightSidebar.toggle();
        } else {
          rightSidebar.close();
          leftSidebar.toggle();
        }
      } else {
        if (Math.abs(distX) >= leftSidebar.width / 2) {
          distX > 0 ? leftSidebar.toggle() : rightSidebar.toggle();
        } else {
          leftSidebar.close();
          rightSidebar.close();
        }
      }
    }
  
    function sidebarMovement(distX) {
      const leftPosition = Math.min(Math.max(distX - leftSidebar.width, -leftSidebar.width), 0);
      const rightPosition = Math.max(Math.min(distX + rightSidebar.width, rightSidebar.width), 0);
      
      leftSidebar.translateX.set(leftPosition);
      rightSidebar.translateX.set(rightPosition);
      
      updateOpacities(distX);
    }
  
    function updateOpacities(distX) {
      const percentage = Math.abs(distX) / leftSidebar.width;
      const mainOpacity = 1 - (0.8 * percentage);
      const sidebarOpacity = 0.2 + (0.8 * percentage);
      
      mainContent.style.opacity = mainOpacity;
      leftSidebar.style.opacity = sidebarOpacity;
      rightSidebar.style.opacity = sidebarOpacity;
    }
  
    let lastScrollTop = 0;
    let headerTranslation = 0;
    let footerTranslation = 0;
  
    function handleScroll(event) {
      const currentScrollTop = event.target.scrollTop;
      const scrollDelta = currentScrollTop - lastScrollTop;
      const headerHeight = headerNav.offsetHeight;
      const footerHeight = footerNav.offsetHeight;
  
      if (scrollDelta > 0) {
        // Scrolling down
        headerTranslation = Math.max(headerTranslation - scrollDelta, -headerHeight);
        footerTranslation = Math.min(footerTranslation + scrollDelta, footerHeight);
      } else {
        // Scrolling up
        headerTranslation = Math.min(headerTranslation - scrollDelta, 0);
        footerTranslation = Math.max(footerTranslation + scrollDelta, 0);
      }
  
      const headerOpacity = 1 - Math.abs(headerTranslation / headerHeight);
      const footerOpacity = 1 - Math.abs(footerTranslation / footerHeight);
  
      headerNav.style.transform = `translateY(${headerTranslation}px)`;
      headerNav.style.opacity = headerOpacity;
      footerNav.style.transform = `translateY(${footerTranslation}px)`;
      footerNav.style.opacity = footerOpacity;
  
      lastScrollTop = currentScrollTop;
    }
  </script>
  
  <Sidebar bind:this={leftSidebar} side="left">
    <!-- Left sidebar content -->
  </Sidebar>
  
  <Sidebar bind:this={rightSidebar} side="right">
    <!-- Right sidebar content -->
  </Sidebar>
  
  <Sheet bind:this={topSheet} position="top">
    <!-- Top sheet content -->
  </Sheet>
  
  <Sheet bind:this={bottomSheet} position="bottom">
    <!-- Bottom sheet content -->
  </Sheet>
  
  <main bind:this={mainContent} on:scroll={handleScroll}>
    <header bind:this={headerNav}>
      <!-- Header content -->
    </header>
  
    <slot></slot>
  
    <footer bind:this={footerNav}>
      <!-- Footer content -->
    </footer>
  </main>
  
  <style>
    main {
      transition: opacity 0.3s;
    }
  </style>