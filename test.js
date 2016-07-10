import test from 'ava'
import dir2 from './'

test('async', async t => {
  const dirs = await dir2('.')
  t.deepEqual(dirs, ['.git', 'node_modules'])
})

test('async with prefix', async t => {
  const dirs = await dir2('./node_modules', {prefix: true})
  t.true(dirs[0].indexOf('node_modules') !== -1)
})

test('sync', t => {
  const dirs = dir2.sync('./node_modules')
  t.true(dirs.indexOf('pify') !== -1)
})

test('sync with prefix', t => {
  const dirs = dir2.sync('./node_modules', {prefix: true})
  t.true(dirs[0].indexOf('node_modules') !== -1)
})
