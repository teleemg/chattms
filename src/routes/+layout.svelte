<script lang="ts">
	import '../app.css';
	import * as config from '$src/config';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

	import Header from '$src/components/ui/Header.svelte';
	import Footer from '$src/components/ui/Footer.svelte';

	$: canonicalUrl = `${config.siteUrl}${$page.url.pathname}`;

	const schemaOrgWebsite = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: config.siteName,
		url: config.siteUrl
	};

    onMount(() => {
        // FontAwesome
        if (browser) {
            const script = document.createElement('script');
            script.src = dev
            ? `https://kit.fontawesome.com/${config.fontAwesomeKitLocal}.js`
            : `https://kit.fontawesome.com/${config.fontAwesomeKit}.js`;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
        }
        // Google Analytics
        if (browser && config.googleAnalytics) {
            const gaScript = document.createElement('script');
            gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`;
            gaScript.async = true;
            document.head.appendChild(gaScript);
            gaScript.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', config.googleAnalytics);
            };
        }
    });
</script>

<svelte:head>
	<meta charset="UTF-8" />

	<!-- Basic Meta Tags -->
	<title>{config.siteDescription} - {config.siteName}</title>
	<meta name="title" content={config.siteName} />
	<meta name="description" content={config.siteDescription} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Mobile App Meta Tags -->
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content={config.siteName} />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="theme-color" content="#ffffff" />

	<!-- Favicon and App Icons (https://realfavicongenerator.net) -->
	<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
	<link rel="shortcut icon" href="/images/favicon.ico" />

	<!-- Manifest and PWA options -->
	<link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#000000" />
	<link rel="manifest" href="site.webmanifest" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-config" content="browserconfig.xml" />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={config.siteName} />
	<meta property="og:description" content={config.siteDescription} />
	<meta property="og:image" content="{config.siteUrl}/images/social.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={config.siteName} />
	<meta name="twitter:description" content={config.siteDescription} />
	<meta name="twitter:image" content="{config.siteUrl}/images/social.png" />
	{#if config.twitterHandle}
		<meta name="twitter:creator" content={config.twitterHandle} />
	{/if}

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(schemaOrgWebsite)}</script>`}
</svelte:head>

<div class="font-sans text-base antialiased bg-light text-dark dark:bg-dark dark:text-light;">
	<Header />
	<main class="">
		<slot />
	</main>
	<Footer />

	<!-- <div id="dark-mode-toggle" class="fixed z-50 bottom-10 left-10 mix-blend-difference text-light">
        <span class="text-xl fa-solid fa-sun-bright"></span>
    </div> -->

	{#if dev}
		<div class="fixed bottom-0 right-0 z-50 flex flex-row items-center justify-center font-medium bg-gray-900 opacity-50 w-9 h-9 text-light">
			<span class="md:hidden">SM</span>
			<span class="hidden md:block lg:hidden">MD</span>
			<span class="hidden lg:block xl:hidden">LG</span>
			<span class="hidden xl:block 2xl:hidden">XL</span>
			<span class="hidden 2xl:block 3xl:hidden">2XL</span>
			<span class="hidden 3xl:block 4xl:hidden">3XL</span>
			<span class="hidden 4xl:block 5xl:hidden">4XL</span>
			<span class="hidden 5xl:block">5XL</span>
		</div>
	{/if}
</div>
