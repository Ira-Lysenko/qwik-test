const metaTitles = [
  'name="twitter:title"',
  'name="twitter:image:alt"',
  'property="og:image:alt"',
  'og:title',
  'itemprop="name"'
];
const bodyHead = document.getElementsByTagName('head');

const metaTagsEqualTitle = metaTitles.forEach((name )  => {
  let metaElement = document.createElement("meta");
  metaElement.name = 'name';
  metaElement.content = 'head.title';
  head.appendChild(metaElement);
});

const lastUrlItem :string = loc.pathname.substring(loc.pathname.lastIndexOf('/') + 1);
const titleFromUrl : string = lastUrlItem
  .replace(/-+/g,' ').toLowerCase()
  .replace(/\w/, firstLetter => firstLetter.toUpperCase());