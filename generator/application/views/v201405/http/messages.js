// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
"use strict";
var inherits = require('util').inherits;
var LayoutTemplate = require('../../layout');

var Page = function (opt_data, opt_ctx, opt_writer) {
  LayoutTemplate.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Page, LayoutTemplate);


Page.prototype.renderBlockContentInternal = function () { // @7:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<h2>Список непрочитанных сообщений</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/messages/unread</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @12:40
    '#signin">авторизация</a></div></div><p>Ответ:</p><pre js>{\n  data: {\n    messages: Array.&lt;<a href="',
    this.routePath('datatypes'), // @18:34
    '#Message">Message</a>&gt;\n  }\n}</pre><p>Список сообщений сортируется от старых к новым.</p>'
  );
}; // @23:1

module.exports = Page;
