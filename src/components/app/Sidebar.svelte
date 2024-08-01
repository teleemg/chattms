<script>
    import { spring } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
  
    export let side = 'left';
    export let width = 300;
    
    let isOpen = false;
    
    const translateX = spring(side === 'left' ? -width : width, {
      stiffness: 0.1,
      damping: 0.25,
      easing: cubicOut
    });
  
    export function toggle() {
      isOpen = !isOpen;
      translateX.set(isOpen ? 0 : (side === 'left' ? -width : width));
    }
  
    export function close() {
      isOpen = false;
      translateX.set(side === 'left' ? -width : width);
    }
  </script>
  
  <div
    class="sidebar {side}"
    style="transform: translateX({$translateX}px); width: {width}px;"
  >
    <slot></slot>
  </div>
  
  <style>
    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      background-color: #f0f0f0;
      transition: opacity 0.3s;
    }
  
    .left {
      left: 0;
    }
  
    .right {
      right: 0;
    }
  </style>
  