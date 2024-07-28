<script>
    import * as config from '$src/config';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    
    let loaded = false;
  
    onMount(() => {
      if (browser && !loaded) {
        const script = document.createElement('script');
        script.src = dev
          ? `https://kit.fontawesome.com/${config.fontAwesomeKitLocal}.js`
          : `https://kit.fontawesome.com/${config.fontAwesomeKit}.js`;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          loaded = true;
        };
        document.head.appendChild(script);
      }
    });
  </script>



