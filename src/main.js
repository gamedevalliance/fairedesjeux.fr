// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import the fonts.
import 'typeface-source-code-pro';
import 'typeface-source-sans-pro';
import 'typeface-muli';

// Tailwind
import 'tailwindcss/tailwind.css';

// Prism CSS, used for syntax coloring
import 'prismjs/themes/prism-okaidia.css';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF, faGithub, faTwitter, faInstagram, faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

// Import default layout, this layout will be imported as a global component
import Layout from './layouts/Default.vue';


// Import only the icons we need from Font-Awesome
config.autoAddCss = false;
library.add(faFacebookF, faGithub, faTwitter, faInstagram, faLinkedinIn, faGlobeEurope, faExternalLinkAlt);

export default function (Vue, { head }) {
    // Set default layout as a global component
    Vue.component('Layout', Layout);
    Vue.component('font-awesome', FontAwesomeIcon);

    // eslint-disable-next-line no-param-reassign
    head.bodyAttrs = { class: 'bg-area smooth' };
}
