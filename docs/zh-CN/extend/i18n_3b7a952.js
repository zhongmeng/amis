amis.define('docs/zh-CN/extend/i18n.md', function(require, exports, module, define) {

  module.exports = {
    "title": "多语言",
    "html": "<div class=\"markdown-body\"><p>amis 内置对英文的支持，同时你也可以扩展其他语言。</p>\n<h2><a class=\"anchor\" name=\"js-sdk\" href=\"#js-sdk\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JS SDK</h2><p>从 1.1.0 版本开始已经自带英文翻译，所以只需要在 props 里设置 locale 即可。</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amisScoped <span class=\"token operator\">=</span> amis<span class=\"token punctuation\">.</span><span class=\"token function\">embed</span><span class=\"token punctuation\">(</span>\n  <span class=\"token string\">'#root'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'表单页面'</span><span class=\"token punctuation\">,</span>\n    body<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n      mode<span class=\"token operator\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n      api<span class=\"token operator\">:</span> <span class=\"token string\">'/saveForm'</span><span class=\"token punctuation\">,</span>\n      controls<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n          type<span class=\"token operator\">:</span> <span class=\"token string\">'text'</span><span class=\"token punctuation\">,</span>\n          name<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    locale<span class=\"token operator\">:</span> <span class=\"token string\">'en'</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n<h2><a class=\"anchor\" name=\"react\" href=\"#react\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>React</h2><p>React 中没有内置英文版本，需要自己 import，使用如下方法：</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token string\">'amis/lib/locale/en'</span><span class=\"token punctuation\">;</span></code></pre>\n<p>在渲染 amis 组件的时候设置 locale 为 en</p>\n<pre><code class=\"language-javascript\"><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">renderAmis</span><span class=\"token punctuation\">(</span>\n    <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n      title<span class=\"token operator\">:</span> <span class=\"token string\">'简单页面'</span><span class=\"token punctuation\">,</span>\n      body<span class=\"token operator\">:</span> <span class=\"token string\">'内容'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      locale<span class=\"token operator\">:</span> <span class=\"token string\">'en'</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<h2><a class=\"anchor\" name=\"%E6%89%A9%E5%B1%95%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80\" href=\"#%E6%89%A9%E5%B1%95%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>扩展其它语言</h2><p>如果想扩展其他语言，首先参考 <code>https://github.com/baidu/amis/blob/master/src/locale/en.ts</code> 文件，了解需要翻译哪些文字，以中文为 key，然后参考后面的示例注册新语言，未翻译的文字都将使用默认语言，即中文。</p>\n<blockquote>\n<p>目前这种方式将会在未来修改，为了支持更多语言而不再使用中文为 key</p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" href=\"#js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JS SDK 扩展方法</h3><pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amisLib <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\namisLib<span class=\"token punctuation\">.</span><span class=\"token function\">registerLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'jp'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  提交<span class=\"token operator\">:</span> <span class=\"token string\">'送信'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n<h3><a class=\"anchor\" name=\"react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" href=\"#react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>React 扩展方法</h3><pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>registerLocale<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'amis'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'jp'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  提交<span class=\"token operator\">:</span> <span class=\"token string\">'送信'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "JS SDK",
          "fragment": "js-sdk",
          "fullPath": "#js-sdk",
          "level": 2
        },
        {
          "label": "React",
          "fragment": "react",
          "fullPath": "#react",
          "level": 2
        },
        {
          "label": "扩展其它语言",
          "fragment": "%E6%89%A9%E5%B1%95%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80",
          "fullPath": "#%E6%89%A9%E5%B1%95%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80",
          "level": 2,
          "children": [
            {
              "label": "JS SDK 扩展方法",
              "fragment": "js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "fullPath": "#js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "level": 3
            },
            {
              "label": "React 扩展方法",
              "fragment": "react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "fullPath": "#react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});