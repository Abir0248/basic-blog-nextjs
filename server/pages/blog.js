(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,888,660];
exports.modules = {

/***/ 9150:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "blog_container__qghXg",
	"listItem": "blog_listItem__19mhj",
	"link": "blog_link__pid8V"
};


/***/ }),

/***/ 6231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/blog.js
var blog_namespaceObject = {};
__webpack_require__.r(blog_namespaceObject);
__webpack_require__.d(blog_namespaceObject, {
  "default": () => (blog),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(9259);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(2624);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
// EXTERNAL MODULE: ./styles/blog.module.css
var blog_module = __webpack_require__(9150);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
;// CONCATENATED MODULE: ./pages/blog.js





function Blog({ posts }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (blog_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: (blog_module_default()).title,
                children: "Blog Posts"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: (blog_module_default()).postList,
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/blog/${post.id}`,
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: (blog_module_default()).postTitle,
                                children: post.title
                            })
                        })
                    }, post.id))
            })
        ]
    });
}
async function getStaticProps() {
    const filePath = external_path_default().join(process.cwd(), "data", "blogData.json");
    const jsonData = external_fs_default().readFileSync(filePath, "utf-8");
    const posts = JSON.parse(jsonData);
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const blog = (Blog);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fblog&preferredRegion=&absolutePagePath=private-next-pages%2Fblog.js&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(blog_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(blog_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(blog_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/blog",
        pathname: "/blog",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: blog_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,893,664], () => (__webpack_exec__(6231)));
module.exports = __webpack_exports__;

})();