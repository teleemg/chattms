<script lang="ts">
	import * as config from '$src/config';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Profile - {config.siteName}</title>
</svelte:head>

<div class="pb-10 mb-10 border-b border-dark/10">
    <h1 class="text-3xl leading-none">Profile</h1>

    <form action="" method="">
        <div class="">
            <label for="firstName">First name</label>
            <input type="text" name="firstName">
        </div>
        <div class="">
            <label for="firstName">Last name</label>
            <input type="text" name="firstName">
        </div>
        <div class="">
            <label for="firstName">Email</label>
            <input type="text" name="email">
        </div>
        <div class="">
            <button class="btn btn-primary" type="submit">Update</button>
        </div>
    </form>
</div>