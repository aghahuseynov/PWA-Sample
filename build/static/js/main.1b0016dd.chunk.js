(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    17: function(e, t, n) {
      e.exports = n(28);
    },
    22: function(e, t, n) {},
    23: function(e, t, n) {
      e.exports = n.p + "static/media/logo.5d5d9eef.svg";
    },
    24: function(e, t, n) {},
    28: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(1),
        a = n.n(o),
        r = n(10),
        i = n.n(r),
        c = (n(22), n(11)),
        l = n(12),
        s = n(15),
        u = n(13),
        d = n(16),
        f = (n(23), n(24), n(25), n(30)),
        h = n(31),
        g = n(32),
        p = n(33),
        v = n(34),
        w = n(35),
        m = n(36),
        b = n(37),
        E = (function(e) {
          function t() {
            var e, n;
            Object(c.a)(this, t);
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
              a[r] = arguments[r];
            return (
              ((n = Object(s.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(a))
              )).state = { todo: ["What is PWA ?", "PWA convert mobile"] }),
              (n.text = null),
              (n.addText = function() {
                n.text && n.state.todo.push(n.text),
                  n.setState({ todo: n.state.todo });
              }),
              n
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return a.a.createElement(
                    f.a,
                    null,
                    a.a.createElement(
                      h.a,
                      null,
                      a.a.createElement(
                        "h1",
                        { style: { textAlign: "center" } },
                        "PWA Todo List"
                      )
                    ),
                    a.a.createElement(
                      h.a,
                      null,
                      a.a.createElement(
                        g.a,
                        { inline: !0 },
                        a.a.createElement(
                          p.a,
                          null,
                          a.a.createElement(v.a, {
                            onChange: function(t) {
                              return (e.text = t.target.value);
                            },
                            placeholder: "Bilmiyorum ne acaba ?"
                          })
                        ),
                        a.a.createElement(
                          w.a,
                          { onClick: this.addText },
                          "Ekle"
                        )
                      )
                    ),
                    a.a.createElement(
                      h.a,
                      { style: { marginTop: "25px" } },
                      a.a.createElement(
                        m.a,
                        null,
                        this.state.todo.map(function(e) {
                          return a.a.createElement(
                            b.a,
                            { style: { paddingRight: "120px", color: "red" } },
                            e
                          );
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.Component),
        y = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function k(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function() {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      i.a.render(a.a.createElement(E, null), document.getElementById("root")),
        (function(e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var t = "".concat("", "/service-worker.js");
              y
                ? ((function(e, t) {
                    fetch(e)
                      .then(function(n) {
                        var o = n.headers.get("content-type");
                        404 === n.status ||
                        (null != o && -1 === o.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : k(e, t);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : k(t, e);
            });
          }
        })();
    }
  },
  [[17, 1, 2]]
]);
//# sourceMappingURL=main.1b0016dd.chunk.js.map
