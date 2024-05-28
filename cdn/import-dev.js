/**
 * Paper Icons - A modern and beautiful icon library built to seamlessly integrate with Paper UI..
 * @version 0.0
 * @author Opensource-Paper fionnanloughlin@gmail.com
 * @license MIT
 */

class PaperIcons {
  constructor() {
    this.iconData = {
      "disc": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle  cx="12" cy="12" r="10" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>
      `,
      "more-horizontal": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="5" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>
      `,
      "archive":`<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="5" rx="1" color="currentColor" stroke="currentColor" stroke-width="2"/><path d="M4 8H20V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5V8Z" color="currentColor" stroke="currentColor" stroke-width="2"/><path d="M9 12H15" color="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `,
      "fullscreen":`<svg width="20" height="20" viewBox="0 0 20 20" color="currentColor" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1C0 0.447715 0.447715 0 1 0H2V6C2 6.55228 1.55228 7 1 7V7C0.447715 7 0 6.55228 0 6V1Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M0 14C0 13.4477 0.447715 13 1 13V13C1.55228 13 2 13.4477 2 14V20H1C0.447715 20 0 19.5523 0 19V14Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M2 18H6C6.55228 18 7 18.4477 7 19V19C7 19.5523 6.55228 20 6 20H2V18Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M2 0H6C6.55228 0 7 0.447715 7 1V1C7 1.55228 6.55228 2 6 2H2V0Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M13 1C13 0.447715 13.4477 0 14 0H18V2H14C13.4477 2 13 1.55228 13 1V1Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M18 0H19C19.5523 0 20 0.447715 20 1V6C20 6.55228 19.5523 7 19 7V7C18.4477 7 18 6.55228 18 6V0Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M18 14C18 13.4477 18.4477 13 19 13V13C19.5523 13 20 13.4477 20 14V19C20 19.5523 19.5523 20 19 20H18V14Z" color="currentColor" stroke="currentColor" fill="currentColor"/><path d="M13 19C13 18.4477 13.4477 18 14 18H18V20H14C13.4477 20 13 19.5523 13 19V19Z" color="currentColor" stroke="currentColor" fill="currentColor"/></svg>
      `,
    };

    this.options = {
      iconAttribute: 'paper-icon',
      fallbackClass: 'paper-icon-fallback',
      onIconNotFound: (iconName) => {
        console.warn(`Icon "${iconName}" not found in the icon data.`);
      },
    };
  }

  replaceIcons() {
    const paperIcons = document.querySelectorAll(`i[${this.options.iconAttribute}]`);

    paperIcons.forEach((icon) => {
      const iconName = icon.getAttribute(this.options.iconAttribute);
      if (this.iconData[iconName]) {
        icon.outerHTML = this.iconData[iconName];
      } else {
        icon.classList.add(this.options.fallbackClass);
        this.options.onIconNotFound(iconName);
      }
    });
  }

  addIcon(name, svgContent) {
    this.iconData[name] = svgContent;
  }

  configure(options) {
    this.options = { ...this.options, ...options };
  }
}

// Create a new instance of PaperIcons
const paperIcons = new PaperIcons();

// Replace icons on the page
paperIcons.replaceIcons();

// Add a new icon
paperIcons.addIcon('download', `<svg>...</svg>`);

// Configure the library
paperIcons.configure({
  iconAttribute: 'data-paper-icon',
  fallbackClass: 'custom-fallback',
  onIconNotFound: (iconName) => {
    console.error(`Icon "${iconName}" not found in the icon data.`);
  },
});
