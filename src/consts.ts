// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "TOR HALLE-MCINTYRE";
export const SITE_DESCRIPTION = "Projects and works by Tor Halle-McIntyre";
export const PLACEHOLDER_IMAGE: ImageMetadata = import.meta.glob<{
  default: ImageMetadata;
}>("/src/content/decor/footer.jpg")[0];

export const BLOG_ENABLED: boolean = false;
