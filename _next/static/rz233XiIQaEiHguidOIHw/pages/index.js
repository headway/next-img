(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("MX0m"),i=n.n(a),s=n("q1tI"),r=n.n(s),l=n("YFqc"),o=n.n(l),c=r.a.createElement;function p(e){var t=e.children;return c("div",{className:"jsx-3198522465"},c("div",{className:"jsx-3198522465 header"},c("div",{className:"jsx-3198522465 header-inner"},c("div",{className:"jsx-3198522465"},c(o.a,{href:"/"},c("a",{className:"jsx-3198522465"},c("img",{src:"https://user-images.githubusercontent.com/324440/84085849-5f9a4100-a9de-11ea-94c4-bbfbdc8a0a16.png",alt:"next-img",title:"next-img",width:"200",className:"jsx-3198522465"})))),c("ul",{className:"jsx-3198522465 nav"},c("li",{className:"jsx-3198522465"},c(o.a,{href:"/"},c("a",{className:"jsx-3198522465"},"Intro"))),c("li",{className:"jsx-3198522465"},c(o.a,{href:"/usage"},c("a",{className:"jsx-3198522465"},"Usage"))),c("li",{className:"jsx-3198522465"},c(o.a,{href:"/reference"},c("a",{className:"jsx-3198522465"},"Reference"))),c("li",{className:"jsx-3198522465"},c(o.a,{href:"/examples"},c("a",{className:"jsx-3198522465"},"Examples")))))),c("div",{class:"content",className:"jsx-3198522465"},t),c(i.a,{id:"3198522465"},[".header.jsx-3198522465{background:#f9f7f0;border-bottom:1px solid #382fc510;}",".header-inner.jsx-3198522465{max-width:780px;margin:auto;padding:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".nav.jsx-3198522465{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;}",".nav.jsx-3198522465 a.jsx-3198522465{display:block;padding:8px 20px;-webkit-text-decoration:none;text-decoration:none;border-radius:4px;-webkit-transition:all 200ms;transition:all 200ms;color:#382fc5;}",".nav.jsx-3198522465 a.jsx-3198522465:hover{background:#382fc510;}"]))}},Ff2n:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return a}))},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),i=n.n(a),s=n("q1tI"),r=n.n(s),l=n("7oih"),o=n("wx14"),c=n("Ff2n"),p=n("7ljp"),b=(r.a.createElement,{}),u="wrapper";function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(p.b)(u,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{align:"center",style:{marginTop:0,marginBottom:"180px"}},"Next.js plugin for embedding optimized images"),Object(p.b)("h2",null,"Features"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"import")," png/jpg images"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"resize")," to multiple screen sizes and densities"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"modernize")," by converting to webp format"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"optimize")," file sizes using ",Object(p.b)("inlineCode",{parentName:"li"},"sharp")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"streamlined usage")," with the built in ",Object(p.b)("inlineCode",{parentName:"li"},"<Picture />")," component"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"art direction")," with different images for different breakpoints"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"fast")," deployment and development workflow using persistent cache")),Object(p.b)("p",null,"By default ",Object(p.b)("strong",{parentName:"p"},"next-img")," is configured to use:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"1 breakpoint at ",Object(p.b)("inlineCode",{parentName:"li"},"768px")),Object(p.b)("li",{parentName:"ul"},"2 pixel densities of 1x, 2x"),Object(p.b)("li",{parentName:"ul"},"to output the original and webp formats")),Object(p.b)("p",null,"All of these settings and more can be changed in your ",Object(p.b)("inlineCode",{parentName:"p"},"next.config.js")," or in the individual image imports."),Object(p.b)("p",null,"Developed and used by ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"https://humaans.io/"}),"Humaans"),"."),Object(p.b)("h2",null,"Motivation"),Object(p.b)("p",null,"By default Next.js or Webpack doesn't help you much with optimizing images. This means custom configuration or scripting, processing images by hand, using an image CDN or not optimising images at all. ",Object(p.b)("strong",{parentName:"p"},"next-img")," provides and alternative streamlined approach for adding images to your Next.js projects. It combines a Next.js plugin, a custom webpack loader and a React component to make serving images in an optimal fashion in a way that is almost as easy as typing ",Object(p.b)("inlineCode",{parentName:"p"},"<img src='foo.png' />"),"."),Object(p.b)("p",null,"In short, it takes the following:"),Object(p.b)("pre",null,Object(p.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Picture src={require('./images/jelly.jpg?sizes=375,800')} />\n")),Object(p.b)("p",null,"Imports, resizes, optimizes, caches (persistently in the git repo) and outputs the following HTML:"),Object(p.b)("pre",null,Object(p.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<picture>\n  <source\n    type="image/webp"\n    srcset="\n      /_next/static/images/jelly-375@1x-5e609945b16eba99bf2aaa3007d3ba92.webp  375w,\n      /_next/static/images/jelly-375@2x-850e7fd87fceda1e7cefcb628a07f5c4.webp  750w,\n      /_next/static/images/jelly-800@1x-1481a104c8ce38822aeafdbe97a17e69.webp  800w,\n      /_next/static/images/jelly-800@2x-fc18765bd3b819714ca2da58e10907c9.webp 1600w\n    "\n    sizes="(max-width: 768px) 375px, 800px"\n  />\n  <source\n    type="image/jpeg"\n    srcset="\n      /_next/static/images/jelly-375@1x-259e4b1f32b3bdd4349806c4a5763a54.jpg  375w,\n      /_next/static/images/jelly-375@2x-295d4cc8111d4e911dbc9ad4dd1d8322.jpg  750w,\n      /_next/static/images/jelly-800@1x-090d866969aba9b237e71ee52512a7c4.jpg  800w,\n      /_next/static/images/jelly-800@2x-33f1639cadf8c4c5f19eb5c19e20a67d.jpg 1600w\n    "\n    sizes="(max-width: 768px) 375px, 800px"\n  />\n\n  <img\n    src="/_next/static/images/jelly-375@1x-259e4b1f32b3bdd4349806c4a5763a54.jpg"\n    srcset="\n      /_next/static/images/jelly-375@1x-259e4b1f32b3bdd4349806c4a5763a54.jpg  375w,\n      /_next/static/images/jelly-375@2x-295d4cc8111d4e911dbc9ad4dd1d8322.jpg  750w,\n      /_next/static/images/jelly-800@1x-090d866969aba9b237e71ee52512a7c4.jpg  800w,\n      /_next/static/images/jelly-800@2x-33f1639cadf8c4c5f19eb5c19e20a67d.jpg 1600w\n    "\n  />\n</picture>\n')),Object(p.b)("h2",null,"Future"),Object(p.b)("p",null,"Short term roadmap:"),Object(p.b)("h3",null,"V1:"),Object(p.b)("ul",{className:"contains-task-list"},Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Allow different config for ",Object(p.b)("inlineCode",{parentName:"li"},"jpg->webp")," and ",Object(p.b)("inlineCode",{parentName:"li"},"png->webp")," conversions"),Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow turning ",Object(p.b)("inlineCode",{parentName:"li"},"webp/jpg/png")," output off"),Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add ",Object(p.b)("inlineCode",{parentName:"li"},"?raw")," query support that doesn\u2019t process the image in any way"),Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Remove the need for ",Object(p.b)("inlineCode",{parentName:"li"},"next-img")," command by plugging directly into ",Object(p.b)("inlineCode",{parentName:"li"},"next build")," via webpack plugin")),Object(p.b)("h3",null,"V2:"),Object(p.b)("ul",{className:"contains-task-list"},Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add support for css images, in addition to the html images"),Object(p.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(p.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Inline small images")),Object(p.b)("p",null,"And some ideas for where this project could be taken in the future:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Allow adding ",Object(p.b)("inlineCode",{parentName:"li"},"imagemin")," optimisation plugins into the pipeline via config. This way users can control how to optimise their images more granuarly."),Object(p.b)("li",{parentName:"ul"},"Translate relative sizes ",Object(p.b)("inlineCode",{parentName:"li"},"?sizes=100vw,50vw,900px"),' to pixels based on the breakpoint configuration, this would allow dynamic kind of imports that depend on your design system and relative sizing of images, e.g. if css says "50vw", you will not need to do that calculation manually.'),Object(p.b)("li",{parentName:"ul"},"Debug mode that prints image sizes into images themselves, so you can see what's shown when right in the browser inside images (or overlaying them using js at runtime)."),Object(p.b)("li",{parentName:"ul"},"Babel parser that analyses code for images to avoid the need to ",Object(p.b)("inlineCode",{parentName:"li"},"require()"),"."),Object(p.b)("li",{parentName:"ul"},"Optimize file read/write/hash operations to the maximum for improved performance."),Object(p.b)("li",{parentName:"ul"},"A puppeteer script to render the website in all predefined breakpoints and automatically analyses all image sizes required."),Object(p.b)("li",{parentName:"ul"},"Add support for gif and webp as source images.")))}m.isMDXComponent=!0;var d=r.a.createElement;t.default=function(){return d(l.a,null,d("div",{className:"jsx-3995076446 intro"},d("div",{className:"jsx-3995076446 container"},d(m,null))),d(i.a,{id:"3995076446"},[".intro.jsx-3995076446{background:#f9f7f0;padding:160px 0;}",".container.jsx-3995076446{max-width:780px;margin:auto;}"]))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("lwsE"),i=n("W8MJ"),s=n("7W2i"),r=n("a1gu"),l=n("Nsbk");function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("TqRt"),p=n("284h");t.__esModule=!0,t.default=void 0;var b,u=p(n("q1tI")),m=n("QmWs"),d=n("g/15"),f=c(n("nOHt")),j=n("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var h=new Map,x=window.IntersectionObserver,O={};function w(){return b||(x?b=new x((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){s(c,e);var t,n=(t=c,function(){var e,n=l(t);if(o()){var a=l(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return r(this,e)});function c(e){var t;return a(this,c),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,a=null;return function(i,s){if(a&&i===t&&s===n)return a;var r=e(i,s);return t=i,n=s,a=r,r}}((function(e,t){return{href:(0,j.addBasePath)(g(e)),as:t?(0,j.addBasePath)(g(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,i=n.target;if("A"!==a||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),r=s.href,l=s.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var o=window.location.pathname;r=(0,m.resolve)(o,r),l=l?(0,m.resolve)(o,l):r,e.preventDefault();var c=t.props.scroll;null==c&&(c=l.indexOf("#")<0),f.default[t.props.replace?"replace":"push"](r,l,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return i(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,i=(0,m.resolve)(e,n);return[i,a?(0,m.resolve)(e,a):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),h.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}h.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();f.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,i=n.as;"string"===typeof t&&(t=u.default.createElement("a",null,t));var s=u.Children.only(t),r={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(r.href=i||a),u.default.cloneElement(s,r)}}]),c}(u.Component);t.default=y},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,2,1,3]]]);