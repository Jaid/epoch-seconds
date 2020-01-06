# epoch-seconds


<a href="https://actions-badge.atrox.dev/Jaid/epoch-seconds/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fepoch-seconds%2Fbadge" alt="Build status"/></a> <a href="https://raw.githubusercontent.com/Jaid/epoch-seconds/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/epoch-seconds?style=flat-square" alt="License"/></a>  
<a href="https://github.com/Jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/commits-since/Jaid/epoch-seconds/v2.1.23?style=flat-square&logo=github" alt="Commits since v2.1.23"/></a> <a href="https://github.com/Jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/last-commit/Jaid/epoch-seconds?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/epoch-seconds/issues"><img src="https://img.shields.io/github/issues/Jaid/epoch-seconds?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/v/epoch-seconds?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/epoch-seconds/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/epoch-seconds?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/dm/epoch-seconds?style=flat-square&logo=npm" alt="Downloads"/></a>

**Returns the seconds passed since Unix epoch.**












## Installation
<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/badge/npm-epoch--seconds-C23039?style=flat-square&logo=npm" alt="epoch-seconds on npm"/></a>
```bash
npm install --save epoch-seconds@^2.1.23
```
<a href="https://yarnpkg.com/package/epoch-seconds"><img src="https://img.shields.io/badge/Yarn-epoch--seconds-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="epoch-seconds on Yarn"/></a>
```bash
yarn add epoch-seconds@^2.1.23
```
<a href="https://jsdelivr.com/package/npm/epoch-seconds/"><img src="https://img.shields.io/badge/jsDelivr-epoch--seconds-orange?style=flat-square&logo=html5&logoColor=white" alt="epoch-seconds on jsDelivr"/></a> <a href="https://unpkg.com/browse/epoch-seconds/"><img src="https://img.shields.io/badge/UNPKG-epoch--seconds-orange?style=flat-square&logo=html5&logoColor=white" alt="epoch-seconds on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/epoch-seconds@2.1.23/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/epoch-seconds@2.1.23/index.js");
document.querySelector("head").appendChild(scriptElement);
```

epoch-seconds is now stored in the global variable `epochSeconds`. The following console expression should return something other than `"undefined"`.

```javascript
typeof epochSeconds.default
```

<a name="module_epoch-seconds"></a>

## Reference
<a name="module_epoch-seconds.._default"></a>

### epoch-seconds~\_default([compareValue]) ⇒ <code>number</code>
**Kind**: inner method of [<code>epoch-seconds</code>](#module_epoch-seconds)  
**Returns**: <code>number</code> - Seconds passed since Unix epoch (01 January 1970)  

| Param | Type |
| --- | --- |
| [compareValue] | <code>number</code> | 

**Example**  
```javascript
import epochSeconds from "epoch-seconds"
const result = epochSeconds()
result === 1549410770
setTimeout(() => {
  const result2 = epochSeconds(result)
  result2 === 3
}, 3000)
```



## Development



Setting up:
```bash
git clone git@github.com:Jaid/epoch-seconds.git
cd epoch-seconds
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
