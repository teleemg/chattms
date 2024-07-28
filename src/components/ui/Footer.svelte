<script lang="ts">
	import { dev } from '$app/environment';
	import * as config from '$src/config';
</script>


<footer class="flex flex-col items-center gap-5 py-gap">
    <span class="block font-medium text-center opacity-50">{config.siteName} &copy; {new Date().getFullYear()}</span>
</footer>
