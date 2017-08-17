var tileTools = require('tiled-image-tools')
var PNG = require('pngjs').PNG
var Jimp = require('jimp')

// Helper Functions

/**
 * Pads a string with padChar to the right.
 * @private
 * @param  {String} str         The string to pad
 * @param  {Char} padChar     The character to pad with
 * @param  {Integer} totalLength The overall length of the returned string
 * @return {String}             The padded string
 */
function pad (str, padChar, totalLength) {
  if (str.length > totalLength) {
    return str.substring(0, totalLength)
  }

  return str + Array(totalLength - str.length + 1).join(padChar)
}

/**
 * Creates a buffer for the title structure
 * @private
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {Buffer}                  The title structure buffer
 */
function createTitleBuffer (shortDescription, longDescription, publisher) {
  return Buffer.concat([
    Buffer.from(pad(shortDescription, '\0', 0x80 / 2), 'utf16le'),
    Buffer.from(pad(longDescription, '\0', 0x100 / 2), 'utf16le'),
    Buffer.from(pad(publisher, '\0', 0x80 / 2), 'utf16le')
  ])
}

/**
 * @typedef TitleObject
 * @type {Object}
 * @property {String} shortDescription The short description
 * @property {String} longDescription The long description
 * @property {String} publisher The publisher
 */

/**
 * A Buffer object that is exactly 0x200 bytes long
 * @typedef TitleBuffer
 * @type {Buffer}
 */

/**
 * Parses the title buffer and returns an object
 * @private
 * @param  {TitleBuffer} buffer The title buffer to parse
 * @return {TitleObject}
 */
function parseTitleBuffer (buffer) {
  return {
    shortDescription: buffer.toString('utf16le', 0, 0x80),
    longDescription: buffer.toString('utf16le', 0x80, 0x180),
    publisher: buffer.toString('utf16le', 0x180, 0x200)
  }
}

/**
 * Writes the title buffer to the SMDH buffer at the specified index
 * @param  {TitleBuffer} buffer The buffer to write
 * @param  {Integer} index  The index to write to
 * @return {SMDH}        The current class
 */
SMDH.prototype.writeTitleBuffer = function (buffer, index) {
  var offset = 0x8 + (0x200 * index)
  this.buffer.fill(buffer, offset, offset + buffer.length)
  return this
}
// Get Titles ------------------------------------------------------------------

/**
 * Gets the title object from the SMDH at the specified index
 * @param  {Integer} index The title index to read
 * @return {TitleObject}
 */
SMDH.prototype.getTitle = function (index) {
  return parseTitleBuffer(this.buffer.slice(0x8 + (0x200 * index)))
}

/**
 * Gets the Japanese title object
 * @return {TitleObject}
 */
SMDH.prototype.getJapaneseTitle = function () {
  return this.getTitle(0)
}

/**
 * Gets the English title object
 * @return {TitleObject}
 */
SMDH.prototype.getEnglishTitle = function () {
  return this.getTitle(1)
}

/**
 * Gets the French title object
 * @return {TitleObject}
 */
SMDH.prototype.getFrenchTitle = function () {
  return this.getTitle(2)
}

/**
 * Gets the German title object
 * @return {TitleObject}
 */
SMDH.prototype.getGermanTitle = function () {
  return this.getTitle(3)
}

/**
 * Gets the Italian title object
 * @return {TitleObject}
 */
SMDH.prototype.getItalianTitle = function () {
  return this.getTitle(4)
}

/**
 * Gets the Spanish title object
 * @return {TitleObject}
 */
SMDH.prototype.getSpanishTitle = function () {
  return this.getTitle(5)
}

/**
 * Gets the Simplified Chinese title object
 * @return {TitleObject}
 */
SMDH.prototype.getSimplifiedChineseTitle = function () {
  return this.getTitle(6)
}

/**
 * Gets the Korean title object
 * @return {TitleObject}
 */
SMDH.prototype.getKoreanTitle = function () {
  return this.getTitle(7)
}

/**
 * Gets the Dutch title object
 * @return {TitleObject}
 */
SMDH.prototype.getDutchTitle = function () {
  return this.getTitle(8)
}

/**
 * Gets the Portuguese title object
 * @return {TitleObject}
 */
SMDH.prototype.getPortugueseTitle = function () {
  return this.getTitle(9)
}

/**
 * Gets the Russian title object
 * @return {TitleObject}
 */
SMDH.prototype.getRussianTitle = function () {
  return this.getTitle(10)
}

/**
 * Gets the Traditional Chinese title object
 * @return {TitleObject}
 */
SMDH.prototype.getTraditionalChineseTitle = function () {
  return this.getTitle(11)
}

