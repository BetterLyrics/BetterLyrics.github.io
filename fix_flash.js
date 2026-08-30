const fs = require('fs');
let css = fs.readFileSync('.vitepress/theme/custom.css', 'utf8');

css += `
/* Disable VitePress's default color transitions to prevent conflicts with the View Transitions API */
:root {
  --vp-c-transition: none !important;
  --vp-t-color: none !important;
}

*, *::before, *::after {
  transition-duration: 0s !important;
}

/* Re-enable transitions for interactive elements */
a, button, .vp-doc a.link-card, .card {
  transition: all 0.3s ease !important;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
`;

fs.writeFileSync('.vitepress/theme/custom.css', css);
