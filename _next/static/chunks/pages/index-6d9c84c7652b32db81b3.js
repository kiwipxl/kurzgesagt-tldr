_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"6xyR":function(e,t,r){"use strict";var n=r("wx14"),a=r("zLVn"),i=r("TSYQ"),c=r.n(i),o=r("q1tI"),s=r.n(o),l=r("vUet"),u=r("YdCC"),d=r("U1MP"),f=r("Wzyw"),m=s.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(a.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(r,"card-img");return s.a.createElement(d,Object(n.a)({ref:t,className:c()(o?m+"-"+o:m,i)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,j=Object(d.a)("h5"),v=Object(d.a)("h6"),h=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:j}),y=Object(u.a)("card-subtitle",{Component:v}),g=Object(u.a)("card-link",{Component:"a"}),p=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),S=s.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,u=e.bg,d=e.text,m=e.border,b=e.body,j=e.children,v=e.as,O=void 0===v?"div":v,y=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(l.a)(r,"card"),p=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return s.a.createElement(f.a.Provider,{value:p},s.a.createElement(O,Object(n.a)({ref:t},y,{className:c()(i,g,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),b?s.a.createElement(h,null,j):j))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=b,S.Title=O,S.Subtitle=y,S.Body=h,S.Link=g,S.Text=p,S.Header=w,S.Footer=x,S.ImgOverlay=N;t.a=S},ODXe:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return x}));var n=r("nKUr"),a=r("q1tI"),i=r.n(a),c=r("nOHt"),o=r("ODXe"),s=r("wx14"),l=r("zLVn"),u=r("TSYQ"),d=r.n(u),f=r("vUet"),m=i.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,a=e.animation,c=e.size,o=e.children,u=e.as,m=void 0===u?"div":u,b=e.className,j=Object(l.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),v=(r=Object(f.a)(r,"spinner"))+"-"+a;return i.a.createElement(m,Object(s.a)({ref:t},j,{className:d()(b,v,c&&v+"-"+c,n&&"text-"+n)}),o)}));m.displayName="Spinner";var b=m,j=r("6xyR"),v=r("ExVU");function h(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw i}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e){var t,r=i.a.useState(0),a=Object(o.a)(r,2),c=a[0],s=a[1],l=i.a.useRef(null);t=e.numViews>=1e6?(Math.round(e.numViews/1e6*10)/10).toString()+"M":e.numViews>=1e5?Math.round(e.numViews/1e3).toString()+"K":e.numViews>=1e3?(Math.round(e.numViews/1e3*10)/10).toString()+"K":e.numViews.toString();var u,d=v.DateTime.fromISO(e.publishedAt).toRelative(),f="",m=!1,b=h(v.Duration.fromISO(e.duration).toFormat("hh:mm:ss"));try{for(b.s();!(u=b.n()).done;){var O=u.value;"0"!=O&&":"!=O&&(m=!0),m&&(f+=O)}}catch(g){b.e(g)}finally{b.f()}i.a.useEffect((function(){new ResizeObserver((function(e){s(e[0].target.clientHeight)})).observe(l.current)}),[]);var y=100;return c>0&&(y=c-30),Object(n.jsxs)(j.a,{className:"video-card",onClick:function(){e.onClick&&e.onClick(e.id)},children:[Object(n.jsx)(j.a.Img,{ref:l,className:"video-card-img",variant:"top",src:e.thumbnail}),Object(n.jsx)("div",{className:"video-card-duration",style:{top:y},children:f}),Object(n.jsxs)(j.a.Body,{children:[Object(n.jsx)(j.a.Title,{className:"video-card-title",children:e.title}),Object(n.jsx)(j.a.Text,{className:"video-card-info",children:"".concat(t," views | ").concat(d)})]})]})},g=r("TUci"),p=function(e){var t=i.a.useState(!1),r=Object(o.a)(t,2),a=r[0],c=r[1];return Object(n.jsxs)(g.a,{variant:"danger",className:e.className,children:[e.title&&Object(n.jsx)(g.a.Heading,{children:e.title}),e.message&&Object(n.jsx)("p",{children:e.message}),a&&Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:e.details}),Object(n.jsx)("a",{className:"error-toggle-details",onClick:function(){return c(!1)},children:"Show less details"})]}),!a&&Object(n.jsx)("a",{className:"error-toggle-details",onClick:function(){return c(!0)},children:"Show more details"})]})},w=function(e){Object(c.useRouter)();var t=i.a.useRef(null);t&&t.current||window.scrollTo(0,e.scrollY||0);var r=i.a.useState(1),a=Object(o.a)(r,2),s=a[0],l=a[1],u=i.a.useState(e.items||[]),d=Object(o.a)(u,2),f=d[0],m=d[1],j=i.a.useState(!1),v=Object(o.a)(j,2),h=v[0],O=v[1],g=i.a.useState(!1),w=Object(o.a)(g,2),x=w[0],N=w[1],S=i.a.useState(),C=Object(o.a)(S,2),E=C[0],R=C[1];function A(e){if(t.current&&t.current.firstElementChild){t.current.getClientRects()[0].bottom-(t.current.firstElementChild.clientHeight+100)<=window.innerHeight&&O(!0)}}return i.a.useEffect((function(){h&&!x&&fetch("/kurzgesagt-tldr/feed/page".concat(s+1,".json")).then((function(e){if(404!=e.status)return e.json();N(!0)})).then((function(e){e&&(l(s+1),m(f.concat(e)),O(!1))})).catch((function(e){console.error("video feed fetch error",e),N(!0),R(e)}))}),[h]),i.a.useEffect((function(){return window.addEventListener("scroll",A),function(){return window.removeEventListener("scroll",A)}}),[]),Object(n.jsxs)("div",{ref:t,className:"video-feed",children:[f.map((function(t){var r=t.thumbnails.maxresUrl||t.thumbnails.standardUrl||t.thumbnails.highUrl||t.thumbnails.mediumUrl||t.thumbnails.defaultUrl;return Object(n.jsx)("div",{className:"video-feed-card-container",children:Object(n.jsx)(y,{id:t.id,title:t.title,numViews:t.numViews,publishedAt:t.publishedAt,thumbnail:r,duration:t.duration,onClick:function(){return e.onVideoClick&&e.onVideoClick(t.id)}})},t.id)})),h&&!x&&Object(n.jsx)("div",{className:"video-feed-spinner",children:Object(n.jsx)(b,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})}),E&&Object(n.jsx)(p,{className:"video-feed-error",title:"Error when loading feed",message:E.message})]})},x=!0;t.default=function(e){var t=Object(c.useRouter)();return Object(n.jsx)("div",{className:"content-container",children:Object(n.jsxs)("div",{className:"content",children:[e.children,Object(n.jsx)(w,{items:e.items,onVideoClick:function(e){t.push("/video/".concat(e))}})]})})}},Wzyw:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n).a.createContext(null);a.displayName="CardContext",t.a=a},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])}},[["vlRD",0,1,4,2,3,8]]]);