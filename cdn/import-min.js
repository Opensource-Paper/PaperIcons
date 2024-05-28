/**
 * Paper Icons - A lightweight and customizable icon library for your web project.
 * @version 2.0.0
 * @author Your Name <your.email@example.com>
 * @license MIT
 */
class PaperIcons{constructor(){this.iconData={"disc":`<svg color="currentColor" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle  cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
<circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2"/>
</svg>`,"more-horizontal":`<svg width="24" height="24" color="currentColor" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1" stroke="currentColor" stroke-width="2"/>
<circle cx="5" cy="12" r="1" stroke="currentColor" stroke-width="2"/>
<circle cx="19" cy="12" r="1" stroke="currentColor" stroke-width="2"/>
</svg>`,};this.options={iconAttribute:'paper-icon',fallbackClass:'paper-icon-fallback',onIconNotFound:(iconName)=>{console.warn(`Icon "${iconName}" not found in the icon data.`)},}}
replaceIcons(){const paperIcons=document.querySelectorAll(`i[${this.options.iconAttribute}]`);paperIcons.forEach((icon)=>{const iconName=icon.getAttribute(this.options.iconAttribute);if(this.iconData[iconName]){icon.outerHTML=this.iconData[iconName]}else{icon.classList.add(this.options.fallbackClass);this.options.onIconNotFound(iconName)}})}
addIcon(name,svgContent){this.iconData[name]=svgContent}
configure(options){this.options={...this.options,...options}}}
const paperIcons=new PaperIcons();paperIcons.replaceIcons();paperIcons.addIcon('download',`<svg>...</svg>`);paperIcons.configure({iconAttribute:'data-paper-icon',fallbackClass:'custom-fallback',onIconNotFound:(iconName)=>{console.error(`Icon "${iconName}" not found in the icon data.`)},})
