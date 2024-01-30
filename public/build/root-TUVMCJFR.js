import {
  BsBell,
  BsBookmark,
  BsHash,
  BsHouse,
  BsInbox,
  BsList,
  BsPencil,
  BsPerson,
  BsThreeDots,
  BsTwitter,
  GenIcon
} from "/build/_shared/chunk-2VOUFGJX.js";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-DEEJSVC6.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SZAZMJVU.css";

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// app/layout/Nav.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Nav(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "text-xl md:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col items-center md:items-start gap-y-4", children: props.children }, void 0, false, {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var NavItem = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: props.to, children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "li",
  {
    className: clsx_m_default(
      isActive && "font-bold",
      "flex items-center justify-center w-max space-x-4 px-3 py-3 rounded-full hover:bg-stone-100"
    ),
    children: props.children
  },
  void 0,
  false,
  {
    fileName: "app/layout/Nav.tsx",
    lineNumber: 22,
    columnNumber: 7
  },
  this
) }, void 0, false, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 20,
  columnNumber: 3
}, this);
var NavItemIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full", children: props.children }, void 0, false, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this);
var NavItemContent = (props) => props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden md:block md:pr-6", children: props.children }, void 0, false, {
  fileName: "app/layout/Nav.tsx",
  lineNumber: 38,
  columnNumber: 5
}, this) : null;
NavItem.Icon = NavItemIcon;
NavItem.Content = NavItemContent;
Nav.Item = NavItem;

// app/layout/MainNavigation.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("aside", { className: "pt-1 sticky top-0 bottom-0 self-start flex flex-col justify-self-end gap-y-8 px-3 md:pl-5 md:pr-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsTwitter, { className: "text-sky-500 w-7 h-7" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, {}, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsHouse, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Home" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/explore", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsHash, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Explore" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/notifications", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsBell, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Notifications" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/messages", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsInbox, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Messages" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/bookmarks", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsBookmark, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Bookmarks" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/lists", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsList, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Lists" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/profile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsPerson, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "Profile" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item, { to: "/more", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsThreeDots, { className: "w-6 h-6" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav.Item.Content, { children: "More" }, void 0, false, {
          fileName: "app/layout/MainNavigation.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/MainNavigation.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "px-3 py-1.5 md:py-3 font-bold text-center text-lg grow bg-sky-500 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full hover:bg-sky-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hidden md:block", children: "Tweet" }, void 0, false, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsPencil, { className: "w-6 h-10 md:hidden" }, void 0, false, {
        fileName: "app/layout/MainNavigation.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/MainNavigation.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/MainNavigation.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// node_modules/react-icons/md/index.esm.js
function MdMoreHoriz(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] })(props);
}

// app/common/Card.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Card = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-xl bg-gray-100 p-4 space-y-3", children: props.children }, void 0, false, {
  fileName: "app/common/Card.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);
Card.Heading = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-black", children: props.children }, void 0, false, {
  fileName: "app/common/Card.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);
Card.Content = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: props.children }, void 0, false, {
  fileName: "app/common/Card.tsx",
  lineNumber: 15,
  columnNumber: 34
}, this);

// app/Sidebar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var trends = [
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" },
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" }
];
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("aside", { className: "shrink hidden lg:flex flex-col sticky top-0 self-start gap-4 p-8 grow min-w-[380px] max-w-[430px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card.Heading, { children: "Subscribe to Premium" }, void 0, false, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Subscribe to unlock new features and if eligible, receive a share of ads revenue." }, void 0, false, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "bg-black text-white font-bold flex items-center rounded-full px-4 py-1.5 mt-3 hover:opacity-80", children: "Subscribe" }, void 0, false, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/Sidebar.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card.Heading, { children: "Trends for you" }, void 0, false, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "flex flex-col", children: [
        trends.map(({ name, category, postCount }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            className: "flex flex-col hover:bg-zinc-200 hover:cursor-pointer -mx-4 px-4 py-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between -mb-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: " text-sm text-slate-500", children: [
                  category,
                  " \xB7 Trending"
                ] }, void 0, true, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 38,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "flex items-center justify-center rounded-full w-8 h-8 p-1 hover:bg-blue-100 hover:text-blue-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MdMoreHoriz, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 42,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/Sidebar.tsx",
                  lineNumber: 41,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-base font-bold", children: name }, void 0, false, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 45,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm text-slate-500", children: [
                postCount,
                " posts"
              ] }, void 0, true, {
                fileName: "app/Sidebar.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/Sidebar.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "text-start rounded-b-xl p-4 -mx-4 -mb-4 hover:bg-zinc-200 text-sky-500", children: "Show more" }, void 0, false, {
          fileName: "app/Sidebar.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/Sidebar.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/Sidebar.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Sidebar.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/layout/MainLayout.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Main(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "h-full grow border-x-2 border-gray-50", children: props.children }, void 0, false, {
    fileName: "app/layout/MainLayout.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function MainLayout(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full flex max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainNavigation, {}, void 0, false, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Main, { children: props.children }, void 0, false, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/layout/MainLayout.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/MainLayout.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "Twitter Clone",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "font-chirp", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MainLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-TUVMCJFR.js.map
