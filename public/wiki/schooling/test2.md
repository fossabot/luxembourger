# react-markdown

Renders Markdown as pure React components.

[![npm version](https://img.shields.io/npm/v/react-markdown.svg?style=flat-square)](http://browsenpm.org/package/react-markdown)[![Build Status](https://img.shields.io/travis/rexxars/react-markdown/master.svg?style=flat-square)](https://travis-ci.org/rexxars/react-markdown)

Demo available at https://rexxars.github.io/react-markdown/

---

react-markdown is proudly sponsored by

<a href="https://www.sanity.io/?utm_source=GitHub&utm_campaign=react-markdown" rel="nofollow" target="_blank">
  <img src="https://www.sanity.io/static/images/logo_red.svg?v=2" width="300"><br />
  Sanity: The Headless CMS Construction Kit
</a>

---

## Installing

```
npm install --save react-markdown
```

## Basic usage

```js
const React = require('react')
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

ReactDOM.render(
  <ReactMarkdown source={input} />,
  document.getElementById('container')
)
```