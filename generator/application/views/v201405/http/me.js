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
    '<h2>Получение данных о пользователе</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/me</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @12:40
    '#signin">авторизация</a></div></div><p>Ответ:</p><pre js>{\n  data: {\n    user: <a href="',
    this.routePath('datatypes'), // @18:20
    '#MyUser">MyUser</a>',
    '\n  ', // @18:71
    '}\n}</pre><h2>Получение настроек текущего пользователя</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/me/settings</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @27:40
    '#signin">авторизация</a></div></div><p>Ответ:</p><pre js>{\n  data: {\n    settings: <a href="',
    this.routePath('datatypes'), // @33:24
    '#MySettings">MySettings</a>',
    '\n  ', // @33:83
    '}\n}</pre><h2>Обновление настроек фильтра текущего пользователя</h2><div class=\'request\'><div class=\'method\'>PUT</div><div class=\'path\'>/v201405/me/settings/filter</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @42:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>PUT параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>cityIds</code></td><td><code>Array.&lt;uint&gt;=</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @57:35
    '#City">городов</a></td></tr><tr><td><code>genders</code></td><td><code>Array.&lt;<a href="',
    this.routePath('datatypes'), // @61:36
    '#Gender">Gender</a>&gt;=</code></td><td>Пол</td></tr><tr><td><code>maxAge</code></td><td><code>uint=</code></td><td>Максимальный возраст</td></tr><tr><td><code>minAge</code></td><td><code>uint=</code></td><td>Минимальный возраст</td></tr><tr><td><code>viewType</code></td><td><code><a href="',
    this.routePath('datatypes'), // @76:26
    '#FilterViewType">FilterViewType</a>=</code></td><td>Режим просмотра пользователей</td></tr></tbody></table><p>Ответ:</p><pre js>{}</pre>'
  );
}; // @85:1

module.exports = Page;