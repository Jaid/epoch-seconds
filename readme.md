# epoch-seconds


<a href="https://raw.githubusercontent.com/jaid/epoch-seconds/master/license.txt"><img src="https://img.shields.io/github/license/jaid/epoch-seconds?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor epoch-seconds"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/epoch-seconds/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fepoch-seconds%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/commits-since/jaid/epoch-seconds/v2.1.24?style=flat-square&logo=github" alt="Commits since v2.1.24"/></a> <a href="https://github.com/jaid/epoch-seconds/commits"><img src="https://img.shields.io/github/last-commit/jaid/epoch-seconds?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/epoch-seconds/issues"><img src="https://img.shields.io/github/issues/jaid/epoch-seconds?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/v/epoch-seconds?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/epoch-seconds/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/epoch-seconds?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/npm/dm/epoch-seconds?style=flat-square&logo=npm" alt="Downloads"/></a>

**Returns the seconds passed since Unix epoch.**





## Installation

<a href="https://npmjs.com/package/epoch-seconds"><img src="https://img.shields.io/badge/npm-epoch--seconds-C23039?style=flat-square&logo=npm" alt="epoch-seconds on npm"/></a>

```bash
npm install --save epoch-seconds@^2.1.24
```

<a href="https://yarnpkg.com/package/epoch-seconds"><img src="https://img.shields.io/badge/Yarn-epoch--seconds-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="epoch-seconds on Yarn"/></a>

```bash
yarn add epoch-seconds@^2.1.24
```

<a href="https://github.com/jaid/epoch-seconds/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/epoch--seconds-24282e?style=flat-square&logo=github" alt="@jaid/epoch-seconds on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/epoch-seconds@^2.1.24
```



## Example


```javascript
import epochSeconds from "epoch-seconds"

const result = epochSeconds()
```

Variable `result` will be:

```javascript
1549410770
```












## Development



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


## License
[MIT License](https://raw.githubusercontent.com/jaid/epoch-seconds/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
