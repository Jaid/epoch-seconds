# epoch-seconds


Returns the seconds passed since Unix epoch.



## API Reference
**Kind**: Exported function  
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

