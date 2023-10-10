const mongoose = require('mongoose')
const brandSchema = require('./brands.js')
const frameConfigSchema = require('./frameconfig.js')
const groupsetConfigSchema = require('./groupsetconfig.js')
const wheelConfigSchema = require('./wheelsconfig')
const tireConfigSchema = require('./tiresconfig.js')
const kitConfigSchema = require('./kitconfig.js')

const Brand = mongoose.model('brands', brandSchema)
const FrameConfig = mongoose.model('frameconfigs', frameConfigSchema)
const GroupsetConfig = mongoose.model('groupsetconfigs', groupsetConfigSchema)
const WheelConfig = mongoose.model('wheelconfigs', wheelConfigSchema)
const TireConfig = mongoose.model('tireconfigs', tireConfigSchema)
const KitConfig = mongoose.model('kitconfigs', kitConfigSchema)


module.exports = {
  Brand,
  FrameConfig,
  GroupsetConfig,
  WheelConfig,
  TireConfig,
  KitConfig
}
