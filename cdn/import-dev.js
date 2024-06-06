class PaperIcons {
  constructor() {
    this.iconData = {
      "archive": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="5" rx="1" color="currentColor" stroke="currentColor" stroke-width="2"/><path d="M4 8H20V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5V8Z" color="currentColor" stroke="currentColor" stroke-width="2"/><path d="M9 12H15" color="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      "book": `<svg width="24" height="24" viewBox="0 0 24 24" color="currentColor" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_27_107" fill="white"><path d="M2 4.5C2 2.567 3.567 1 5.5 1H20C20.5523 1 21 1.44772 21 2V22C21 22.5523 20.5523 23 20 23H5.5C3.567 23 2 21.433 2 19.5V4.5Z"/></mask><path d="M2 4.5C2 2.567 3.567 1 5.5 1H20C20.5523 1 21 1.44772 21 2V22C21 22.5523 20.5523 23 20 23H5.5C3.567 23 2 21.433 2 19.5V4.5Z" color="currentColor" stroke="currentColor" stroke-width="4" mask="url(#path-1-inside-1_27_107)"/><path d="M5.5 17H20V22H5.5C4.11929 22 3 20.8807 3 19.5C3 18.1193 4.11929 17 5.5 17Z" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>`,
      "disc": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle  cx="12" cy="12" r="10" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>`,
      "disc-2": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1" color="currentColor" fill="currentColor"/><circle cx="12" cy="12" r="4" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>`,
      "more-horizontal": `<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="5" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="12" r="1" color="currentColor" stroke="currentColor" stroke-width="2"/></svg>`,
      "share": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="5" r="2" color="currentColor" stroke="currentColor" fill="currentColor" stroke-width="2"/><circle cx="19" cy="19" r="2" color="currentColor" stroke="currentColor" fill="currentColor" stroke-width="2"/><circle cx="5" cy="12" r="2" color="currentColor" stroke="currentColor" fill="currentColor" stroke-width="2"/><line x1="4.77639" y1="11.5528" x2="18.7764" y2="4.55279" color="currentColor" stroke="currentColor"/><line x1="18.7764" y1="19.4472" x2="4.77639" y2="12.4472" color="currentColor" stroke="currentColor"/></svg>`,
      "circle-stop": `<svg width="24" height="24" viewBox="0 0 24 24" color="currentColor" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" color="currentColor" stroke="currentColor" stroke-width="2"/><rect x="8" y="8" width="8" height="8" rx="1" color="currentColor" stroke="currentColor" fill="currentColor"/></svg>`,
      "play": `<svg width="24" height="24" viewBox="0 0 24 24" color="currentColor" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4337 12.8711C21.1123 12.4886 21.1123 11.5114 20.4337 11.1289L4.49106 2.14199C3.82444 1.76622 3 2.24788 3 3.01311V20.9869C3 21.7522 3.82444 22.2338 4.49106 21.858L20.4337 12.8711Z" color="currentColor" stroke="currentColor" fill="currentColor"/></svg>`,
    };

    this.options = {
      iconAttribute: "paper-icon",
      fallbackClass: "paper-icon-fallback",
      onIconNotFound: (iconName) => {
        console.warn(
          `Icon "${iconName}" Could not be found or does not exist.`,
        );
      },
    };

    this.version = "";
  }

  replaceIcons() {
    const paperIcons = document.querySelectorAll(
      `i[${this.options.iconAttribute}]`,
    );
    let allIconsImported = true;

    paperIcons.forEach((icon) => {
      const iconName = icon.getAttribute(this.options.iconAttribute);
      if (this.iconData[iconName]) {
        icon.outerHTML = this.iconData[iconName];
      } else {
        icon.classList.add(this.options.fallbackClass);
        this.options.onIconNotFound(iconName);
        allIconsImported = false;
      }
    });

    if (allIconsImported) {
      console.log(`Imported Paper Icons ${this.version}successfully.`);
    }
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

// Export the instance for use in different environments
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = paperIcons;
} else {
  window.PaperIcons = paperIcons;
}
