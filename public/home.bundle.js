(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    122: function (e, t, a) {
      "use strict";
      var n = a(34),
        r = a.n(n),
        l = a(0),
        o = a.n(l);
      t.a = function (e) {
        return o.a.createElement(
          "svg",
          r()({ viewBox: "0 0 24 24", width: "24", height: "24" }, e),
          o.a.createElement("path", {
            d:
              "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
          })
        );
      };
    },
    34: function (e, t) {
      function a() {
        return (
          (e.exports = a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          a.apply(this, arguments)
        );
      }
      (e.exports = a),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    543: function (e, t, a) {
      e.exports = a.p + "ecb170543706a965292caaa635c65af6.svg";
    },
    544: function (e, t, a) {
      e.exports = a.p + "4ade0e40bdc6d580f3321bc195a96468.png";
    },
    551: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(8),
        o = a(60),
        s = a(34),
        c = a.n(s);
      var i = function (e) {
        return r.a.createElement(
          "svg",
          c()({ viewBox: "0 0 24 24", width: "24", height: "24" }, e),
          r.a.createElement("path", {
            d:
              "M16.21 16.95a5 5 0 0 1-4.02 4.9l-3.85.77a1 1 0 0 1-.9-.27l-.71-.7a2 2 0 0 1 0-2.83l1.44-1.45a13.17 13.17 0 0 1-1.42-1.41L5.31 17.4a2 2 0 0 1-2.83 0l-.7-.7a1 1 0 0 1-.28-.9l.77-3.86a5 5 0 0 1 4.9-4.02h.86a13.07 13.07 0 0 1 12.82-5.47 1 1 0 0 1 .83.83A12.98 12.98 0 0 1 16.2 16.1v.85zm-4.41 2.94a3 3 0 0 0 2.41-2.94v-1.4a1 1 0 0 1 .47-.84A11.04 11.04 0 0 0 19.8 4.33 10.98 10.98 0 0 0 9.42 9.45a1 1 0 0 1-.85.47h-1.4a3 3 0 0 0-2.94 2.4l-.66 3.34.33.33 2.24-2.24a1 1 0 0 1 1.52.12 11.08 11.08 0 0 0 2.6 2.6 1 1 0 0 1 .12 1.52l-2.24 2.24.33.33 3.33-.67zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
          })
        );
      };
      var m = function (e) {
          return r.a.createElement(
            "svg",
            c()({ viewBox: "0 0 24 24", width: "24", height: "24" }, e),
            r.a.createElement("path", {
              d:
                "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z",
            })
          );
        },
        d = a(122),
        p = a(12);
      var g = function () {
          const [e] = r.a.useContext(p.a);
          return e
            ? r.a.createElement(
                l.b,
                { to: "/chat" },
                r.a.createElement(
                  o.a,
                  {
                    className:
                      "bg-blue-700 hover:bg-blue-800 text-gray-100 px-8 font-bold",
                    overrideColors: !0,
                  },
                  "Start Chatting"
                )
              )
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  l.b,
                  { to: "/register" },
                  r.a.createElement(
                    o.a,
                    { className: "mr-6 px-8 font-bold" },
                    "Sign Up"
                  )
                ),
                r.a.createElement(
                  l.b,
                  { to: "/login" },
                  r.a.createElement(
                    o.a,
                    {
                      className:
                        "bg-blue-700 hover:bg-blue-800 text-gray-100 px-8 font-bold",
                      overrideColors: !0,
                    },
                    "Log in"
                  )
                )
              );
        },
        u = a(543),
        h = a.n(u),
        v = a(544);
      const x = { backgroundImage: `url(${a.n(v).a})` },
        f = [
          {
            title: "Convenient",
            description:
              "We use real time communication technology to help you stay connected with others.",
            icon: d.a,
          },
          {
            title: "Stay Organized",
            description:
              "Conversations are divided into channels, which helps members stay on topic.",
            icon: m,
          },
          {
            title: "Frictionless",
            description:
              "No account confirmation required. Just sign up and start chatting!",
            icon: i,
          },
        ];
      t.default = function () {
        return r.a.createElement(
          "div",
          { className: "relative mb-24" },
          r.a.createElement("div", {
            className: "absolute z-0 w-32 mt-64 h-64",
            style: x,
          }),
          r.a.createElement("div", {
            className: "absolute z-0 w-8 mt-16 h-screen right-0",
            style: x,
          }),
          r.a.createElement(
            "div",
            { className: "relative z-10 container mx-auto px-4" },
            r.a.createElement(
              "div",
              { className: "flex flex-wrap justify-center lg:pt-24" },
              r.a.createElement(
                "div",
                {
                  className:
                    "lg:w-1/2 mt-16 flex flex-col items-center lg:items-start",
                },
                r.a.createElement(
                  "small",
                  {
                    className:
                      "font-bold text-sm text-gray-700 uppercase tracking-wider font-display",
                  },
                  "Stay connected"
                ),
                r.a.createElement(
                  "h1",
                  {
                    className:
                      "font-extrabold text-5xl leading-tight font-display text-center lg:text-left",
                  },
                  "It's time to",
                  " ",
                  r.a.createElement(
                    "span",
                    { className: "text-blue-700" },
                    "ditch Discord"
                  )
                ),
                r.a.createElement(
                  "p",
                  {
                    className:
                      "text-gray-700 text-xl mt-2 text-center lg:text-left",
                  },
                  "Simple and organized communication all in one place."
                ),
                r.a.createElement(
                  "nav",
                  { className: "mt-6 whitespace-no-wrap" },
                  r.a.createElement(g, null)
                )
              ),
              r.a.createElement(
                "div",
                { className: "lg:w-1/2 mt-12" },
                r.a.createElement("img", {
                  alt: "People looking at devices",
                  src: h.a,
                  className: "px-8 md:px-24 lg:px-0",
                })
              )
            ),
            r.a.createElement(
              "div",
              { className: "grid row-end-auto md:grid-cols-3 gap-8 mt-32" },
              f.map((e) =>
                r.a.createElement(
                  "div",
                  { key: e.title, className: "flex items-start" },
                  r.a.createElement(
                    "div",
                    { className: "bg-blue-600 text-blue-100 p-3 rounded" },
                    r.a.createElement(e.icon, {
                      className: "fill-current w-6 h-6",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "ml-4" },
                    r.a.createElement(
                      "h2",
                      { className: "font-bold text-xl" },
                      e.title
                    ),
                    r.a.createElement("p", { className: "mt-1" }, e.description)
                  )
                )
              )
            )
          ),
          r.a.createElement(
            "div",
            {
              className:
                "bg-blue-800 text-blue-100 py-16 mt-24 flex flex-col items-center shadow-xl",
            },
            r.a.createElement(
              "h1",
              {
                className:
                  "font-extrabold text-center text-4xl leading-tight font-display mb-6",
              },
              "Start a new way of communication"
            ),
            r.a.createElement(
              l.b,
              { to: "/register" },
              r.a.createElement(
                o.a,
                {
                  className:
                    "border-2 border-blue-200 hover:border-white hover:text-blue-800 hover:bg-white uppercase text-sm",
                  overrideColors: !0,
                  variant: "big",
                },
                "Sign up today"
              )
            )
          )
        );
      };
    },
    60: function (e, t, a) {
      "use strict";
      var n = a(34),
        r = a.n(n),
        l = a(0),
        o = a.n(l),
        s = a(6),
        c = a.n(s);
      function i({
        className: e,
        children: t,
        type: a,
        overrideColors: n,
        variant: l,
        ...s
      }) {
        let c;
        return (
          (c =
            "big" === l
              ? "px-12 py-4 font-bold shadow-md hover:shadow-lg"
              : "px-4 py-2 shadow hover:shadow-md"),
          o.a.createElement(
            "button",
            r()(
              {
                className: `\n        ${
                  n ? "" : "bg-gray-700 hover:bg-gray-800 text-gray-100"
                }\n        rounded focus:shadow-outline cursor-pointer ${c} ${e}\n      `,
                type: a,
              },
              s
            ),
            t
          )
        );
      }
      (i.propTypes = {
        className: c.a.string,
        children: c.a.node,
        type: c.a.string,
        variant: c.a.oneOf(["big", void 0]),
        overrideColors: c.a.bool,
      }),
        (i.defaultProps = {
          className: "",
          children: null,
          type: "button",
          variant: void 0,
          overrideColors: !1,
        }),
        (t.a = i);
    },
  },
]);
//# sourceMappingURL=home.bundle.js.map
