var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LORL3HPE.css";

// app/layout/Nav.tsx
var import_react2 = require("@remix-run/react"), import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Nav(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "text-xl md:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex flex-col items-center md:items-start gap-y-4", children: props.children }, void 0, !1, {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var NavItem = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: props.to, children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "li",
  {
    className: (0, import_clsx.default)(
      props.to === "/" && "font-bold",
      "flex items-center justify-center w-max space-x-4 px-3 py-3 rounded-full hover:bg-stone-100"
    ),
    children: props.children
  },
  void 0,
  !1,
  {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 22,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 20,
  columnNumber: 3
}, this), NavItemIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "rounded-full", children: props.children }, void 0, !1, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this), NavItemContent = (props) => props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hidden md:block md:pr-6", children: props.children }, void 0, !1, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 38,
  columnNumber: 5
}, this) : null;
NavItem.Icon = NavItemIcon;
NavItem.Content = NavItemContent;
Nav.Item = NavItem;

// app/layout/MainNavigation.tsx
var import_bs = require("react-icons/bs"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { className: "pt-1 sticky top-0 bottom-0 self-start flex flex-col justify-self-end gap-y-8 px-0.5 sm:px-2 md:pl-5 md:pr-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsTwitter, { className: "text-sky-500 w-7 h-7" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, {}, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsHouse, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Home" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsHash, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Explore" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsBell, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Notifications" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsInbox, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Messages" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsBookmark, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Bookmarks" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsList, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Lists" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsPerson, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "Profile" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsThreeDots, { className: "w-4 h-4 sm:w-6 sm:h-6" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav.Item.Content, { children: "More" }, void 0, !1, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/MainNavigation.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "self-center w-10 h-10 sm:w-full sm:h-auto sm:px-3 sm:py-1.5 md:py-3 font-bold text-center text-lg grow bg-sky-500 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full hover:bg-sky-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden md:block", children: "Post" }, void 0, !1, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsPencil, { className: "w-4 sm:w-6 h-10 md:hidden" }, void 0, !1, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/MainNavigation.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/MainNavigation.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/Sidebar.tsx
var import_md = require("react-icons/md");

// app/common/Card.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Card = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-xl bg-gray-100 p-4 space-y-3", children: props.children }, void 0, !1, {
  fileName: "app/common/Card.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);
Card.Heading = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-black", children: props.children }, void 0, !1, {
  fileName: "app/common/Card.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);
Card.Content = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: props.children }, void 0, !1, {
  fileName: "app/common/Card.tsx",
  lineNumber: 15,
  columnNumber: 34
}, this);