/**
 * @typedef TitleObjects
 * @type {Object<TitleObject>}
 * @property {TitleObject} japanese The Japanese title object
 * @property {TitleObject} english The English title object
 * @property {TitleObject} french The French title object
 * @property {TitleObject} german The German title object
 * @property {TitleObject} italian The Italian title object
 * @property {TitleObject} spanish The Spanish title object
 * @property {TitleObject} simplifiedChinese The Simplified Chinese title object
 * @property {TitleObject} korean The Korean title object
 * @property {TitleObject} dutch The Dutch title object
 * @property {TitleObject} portuguese The Portuguese title object
 * @property {TitleObject} russian The Russian title object
 * @property {TitleObject} traditionalChinese The Traditional Chinese title object
 */

/**
 * Gets object with the all title objects
 * @return {TitleObjects}
 */
SMDH.prototype.getAllTitles = function () {
  return {
    japanese: this.getTitle(0),
    english: this.getTitle(1),
    french: this.getTitle(2),
    german: this.getTitle(3),
    italian: this.getTitle(4),
    spanish: this.getTitle(5),
    simplifiedChinese: this.getTitle(6),
    korean: this.getTitle(7),
    dutch: this.getTitle(8),
    portuguese: this.getTitle(9),
    russian: this.getTitle(10),
    traditionalChinese: this.getTitle(11)
  }
}
// Set Titles ------------------------------------------------------------------

/**
 * Sets the title in the SMDH for the specified index
 * @param  {Integer} index            The title index to write to
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setTitle = function (index, shortDescription, longDescription, publisher) {
  if (shortDescription.length > 0x40) {
    throw Error(`Short description can be a maximum of ${0x40} characters, you provided ${shortDescription.length}.`)
  }
  if (longDescription.length > 0x80) {
    throw Error(`Long description can be a maximum of ${0x80} characters, you provided ${longDescription.length}.`)
  }
  if (shortDescription.length > 0x40) {
    throw Error(`Publisher can be a maximum of ${0x40} characters, you provided ${publisher.length}.`)
  }
  return this.writeTitleBuffer(createTitleBuffer(shortDescription, longDescription, publisher), index)
}

/**
 * Sets the Japanese title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setJapaneseTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(0, shortDescription, longDescription, publisher)
}

/**
 * Sets the English title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setEnglishTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(1, shortDescription, longDescription, publisher)
}

/**
 * Sets the French title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setFrenchTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(2, shortDescription, longDescription, publisher)
}

/**
 * Sets the German title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setGermanTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(3, shortDescription, longDescription, publisher)
}

/**
 * Sets the Italian title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setItalianTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(4, shortDescription, longDescription, publisher)
}

/**
 * Sets the Spanish title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setSpanishTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(5, shortDescription, longDescription, publisher)
}

/**
 * Sets the Simplified Chinese title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setSimplifiedChineseTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(6, shortDescription, longDescription, publisher)
}

/**
 * Sets the Korean title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setKoreanTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(7, shortDescription, longDescription, publisher)
}

/**
 * Sets the Dutch title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setDutchTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(8, shortDescription, longDescription, publisher)
}

/**
 * Sets the Portuguese title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setPortugueseTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(9, shortDescription, longDescription, publisher)
}

/**
 * Sets the Russian title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setRussianTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(10, shortDescription, longDescription, publisher)
}

/**
 * Sets the Traditional Chinese title
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setTraditionalChineseTitle = function (shortDescription, longDescription, publisher) {
  return this.setTitle(11, shortDescription, longDescription, publisher)
}

/**
 * Sets all of the titles
 * @param  {String} shortDescription The short description, max of 64 characters
 * @param  {String} longDescription  The long description, max of 128 characters
 * @param  {String} publisher        The publisher, max of 64 characters
 * @return {SMDH}                  The current class
 */
SMDH.prototype.setAllTitles = function (shortDescription, longDescription, publisher) {
  return this
    .setJapaneseTitle(shortDescription, longDescription, publisher)
    .setEnglishTitle(shortDescription, longDescription, publisher)
    .setFrenchTitle(shortDescription, longDescription, publisher)
    .setGermanTitle(shortDescription, longDescription, publisher)
    .setItalianTitle(shortDescription, longDescription, publisher)
    .setSpanishTitle(shortDescription, longDescription, publisher)
    .setSimplifiedChineseTitle(shortDescription, longDescription, publisher)
    .setKoreanTitle(shortDescription, longDescription, publisher)
    .setDutchTitle(shortDescription, longDescription, publisher)
    .setPortugueseTitle(shortDescription, longDescription, publisher)
    .setRussianTitle(shortDescription, longDescription, publisher)
    .setTraditionalChineseTitle(shortDescription, longDescription, publisher)
}
// Get Icons -------------------------------------------------------------------

/**
 * Converts the icon bitmap buffer to a pngjs PNG object
 * @private
 * @param  {Buffer}   buffer   The tiled image bitmap buffer
 * @param  {Integer}   width    The icon width
 * @param  {Integer}   height   The icon height
 * @param  {Function} [callback] An optional node.js style callback
 * @return {Promise<pngjs.PNG>}            A pngjs PNG object
 */
