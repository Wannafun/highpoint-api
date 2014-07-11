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
    '<h2>Получение списка поинтов</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/points</div></div><table class=\'params\'><caption>GET параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>afterPointId</code></td><td><code>uint=</code></td><td><p>Идентификатор <a href="',
    this.routePath('datatypes'), // @27:35
    '#Point">поинта</a>, после которого произвести выборку.</p>Допустим, в БД содержится список: <code>1,2,3,4,5,6</code>. При запросе возвращается: <code>1,2,3</code>. Чтобы получить следующие поинты (<code>4,5,6</code>), необходимо задать параметр <code>afterPointId=3</code>.</td></tr><tr><td><code>cityIds</code></td><td><code>string=</code></td><td>Список идентификаторов <a href="',
    this.routePath('datatypes'), // @34:43
    '#City">городов</a>, разделенных запятыми. Например: <code>156,334</code></td></tr><tr><td><code>genders</code></td><td><code>string=</code></td><td>Список <a href="',
    this.routePath('datatypes'), // @39:27
    '#Gender">полов</a> пользователей, создавших поинты, разделенных запятыми. Например: <code>1,2</code></td></tr><tr><td><code>maxAge</code></td><td><code>uint=</code></td><td>Максимальный возраст пользователей, создавших поинты</td></tr><tr><td><code>minAge</code></td><td><code>uint=</code></td><td>Минимальный возраст пользователей, создавших поинты</td></tr><tr><td><code>includeUsers</code></td><td><code>1|0=</code></td><td>Если <code>1</code>, добавить в результат пользователей</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    points: Array.&lt;<a href="',
    this.routePath('datatypes'), // @62:32
    '#Point">Point</a>&gt;,\n    users: Object.&lt;<a href="',
    this.routePath('datatypes'), // @63:32
    '#User">User</a>&gt;=\n  }\n}</pre><p>Если задан GET параметр <code>includeUsers=1</code>, в ответе возвращаются пользователи, создавшие поинты. Ключом является идентификатор поинта, значением — объект пользователя.</p><h2>Лайк поинта</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/points/&lt;id&gt;/like</div></div><table class=\'params\'><caption>Параметры адреса</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>uint</code></td><td>Идентификатор поинта</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: true\n}</pre><h2>Анлайк поинта</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/points/&lt;id&gt;/unlike</div></div><table class=\'params\'><caption>Параметры адреса</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>uint</code></td><td>Идентификатор поинта</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: true\n}</pre>'
  );
}; // @126:1

module.exports = Page;