// app/Sidebar.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), trends = [
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" },
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" }
];
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("aside", { className: "shrink hidden lg:flex flex-col sticky top-0 self-start gap-4 p-8 grow min-w-[380px] max-w-[430px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card.Heading, { children: "Subscribe to Premium" }, void 0, !1, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Subscribe to unlock new features and if eligible, receive a share of ads revenue." }, void 0, !1, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "bg-black text-white font-bold flex items-center rounded-full px-4 py-1.5 mt-3 hover:opacity-80", children: "Subscribe" }, void 0, !1, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Sidebar.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card.Heading, { children: "Trends for you" }, void 0, !1, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "flex flex-col", children: [
        trends.map(({ name, category, postCount }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "li",
          {
            className: "flex flex-col hover:bg-zinc-200 hover:cursor-pointer -mx-4 px-4 py-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between -mb-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: " text-sm text-slate-500", children: [
                  category,
                  " \xB7 Trending"
                ] }, void 0, !0, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 38,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "flex items-center justify-center rounded-full w-8 h-8 p-1 hover:bg-blue-100 hover:text-blue-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_md.MdMoreHoriz, { className: "w-5 h-5" }, void 0, !1, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 42,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 41,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-base font-bold", children: name }, void 0, !1, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 45,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm text-slate-500", children: [
                postCount,
                " posts"
              ] }, void 0, !0, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this)
            ]
          },
          index,
          !0,
          {
            fileName: "app/Sidebar.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "text-start rounded-b-xl p-4 -mx-4 -mb-4 hover:bg-zinc-200 text-sky-500", children: "Show more" }, void 0, !1, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Sidebar.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Sidebar.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/layout/MainLayout.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Main(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "h-full grow border-x-2 border-gray-50", children: props.children }, void 0, !1, {
    fileName: "app/layout/MainLayout.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function MainLayout(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-full flex max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Main, { children: props.children }, void 0, !1, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Sidebar, {}, void 0, !1, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/MainLayout.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "Twitter Clone",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { className: "font-chirp", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MainLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/common/PageHeading.tsx
var import_react4 = __toESM(require("react")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function PageHeading(props) {
  let { as = "h1", ...rest } = props, heading = import_react4.default.createElement(as, {
    className: "font-bold text-xl",
    ...rest
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-4", children: heading }, void 0, !1, {
    fileName: "app/common/PageHeading.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/common/Tabs.tsx
var Tabs = __toESM(require("@radix-ui/react-tabs")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function TimelineModeSwitcher() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tabs.Root, { defaultValue: "for-you", className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tabs.List, { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Tabs.Trigger,
      {
        value: "for-you",
        className: "p-3 text-gray-600 hover:bg-gray-100 flex-grow text-center border-b-4 border-transparent data-[state=active]:text-black data-[state=active]:border-blue-500 data-[state=active]:font-bold",
        children: "For you"
      },
      void 0,
      !1,
      {
        fileName: "app/common/Tabs.tsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Tabs.Trigger,
      {
        value: "following",
        className: "p-3 text-gray-600 hover:bg-gray-100 flex-grow text-center border-b-4 border-transparent data-[state=active]:text-black data-[state=active]:border-blue-500 data-[state=active]:font-bold",
        children: "Following"
      },
      void 0,
      !1,
      {
        fileName: "app/common/Tabs.tsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/common/Tabs.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/Tabs.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/common/Avatar.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Avatar(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "img",
    {
      src: props.src,
      alt: props.src,
      className: "rounded-full object-cover w-8 j-8 sm:w-10 sm:h-10"
    },
    void 0,
    !1,
    {
      fileName: "app/common/Avatar.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}

// app/Tweet.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Tweet(props) {
  let { tweet } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "grow p-4 flex items-start gap-4 last:border-0 border-b border-gray-100 hover:bg-zinc-50 hover:cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Avatar, { src: tweet.author.avatarUrl, alt: tweet.author.name }, void 0, !1, {
      fileName: "app/Tweet.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inline-flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: tweet.author.name }, void 0, !1, {
          fileName: "app/Tweet.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "text-gray-600", children: tweet.author.handle }, void 0, !1, {
          fileName: "app/Tweet.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Tweet.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "leading-snug", children: tweet.body }, void 0, !1, {
        fileName: "app/Tweet.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Tweet.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Tweet.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/Timeline.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Timeline(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: props.tweets.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Tweet, { tweet: t }, t.id, !1, {
    fileName: "app/Timeline.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/Timeline.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/TweetComposer.tsx
var import_bs2 = require("react-icons/bs");
var import_react5 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function TweetComposer() {
  let [text, setText] = (0, import_react5.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-start space-x-4 grow px-4 py-3 border-y border-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Avatar, { src: "/img/magne.png", alt: "the developer of this site" }, void 0, !1, {
      fileName: "app/TweetComposer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col grow space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          type: "text",
          value: text,
          onChange: (e) => setText(e.target.value),
          multiple: !0,
          placeholder: "Whats happening?",
          className: "py-3 grow placeholder:text-xl placeholder:text-gray-500 focus:outline-none"
        },
        void 0,
        !1,
        {
          fileName: "app/TweetComposer.tsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center space-x-2 text-blue-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_bs2.BsImage, {}, void 0, !1, {
          fileName: "app/TweetComposer.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/TweetComposer.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            disabled: text === "",
            className: "px-4 py-1.5 max-w-fit font-semibold grow bg-sky-500 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full hover:bg-sky-600 disabled:opacity-50",
            children: "Post"
          },
          void 0,
          !1,
          {
            fileName: "app/TweetComposer.tsx",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/TweetComposer.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/TweetComposer.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/TweetComposer.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader() {
  let tweets = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json()).then((posts) => posts.slice(0, 25)).then(
    (posts) => posts.map((p) => ({
      id: p.id,
      body: p.body,
      author: {
        name: "Magne Skutle",
        handle: "@mskutle",
        avatarUrl: "/img/magne.png"
      }
    }))
  );
  return (0, import_node2.json)(tweets);
}
function Index() {
  let tweets = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PageHeading, { children: "Home" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TimelineModeSwitcher, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TweetComposer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Timeline, { tweets }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d5fbc661", entry: { module: "/build/entry.client-LPOO5WI2.js", imports: ["/build/_shared/chunk-DVT4756X.js", "/build/_shared/chunk-EYDONH5V.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4RKA67AZ.js", imports: ["/build/_shared/chunk-5HWC5E3U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LDLJGUKQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-D5FBC661.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