SMDH.prototype.getIcon = function (buffer, width, height, callback) {
  if (typeof callback !== 'function') {
    callback = function () {}
  }
  return tileTools.convertFromTiled({
    data: buffer,
    width: width,
    height: height,
    type: 'rgb565'
  }).then(function (decoded) {
    var png = new PNG({
      width: width,
      height: height
    })

    png.data = decoded.data

    callback(null, png)
    return png
  }).catch(function (err) {
    callback(err)
  })
}

/**
 * Get the small icon image as a pngjs PNG object
 * @param  {Function} [callback] An optional node.js style callback
 * @return {Promise<PNG>}            A promise with a pngjs PNG object
 */
SMDH.prototype.getSmallIcon = function (callback) {
  return this.getIcon(this.buffer.slice(0x2040, 0x24C0), 24, 24, callback)
}

/**
 * Get the small icon image as a pngjs PNG object
 * @param  {Function} [callback] An optional node.js style callback
 * @return {Promise<PNG>}            A promise with a pngjs PNG object
 */
SMDH.prototype.getLargeIcon = function (callback) {
  if (typeof callback !== 'function') {
    callback = function () {}
  }
  return this.getIcon(this.buffer.slice(0x24C0, 0x36C0), 48, 48, callback)
}

// Set Icons -------------------------------------------------------------------

/**
 * @typedef BitmapObject
 * @type {Object}
 * @property {Buffer} data Raw RGBA bitmap data buffer
 * @property {Integer} width Image width
 * @property {Integer} height Image height
 */

/**
 * Sets the icon specified with iconSize
 * @param  {BitmapObject}   bitmap   A pngjs PNG-like object with RGBA bitmap data, width, and height. Must be either 24x24 or 48x48.
 * @param  {Integer}  iconSize The destination icon size, 24 sets the small icon, and 48 sets the large icon
 * @param  {Function} [callback] An optional node.js style callback
 * @return {Promise<Buffer>} The current SMDH buffer
 */
SMDH.prototype.setIcon = function (bitmap, iconSize, callback) {
  if (typeof callback !== 'function') {
    callback = function () {}
  }
  return new Promise(function (resolve, reject) {
    var error
    if (bitmap.width !== bitmap.height) {
      error = Error('Image not square')
      callback(error)
      reject(error)
      return
    }
    if (iconSize !== 24 && iconSize !== 48) {
      error = Error('Invalid iconSize, please choose 24 or 48')
      callback(error)
      reject(error)
      return
    }
    var image = (new Jimp(0, 0, function (err, image) {
      if (err) {
        callback(err)
        reject(err)
        return
      }
      image.bitmap.width = bitmap.width
      image.bitmap.height = bitmap.height
      image.bitmap.data = bitmap.data
      if (bitmap.width !== iconSize) {
        console.log(`resizing from ${bitmap.width} to ${iconSize}`)
        image.resize(iconSize, iconSize)
      }
      var offset = (iconSize === 24 ? 0x2040 : 0x24C0)

      tileTools.convertToTiled({
        data: image.bitmap.data,
        width: image.bitmap.width,
        height: image.bitmap.height,
        type: 'rgb565'
      }).then(function (data) {
        resolve(this.buffer.fill(data.data, offset, offset + data.data.length))
      }.bind(this)).catch(function (err) {
        callback(err)
        reject(err)
      })
    }.bind(this)))
  }.bind(this))
}

/**
 * Sets both the small and large icons
 * @param  {BitmapObject} bitmap A square bitmap object
 * @param  {Function} [callback] An optional node.js style callback
 * @return {Promise<buffer>}     The current SMDH data buffer
 */
SMDH.prototype.setIcons = function (bitmap, callback) {
  if (typeof callback !== 'function') {
    callback = function () {}
  }
  if (bitmap.height !== bitmap.width) {
    var error = Error('Image not square')
    callback(error)
    return Promise.reject(error)
  }
  return new Promise(function (resolve, reject) {
    Promise.all([
      this.setIcon(bitmap, 48),
      this.setIcon(bitmap, 24)
    ]).then(function (data) {
      callback(null, data[1])
      resolve(data[1])
    }).catch(function (err) {
      callback(err)
      reject(err)
    })
  }.bind(this))
}

// Buffer retrieval

/**
 * Gets the current SMDH buffer
 * @return {Buffer} The SMDH data buffer
 */
SMDH.prototype.getBuffer = function () {
  return this.buffer
}

// Class Init ------------------------------------------------------------------

/**
 * A class for reading and writing 3DS SMDH data.
 * @class
 * @param       {Buffer} [buffer] An existing SMDH buffer to load
 * @constructor
 */
function SMDH (buffer) {
  if (Buffer.isBuffer(buffer)) {
    if (buffer.length === 0x36C0) {
      this.buffer = buffer
    } else {
      throw Error('Invalid SMDH buffer size')
    }
  } else {
    this.buffer = Buffer.concat([
      Buffer.from('SMDH'),
      Buffer.alloc(0x04),
      Buffer.alloc(0x36B8)
    ])
  }
}

module.exports = exports = SMDH
