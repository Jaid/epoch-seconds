import {estimateShallowMemoryUsageOf} from 'bun:jsc'

const bar = {
  foo: '12zthhtzhtrzthgthzgzztr5zt5rt5r6zu7t6rtru567tzur567ur56r56dr3',
}
const snap = Bun.generateHeapSnapshot("v8")
await Bun.write('heap.heapsnapshot', snap)
