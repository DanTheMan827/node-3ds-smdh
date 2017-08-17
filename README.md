# 3ds-smdh
Reads and writes Nintendo 3DS SMDH files

# API Reference
## Classes

<dl>
<dt><a href="#SMDH">SMDH</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TitleObject">TitleObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TitleBuffer">TitleBuffer</a> : <code>Buffer</code></dt>
<dd><p>A Buffer object that is exactly 0x200 bytes long</p>
</dd>
<dt><a href="#TitleObjects">TitleObjects</a> : <code><a href="#TitleObject">Object.&lt;TitleObject&gt;</a></code></dt>
<dd></dd>
<dt><a href="#BitmapObject">BitmapObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="SMDH"></a>

## SMDH
**Kind**: global class  

* [SMDH](#SMDH)
    * [new SMDH([buffer])](#new_SMDH_new)
    * [.writeTitleBuffer(buffer, index)](#SMDH+writeTitleBuffer) ⇒ [<code>SMDH</code>](#SMDH)
    * [.getTitle(index)](#SMDH+getTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getJapaneseTitle()](#SMDH+getJapaneseTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getEnglishTitle()](#SMDH+getEnglishTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getFrenchTitle()](#SMDH+getFrenchTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getGermanTitle()](#SMDH+getGermanTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getItalianTitle()](#SMDH+getItalianTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getSpanishTitle()](#SMDH+getSpanishTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getSimplifiedChineseTitle()](#SMDH+getSimplifiedChineseTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getKoreanTitle()](#SMDH+getKoreanTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getDutchTitle()](#SMDH+getDutchTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getPortugueseTitle()](#SMDH+getPortugueseTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getRussianTitle()](#SMDH+getRussianTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getTraditionalChineseTitle()](#SMDH+getTraditionalChineseTitle) ⇒ [<code>TitleObject</code>](#TitleObject)
    * [.getAllTitles()](#SMDH+getAllTitles) ⇒ [<code>TitleObjects</code>](#TitleObjects)
    * [.setTitle(index, shortDescription, longDescription, publisher)](#SMDH+setTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setJapaneseTitle(shortDescription, longDescription, publisher)](#SMDH+setJapaneseTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setEnglishTitle(shortDescription, longDescription, publisher)](#SMDH+setEnglishTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setFrenchTitle(shortDescription, longDescription, publisher)](#SMDH+setFrenchTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setGermanTitle(shortDescription, longDescription, publisher)](#SMDH+setGermanTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setItalianTitle(shortDescription, longDescription, publisher)](#SMDH+setItalianTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setSpanishTitle(shortDescription, longDescription, publisher)](#SMDH+setSpanishTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setSimplifiedChineseTitle(shortDescription, longDescription, publisher)](#SMDH+setSimplifiedChineseTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setKoreanTitle(shortDescription, longDescription, publisher)](#SMDH+setKoreanTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setDutchTitle(shortDescription, longDescription, publisher)](#SMDH+setDutchTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setPortugueseTitle(shortDescription, longDescription, publisher)](#SMDH+setPortugueseTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setRussianTitle(shortDescription, longDescription, publisher)](#SMDH+setRussianTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setTraditionalChineseTitle(shortDescription, longDescription, publisher)](#SMDH+setTraditionalChineseTitle) ⇒ [<code>SMDH</code>](#SMDH)
    * [.setAllTitles(shortDescription, longDescription, publisher)](#SMDH+setAllTitles) ⇒ [<code>SMDH</code>](#SMDH)
    * [.getSmallIcon([callback])](#SMDH+getSmallIcon) ⇒ <code>Promise.&lt;PNG&gt;</code>
    * [.getLargeIcon([callback])](#SMDH+getLargeIcon) ⇒ <code>Promise.&lt;PNG&gt;</code>
    * [.setIcon(bitmap, iconSize, [callback])](#SMDH+setIcon) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.setIcons(bitmap, [callback])](#SMDH+setIcons) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.getBuffer()](#SMDH+getBuffer) ⇒ <code>Buffer</code>

<a name="new_SMDH_new"></a>

### new SMDH([buffer])
A class for reading and writing 3DS SMDH data.


| Param | Type | Description |
| --- | --- | --- |
| [buffer] | <code>Buffer</code> | An existing SMDH buffer to load |

<a name="SMDH+writeTitleBuffer"></a>

### smdH.writeTitleBuffer(buffer, index) ⇒ [<code>SMDH</code>](#SMDH)
Writes the title buffer to the SMDH buffer at the specified index

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| buffer | [<code>TitleBuffer</code>](#TitleBuffer) | The buffer to write |
| index | <code>Integer</code> | The index to write to |

<a name="SMDH+getTitle"></a>

### smdH.getTitle(index) ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the title object from the SMDH at the specified index

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Integer</code> | The title index to read |

<a name="SMDH+getJapaneseTitle"></a>

### smdH.getJapaneseTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Japanese title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getEnglishTitle"></a>

### smdH.getEnglishTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the English title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getFrenchTitle"></a>

### smdH.getFrenchTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the French title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getGermanTitle"></a>

### smdH.getGermanTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the German title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getItalianTitle"></a>

### smdH.getItalianTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Italian title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getSpanishTitle"></a>

### smdH.getSpanishTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Spanish title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getSimplifiedChineseTitle"></a>

### smdH.getSimplifiedChineseTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Simplified Chinese title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getKoreanTitle"></a>

### smdH.getKoreanTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Korean title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getDutchTitle"></a>

### smdH.getDutchTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Dutch title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getPortugueseTitle"></a>

### smdH.getPortugueseTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Portuguese title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getRussianTitle"></a>

### smdH.getRussianTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Russian title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getTraditionalChineseTitle"></a>

### smdH.getTraditionalChineseTitle() ⇒ [<code>TitleObject</code>](#TitleObject)
Gets the Traditional Chinese title object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+getAllTitles"></a>

### smdH.getAllTitles() ⇒ [<code>TitleObjects</code>](#TitleObjects)
Gets object with the all title objects

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
<a name="SMDH+setTitle"></a>

### smdH.setTitle(index, shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the title in the SMDH for the specified index

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Integer</code> | The title index to write to |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setJapaneseTitle"></a>

### smdH.setJapaneseTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Japanese title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setEnglishTitle"></a>

### smdH.setEnglishTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the English title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setFrenchTitle"></a>

### smdH.setFrenchTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the French title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setGermanTitle"></a>

### smdH.setGermanTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the German title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setItalianTitle"></a>

### smdH.setItalianTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Italian title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setSpanishTitle"></a>

### smdH.setSpanishTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Spanish title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setSimplifiedChineseTitle"></a>

### smdH.setSimplifiedChineseTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Simplified Chinese title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setKoreanTitle"></a>

### smdH.setKoreanTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Korean title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setDutchTitle"></a>

### smdH.setDutchTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Dutch title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setPortugueseTitle"></a>

### smdH.setPortugueseTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Portuguese title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setRussianTitle"></a>

### smdH.setRussianTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Russian title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setTraditionalChineseTitle"></a>

### smdH.setTraditionalChineseTitle(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets the Traditional Chinese title

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+setAllTitles"></a>

### smdH.setAllTitles(shortDescription, longDescription, publisher) ⇒ [<code>SMDH</code>](#SMDH)
Sets all of the titles

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: [<code>SMDH</code>](#SMDH) - The current class  

| Param | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description, max of 64 characters |
| longDescription | <code>String</code> | The long description, max of 128 characters |
| publisher | <code>String</code> | The publisher, max of 64 characters |

<a name="SMDH+getSmallIcon"></a>

### smdH.getSmallIcon([callback]) ⇒ <code>Promise.&lt;PNG&gt;</code>
Get the small icon image as a pngjs PNG object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: <code>Promise.&lt;PNG&gt;</code> - A promise with a pngjs PNG object  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | An optional node.js style callback |

<a name="SMDH+getLargeIcon"></a>

### smdH.getLargeIcon([callback]) ⇒ <code>Promise.&lt;PNG&gt;</code>
Get the small icon image as a pngjs PNG object

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: <code>Promise.&lt;PNG&gt;</code> - A promise with a pngjs PNG object  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | An optional node.js style callback |

<a name="SMDH+setIcon"></a>

### smdH.setIcon(bitmap, iconSize, [callback]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Sets the icon specified with iconSize

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - The current SMDH buffer  

| Param | Type | Description |
| --- | --- | --- |
| bitmap | [<code>BitmapObject</code>](#BitmapObject) | A pngjs PNG-like object with RGBA bitmap data, width, and height. Must be either 24x24 or 48x48. |
| iconSize | <code>Integer</code> | The destination icon size, 24 sets the small icon, and 48 sets the large icon |
| [callback] | <code>function</code> | An optional node.js style callback |

<a name="SMDH+setIcons"></a>

### smdH.setIcons(bitmap, [callback]) ⇒ <code>Promise.&lt;buffer&gt;</code>
Sets both the small and large icons

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The current SMDH data buffer  

| Param | Type | Description |
| --- | --- | --- |
| bitmap | [<code>BitmapObject</code>](#BitmapObject) | A square bitmap object |
| [callback] | <code>function</code> | An optional node.js style callback |

<a name="SMDH+getBuffer"></a>

### smdH.getBuffer() ⇒ <code>Buffer</code>
Gets the current SMDH buffer

**Kind**: instance method of [<code>SMDH</code>](#SMDH)  
**Returns**: <code>Buffer</code> - The SMDH data buffer  
<a name="TitleObject"></a>

## TitleObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shortDescription | <code>String</code> | The short description |
| longDescription | <code>String</code> | The long description |
| publisher | <code>String</code> | The publisher |

<a name="TitleBuffer"></a>

## TitleBuffer : <code>Buffer</code>
A Buffer object that is exactly 0x200 bytes long

**Kind**: global typedef  
<a name="TitleObjects"></a>

## TitleObjects : [<code>Object.&lt;TitleObject&gt;</code>](#TitleObject)
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| japanese | [<code>TitleObject</code>](#TitleObject) | The Japanese title object |
| english | [<code>TitleObject</code>](#TitleObject) | The English title object |
| french | [<code>TitleObject</code>](#TitleObject) | The French title object |
| german | [<code>TitleObject</code>](#TitleObject) | The German title object |
| italian | [<code>TitleObject</code>](#TitleObject) | The Italian title object |
| spanish | [<code>TitleObject</code>](#TitleObject) | The Spanish title object |
| simplifiedChinese | [<code>TitleObject</code>](#TitleObject) | The Simplified Chinese title object |
| korean | [<code>TitleObject</code>](#TitleObject) | The Korean title object |
| dutch | [<code>TitleObject</code>](#TitleObject) | The Dutch title object |
| portuguese | [<code>TitleObject</code>](#TitleObject) | The Portuguese title object |
| russian | [<code>TitleObject</code>](#TitleObject) | The Russian title object |
| traditionalChinese | [<code>TitleObject</code>](#TitleObject) | The Traditional Chinese title object |

<a name="BitmapObject"></a>

## BitmapObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Buffer</code> | Raw RGBA bitmap data buffer |
| width | <code>Integer</code> | Image width |
| height | <code>Integer</code> | Image height |

