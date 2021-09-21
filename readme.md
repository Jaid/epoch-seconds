# epoch-seconds


<a href="https://raw.githubusercontent.com/jaid/epoch-seconds/master/license.txt"><img src="https://img.shields.io/github/license/jaid/epoch-seconds?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor epoch-seconds"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/epoch-seconds/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fepoch-seconds%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/commits-since/jaid/epoch-seconds/v3.0.2?style=flat-square&logo=github" alt="Commits since v3.0.2"/></a> <a href="https://github.com/jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/last-commit/jaid/epoch-seconds?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/epoch-seconds/issues"><img src="https://img.shields.io/github/issues/jaid/epoch-seconds?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/v/epoch-seconds?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/epoch-seconds/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/epoch-seconds?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/dm/epoch-seconds?style=flat-square&logo=npm" alt="Downloads"/></a>

**Returns the amount of seconds passed since Unix epoch (1970).**





## Installation

<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/badge/npm-epoch--seconds-C23039?style=flat-square&logo=npm" alt="epoch-seconds on npm"/></a>

```bash
npm install --save epoch-seconds@^3.0.2
```

<a href="https://yarnpkg.com/package/epoch-seconds"><img src="https://img.shields.io/badge/Yarn-epoch--seconds-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="epoch-seconds on Yarn"/></a>

```bash
yarn add epoch-seconds@^3.0.2
```



## Example


```javascript
import epochSeconds from "epoch-seconds"

const result = epochSeconds()
```

Variable `result` will be something like:

```javascript
1549410770
```



















## Development

<details>
<summary><b>Development hints for maintaining and improving epoch-seconds</b></summary>



Setting up:
```bash
git clone git@github.com:jaid/epoch-seconds.git
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

</details>

## License
[MIT License](https://raw.githubusercontent.com/jaid/epoch-seconds/master/license.txt)  
Copyright © 2021, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)

<!---
Readme generated with tldw v7.1.0
https://github.com/Jaid/tldw
-->