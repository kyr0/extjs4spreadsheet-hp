Ext.data.JsonP.Spread_data_DataMatrix({"extends":"Ext.Base","enum":null,"html_meta":{"private":null},"meta":{"private":true},"linenr":1,"inheritable":null,"aliases":{},"singleton":true,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"DataMatrix.html#Spread-data-DataMatrix","filename":"DataMatrix.js"}],"mixedInto":[],"superclasses":["Ext.Base"],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"Spread.data.DataMatrix","name":"getFieldNameForColumnIndex","id":"method-getFieldNameForColumnIndex","tagname":"method"},{"meta":{},"owner":"Spread.data.DataMatrix","name":"getValueOfPosition","id":"method-getValueOfPosition","tagname":"method"},{"meta":{},"owner":"Spread.data.DataMatrix","name":"setValueForPosition","id":"method-setValueForPosition","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"code_type":"ext_define","private":true,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Spread.data.DataMatrix</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DataMatrix.html#Spread-data-DataMatrix' target='_blank'>DataMatrix.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Internal class for data matrix operation logic.\nImplements methods for changing data/reading data of grid cells/records.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFieldNameForColumnIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.data.DataMatrix'>Spread.data.DataMatrix</span><br/><a href='source/DataMatrix.html#Spread-data-DataMatrix-method-getFieldNameForColumnIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.data.DataMatrix-method-getFieldNameForColumnIndex' class='name expandable'>getFieldNameForColumnIndex</a>( <span class='pre'>view, columnIndex</span> ) : String</div><div class='description'><div class='short'>Get field name for column index by fetching the dataIndex\nof a given column index from column header container of the...</div><div class='long'><p>Get field name for column index by fetching the dataIndex\nof a given column index from column header container of the view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>View instance</p>\n</div></li><li><span class='pre'>columnIndex</span> : Number<div class='sub-desc'><p>Column index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValueOfPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.data.DataMatrix'>Spread.data.DataMatrix</span><br/><a href='source/DataMatrix.html#Spread-data-DataMatrix-method-getValueOfPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.data.DataMatrix-method-getValueOfPosition' class='name expandable'>getValueOfPosition</a>( <span class='pre'>position</span> ) : Mixed</div><div class='description'><div class='short'>Returns the value of a cell identified by row and column index. ...</div><div class='long'><p>Returns the value of a cell identified by row and column index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : <a href=\"#!/api/Spread.selection.Position\" rel=\"Spread.selection.Position\" class=\"docClass\">Spread.selection.Position</a><div class='sub-desc'><p>Position reference</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValueForPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.data.DataMatrix'>Spread.data.DataMatrix</span><br/><a href='source/DataMatrix.html#Spread-data-DataMatrix-method-setValueForPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.data.DataMatrix-method-setValueForPosition' class='name expandable'>setValueForPosition</a>( <span class='pre'>position, newValue, [autoCommit], [useInternalAPIs]</span> ) : String[]</div><div class='description'><div class='short'>Sets a new value of a cell identified by row and column index. ...</div><div class='long'><p>Sets a new value of a cell identified by row and column index.\nReturns, what Ext.data.Model's set() returns.\n(An array of modified field names or null if nothing was modified)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : <a href=\"#!/api/Spread.selection.Position\" rel=\"Spread.selection.Position\" class=\"docClass\">Spread.selection.Position</a><div class='sub-desc'><p>Position reference</p>\n</div></li><li><span class='pre'>newValue</span> : Mixed<div class='sub-desc'><p>New cell value</p>\n</div></li><li><span class='pre'>autoCommit</span> : Boolean (optional)<div class='sub-desc'><p>Should the record be automatically committed after change</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>useInternalAPIs</span> : Boolean (optional)<div class='sub-desc'><p>Force to use the internal Model API's</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Spread.data.DataMatrix","uses":[],"id":"class-Spread.data.DataMatrix","tagname":"class","requires":[]});