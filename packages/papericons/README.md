<p align="center">
<img alt="Logo Banner" src="https://github.com/Opensource-Paper/PaperIcons/blob/ce8c90655dcdc2e201e44f501841fff9db7e7512/banner/banner.png?sanitize=true"/>
<br/>

<div align="left">Paper Icons is a modern and beautiful icon library built to seamlessly integrate with Paper UI.</div>
<div align="left">

[Documentation](https://icons.paperui.com/)

</div>

## Installation

### CDN

Import Paper Icons using CDN. The import-min.js file will automatically import all styles and JavaScript files into the ```<head>```.

```html
<script type="module" src="https://unpkg.com/papericons"></script>
```
#### 🚧 Development
```html
<script type="module" src="https://icons.paperui.com/cdn/import-dev.js"></script>
```

### NPM

Install Paper Icons using [npm and node](https://nodejs.org/en).

```bash
npm install papericons
```

## Import

Import icon definitions from ```papericons/import.js```.

```index.js```

```js
import paperIcons from 'papericons';

document.addEventListener('DOMContentLoaded', () => {
  paperIcons.replaceIcons();
});
```

## Usage

Use the ```<icon-name>``` tag in HTML markup. Refer to the [Icon Docs](https://icons.paperui.com) for more guidance on using each icon. That's it 🎉.

```HTML```

```html
<!-- example icon -->
<i paper-icon="disc"></i>

<!-- using vanilla js with no framework -->

<script>
  document.addEventListener('DOMContentLoaded', () => {
    window.PaperIcons.replaceIcons();
  });
</script>
```

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/YzbpOBv).
