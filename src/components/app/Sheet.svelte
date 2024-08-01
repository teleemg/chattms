<script>
    import { spring } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
  
    export let position = 'top';
    export let height = 300;
    
    let isOpen = false;
    
    const translateY = spring(position === 'top' ? -height : height, {
      stiffness: 0.1,
      damping: 0.25,
      easing: cubicOut
    });
  
    export function toggle() {
      isOpen = !isOpen;
      translateY.set(isOpen ? 0 : (position === 'top' ? -height : height));
    }
  
    export function close() {
      isOpen = false;
      translateY.set(position === 'top' ? -height : height);
    }
  </script>
  
  <div
    class="sheet {position}"
    style="transform: translateY({$translateY}px); height: {height}px;"
  >
    <slot></slot>
  </div>
  
  <style>
    .sheet {
      position: fixed;
      left: 0;
      right: 0;
      background-color: #f0f0f0;
      transition: opacity 0.3s;
    }
  
    .top {
      top: 0;
    }
  
    .bottom {
      bottom: 0;
    }
  </style>
  