import test from 'ava'
import dir2 from './'

test('main', async t => {
  const dirs = await dir2('.')
  t.deepEqual(dirs, ['.git', 'node_modules'])
})

test('sync', t => {
  const dirs = dir2.sync('./node_modules')
  t.true(dirs.indexOf('pify') !== -1)
})
