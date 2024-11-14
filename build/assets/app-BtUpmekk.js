function An(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: si} = Object.prototype
  , {getPrototypeOf: St} = Object
  , je = (e => t => {
    const n = si.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , j = e => (e = e.toLowerCase(),
t => je(t) === e)
  , Le = e => t => typeof t === e
  , {isArray: ee} = Array
  , de = Le("undefined");
function oi(e) {
    return e !== null && !de(e) && e.constructor !== null && !de(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const On = j("ArrayBuffer");
function ai(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && On(e.buffer),
    t
}
const ci = Le("string")
  , T = Le("function")
  , vn = Le("number")
  , Ie = e => e !== null && typeof e == "object"
  , ui = e => e === !0 || e === !1
  , Oe = e => {
    if (je(e) !== "object")
        return !1;
    const t = St(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , li = j("Date")
  , fi = j("File")
  , di = j("Blob")
  , pi = j("FileList")
  , hi = e => Ie(e) && T(e.pipe)
  , _i = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = je(e)) === "formdata" || t === "object" && T(e.toString) && e.toString() === "[object FormData]"))
}
  , mi = j("URLSearchParams")
  , yi = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function he(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    ee(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , o = s.length;
        let a;
        for (r = 0; r < o; r++)
            a = s[r],
            t.call(null, e[a], a, e)
    }
}
function Rn(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Cn = e => !de(e) && e !== Tn;
function et() {
    const {caseless: e} = Cn(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const s = e && Rn(t, i) || i;
        Oe(t[s]) && Oe(r) ? t[s] = et(t[s], r) : Oe(r) ? t[s] = et({}, r) : ee(r) ? t[s] = r.slice() : t[s] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && he(arguments[r], n);
    return t
}
const gi = (e, t, n, {allOwnKeys: r}={}) => (he(t, (i, s) => {
    n && T(i) ? e[s] = An(i, n) : e[s] = i
}
, {
    allOwnKeys: r
}),
e)
  , bi = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , xi = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , wi = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        s = i.length; s-- > 0; )
            o = i[s],
            (!r || r(o, e, t)) && !a[o] && (t[o] = e[o],
            a[o] = !0);
        e = n !== !1 && St(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Ei = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Si = e => {
    if (!e)
        return null;
    if (ee(e))
        return e;
    let t = e.length;
    if (!vn(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Ai = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && St(Uint8Array))
  , Oi = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const s = i.value;
        t.call(e, s[0], s[1])
    }
}
  , vi = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Ri = j("HTMLFormElement")
  , Ti = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , Yt = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Ci = j("RegExp")
  , Pn = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    he(n, (i, s) => {
        let o;
        (o = t(i, s, e)) !== !1 && (r[s] = o || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , Pi = e => {
    Pn(e, (t, n) => {
        if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (T(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Ni = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(s => {
            n[s] = !0
        }
        )
    }
    ;
    return ee(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Fi = () => {}
  , Mi = (e, t) => (e = +e,
Number.isFinite(e) ? e : t)
  , Je = "abcdefghijklmnopqrstuvwxyz"
  , Zt = "0123456789"
  , Nn = {
    DIGIT: Zt,
    ALPHA: Je,
    ALPHA_DIGIT: Je + Je.toUpperCase() + Zt
}
  , ji = (e=16, t=Nn.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function Li(e) {
    return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Ii = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (Ie(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const s = ee(r) ? [] : {};
                return he(r, (o, a) => {
                    const c = n(o, i + 1);
                    !de(c) && (s[a] = c)
                }
                ),
                t[i] = void 0,
                s
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Bi = j("AsyncFunction")
  , Di = e => e && (Ie(e) || T(e)) && T(e.then) && T(e.catch)
  , u = {
    isArray: ee,
    isArrayBuffer: On,
    isBuffer: oi,
    isFormData: _i,
    isArrayBufferView: ai,
    isString: ci,
    isNumber: vn,
    isBoolean: ui,
    isObject: Ie,
    isPlainObject: Oe,
    isUndefined: de,
    isDate: li,
    isFile: fi,
    isBlob: di,
    isRegExp: Ci,
    isFunction: T,
    isStream: hi,
    isURLSearchParams: mi,
    isTypedArray: Ai,
    isFileList: pi,
    forEach: he,
    merge: et,
    extend: gi,
    trim: yi,
    stripBOM: bi,
    inherits: xi,
    toFlatObject: wi,
    kindOf: je,
    kindOfTest: j,
    endsWith: Ei,
    toArray: Si,
    forEachEntry: Oi,
    matchAll: vi,
    isHTMLForm: Ri,
    hasOwnProperty: Yt,
    hasOwnProp: Yt,
    reduceDescriptors: Pn,
    freezeMethods: Pi,
    toObjectSet: Ni,
    toCamelCase: Ti,
    noop: Fi,
    toFiniteNumber: Mi,
    findKey: Rn,
    global: Tn,
    isContextDefined: Cn,
    ALPHABET: Nn,
    generateString: ji,
    isSpecCompliantForm: Li,
    toJSONObject: Ii,
    isAsyncFn: Bi,
    isThenable: Di
};
function g(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
u.inherits(g, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: u.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Fn = g.prototype
  , Mn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Mn[e] = {
        value: e
    }
}
);
Object.defineProperties(g, Mn);
Object.defineProperty(Fn, "isAxiosError", {
    value: !0
});
g.from = (e, t, n, r, i, s) => {
    const o = Object.create(Fn);
    return u.toFlatObject(e, o, function(c) {
        return c !== Error.prototype
    }, a => a !== "isAxiosError"),
    g.call(o, e.message, t, n, r, i),
    o.cause = e,
    o.name = e.name,
    s && Object.assign(o, s),
    o
}
;
const ki = null;
function tt(e) {
    return u.isPlainObject(e) || u.isArray(e)
}
function jn(e) {
    return u.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Qt(e, t, n) {
    return e ? e.concat(t).map(function(i, s) {
        return i = jn(i),
        !n && s ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function $i(e) {
    return u.isArray(e) && !e.some(tt)
}
const Ui = u.toFlatObject(u, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Be(e, t, n) {
    if (!u.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = u.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(_, p) {
        return !u.isUndefined(p[_])
    });
    const r = n.metaTokens
      , i = n.visitor || d
      , s = n.dots
      , o = n.indexes
      , c = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
    if (!u.isFunction(i))
        throw new TypeError("visitor must be a function");
    function l(h) {
        if (h === null)
            return "";
        if (u.isDate(h))
            return h.toISOString();
        if (!c && u.isBlob(h))
            throw new g("Blob is not supported. Use a Buffer instead.");
        return u.isArrayBuffer(h) || u.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h
    }
    function d(h, _, p) {
        let y = h;
        if (h && !p && typeof h == "object") {
            if (u.endsWith(_, "{}"))
                _ = r ? _ : _.slice(0, -2),
                h = JSON.stringify(h);
            else if (u.isArray(h) && $i(h) || (u.isFileList(h) || u.endsWith(_, "[]")) && (y = u.toArray(h)))
                return _ = jn(_),
                y.forEach(function(w, R) {
                    !(u.isUndefined(w) || w === null) && t.append(o === !0 ? Qt([_], R, s) : o === null ? _ : _ + "[]", l(w))
                }),
                !1
        }
        return tt(h) ? !0 : (t.append(Qt(p, _, s), l(h)),
        !1)
    }
    const f = []
      , m = Object.assign(Ui, {
        defaultVisitor: d,
        convertValue: l,
        isVisitable: tt
    });
    function b(h, _) {
        if (!u.isUndefined(h)) {
            if (f.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + _.join("."));
            f.push(h),
            u.forEach(h, function(y, x) {
                (!(u.isUndefined(y) || y === null) && i.call(t, y, u.isString(x) ? x.trim() : x, _, m)) === !0 && b(y, _ ? _.concat(x) : [x])
            }),
            f.pop()
        }
    }
    if (!u.isObject(e))
        throw new TypeError("data must be an object");
    return b(e),
    t
}
function en(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function At(e, t) {
    this._pairs = [],
    e && Be(e, this, t)
}
const Ln = At.prototype;
Ln.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Ln.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, en)
    }
    : en;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function Hi(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function In(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Hi
      , i = n && n.serialize;
    let s;
    if (i ? s = i(t, n) : s = u.isURLSearchParams(t) ? t.toString() : new At(t,n).toString(r),
    s) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class tn {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        u.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Bn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , qi = typeof URLSearchParams < "u" ? URLSearchParams : At
  , zi = typeof FormData < "u" ? FormData : null
  , Ki = typeof Blob < "u" ? Blob : null
  , Ji = {
    isBrowser: !0,
    classes: {
        URLSearchParams: qi,
        FormData: zi,
        Blob: Ki
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Dn = typeof window < "u" && typeof document < "u"
  , Wi = (e => Dn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , Vi = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Xi = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Dn,
    hasStandardBrowserEnv: Wi,
    hasStandardBrowserWebWorkerEnv: Vi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , M = {
    ...Xi,
    ...Ji
};
function Gi(e, t) {
    return Be(e, new M.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, s) {
            return M.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Yi(e) {
    return u.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Zi(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++)
        s = n[r],
        t[s] = e[s];
    return t
}
function kn(e) {
    function t(n, r, i, s) {
        let o = n[s++];
        if (o === "__proto__")
            return !0;
        const a = Number.isFinite(+o)
          , c = s >= n.length;
        return o = !o && u.isArray(i) ? i.length : o,
        c ? (u.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r,
        !a) : ((!i[o] || !u.isObject(i[o])) && (i[o] = []),
        t(n, r, i[o], s) && u.isArray(i[o]) && (i[o] = Zi(i[o])),
        !a)
    }
    if (u.isFormData(e) && u.isFunction(e.entries)) {
        const n = {};
        return u.forEachEntry(e, (r, i) => {
            t(Yi(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function Qi(e, t, n) {
    if (u.isString(e))
        try {
            return (t || JSON.parse)(e),
            u.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Ot = {
    transitional: Bn,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , s = u.isObject(t);
        if (s && u.isHTMLForm(t) && (t = new FormData(t)),
        u.isFormData(t))
            return i ? JSON.stringify(kn(t)) : t;
        if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
            return t;
        if (u.isArrayBufferView(t))
            return t.buffer;
        if (u.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Gi(t, this.formSerializer).toString();
            if ((a = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Be(a ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return s || i ? (n.setContentType("application/json", !1),
        Qi(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Ot.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (t && u.isString(t) && (r && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (o)
                    throw a.name === "SyntaxError" ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: M.classes.FormData,
        Blob: M.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Ot.headers[e] = {}
}
);
const vt = Ot
  , es = u.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , ts = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(o) {
        i = o.indexOf(":"),
        n = o.substring(0, i).trim().toLowerCase(),
        r = o.substring(i + 1).trim(),
        !(!n || t[n] && es[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , nn = Symbol("internals");
function se(e) {
    return e && String(e).trim().toLowerCase()
}
function ve(e) {
    return e === !1 || e == null ? e : u.isArray(e) ? e.map(ve) : String(e)
}
function ns(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const rs = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function We(e, t, n, r, i) {
    if (u.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!u.isString(t)) {
        if (u.isString(r))
            return t.indexOf(r) !== -1;
        if (u.isRegExp(r))
            return r.test(t)
    }
}
function is(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function ss(e, t) {
    const n = u.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, s, o) {
                return this[r].call(this, t, i, s, o)
            },
            configurable: !0
        })
    }
    )
}
class De {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function s(a, c, l) {
            const d = se(c);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const f = u.findKey(i, d);
            (!f || i[f] === void 0 || l === !0 || l === void 0 && i[f] !== !1) && (i[f || c] = ve(a))
        }
        const o = (a, c) => u.forEach(a, (l, d) => s(l, d, c));
        return u.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : u.isString(t) && (t = t.trim()) && !rs(t) ? o(ts(t), n) : t != null && s(n, t, r),
        this
    }
    get(t, n) {
        if (t = se(t),
        t) {
            const r = u.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return ns(i);
                if (u.isFunction(n))
                    return n.call(this, i, r);
                if (u.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = se(t),
        t) {
            const r = u.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || We(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (o = se(o),
            o) {
                const a = u.findKey(r, o);
                a && (!n || We(r, r[a], a, n)) && (delete r[a],
                i = !0)
            }
        }
        return u.isArray(t) ? t.forEach(s) : s(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || We(this, this[s], s, t, !0)) && (delete this[s],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return u.forEach(this, (i, s) => {
            const o = u.findKey(r, s);
            if (o) {
                n[o] = ve(i),
                delete n[s];
                return
            }
            const a = t ? is(s) : String(s).trim();
            a !== s && delete n[s],
            n[a] = ve(i),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return u.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && u.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[nn] = this[nn] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function s(o) {
            const a = se(o);
            r[a] || (ss(i, o),
            r[a] = !0)
        }
        return u.isArray(t) ? t.forEach(s) : s(t),
        this
    }
}
De.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(De.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
u.freezeMethods(De);
const L = De;
function Ve(e, t) {
    const n = this || vt
      , r = t || n
      , i = L.from(r.headers);
    let s = r.data;
    return u.forEach(e, function(a) {
        s = a.call(n, s, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    s
}
function $n(e) {
    return !!(e && e.__CANCEL__)
}
function _e(e, t, n) {
    g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
u.inherits(_e, g, {
    __CANCEL__: !0
});
function os(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new g("Request failed with status code " + n.status,[g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const as = M.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        u.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
        u.isString(r) && o.push("path=" + r),
        u.isString(i) && o.push("domain=" + i),
        s === !0 && o.push("secure"),
        document.cookie = o.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function cs(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function us(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Un(e, t) {
    return e && !cs(t) ? us(e, t) : t
}
const ls = M.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(s) {
        let o = s;
        return t && (n.setAttribute("href", o),
        o = n.href),
        n.setAttribute("href", o),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(o) {
        const a = u.isString(o) ? i(o) : o;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function fs(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function ds(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, s = 0, o;
    return t = t !== void 0 ? t : 1e3,
    function(c) {
        const l = Date.now()
          , d = r[s];
        o || (o = l),
        n[i] = c,
        r[i] = l;
        let f = s
          , m = 0;
        for (; f !== i; )
            m += n[f++],
            f = f % e;
        if (i = (i + 1) % e,
        i === s && (s = (s + 1) % e),
        l - o < t)
            return;
        const b = d && l - d;
        return b ? Math.round(m * 1e3 / b) : void 0
    }
}
function rn(e, t) {
    let n = 0;
    const r = ds(50, 250);
    return i => {
        const s = i.loaded
          , o = i.lengthComputable ? i.total : void 0
          , a = s - n
          , c = r(a)
          , l = s <= o;
        n = s;
        const d = {
            loaded: s,
            total: o,
            progress: o ? s / o : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && o && l ? (o - s) / c : void 0,
            event: i
        };
        d[t ? "download" : "upload"] = !0,
        e(d)
    }
}
const ps = typeof XMLHttpRequest < "u"
  , hs = ps && function(e) {
    return new Promise(function(n, r) {
        let i = e.data;
        const s = L.from(e.headers).normalize();
        let {responseType: o, withXSRFToken: a} = e, c;
        function l() {
            e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c)
        }
        let d;
        if (u.isFormData(i)) {
            if (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv)
                s.setContentType(!1);
            else if ((d = s.getContentType()) !== !1) {
                const [_,...p] = d ? d.split(";").map(y => y.trim()).filter(Boolean) : [];
                s.setContentType([_ || "multipart/form-data", ...p].join("; "))
            }
        }
        let f = new XMLHttpRequest;
        if (e.auth) {
            const _ = e.auth.username || ""
              , p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            s.set("Authorization", "Basic " + btoa(_ + ":" + p))
        }
        const m = Un(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), In(m, e.params, e.paramsSerializer), !0),
        f.timeout = e.timeout;
        function b() {
            if (!f)
                return;
            const _ = L.from("getAllResponseHeaders"in f && f.getAllResponseHeaders())
              , y = {
                data: !o || o === "text" || o === "json" ? f.responseText : f.response,
                status: f.status,
                statusText: f.statusText,
                headers: _,
                config: e,
                request: f
            };
            os(function(w) {
                n(w),
                l()
            }, function(w) {
                r(w),
                l()
            }, y),
            f = null
        }
        if ("onloadend"in f ? f.onloadend = b : f.onreadystatechange = function() {
            !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(b)
        }
        ,
        f.onabort = function() {
            f && (r(new g("Request aborted",g.ECONNABORTED,e,f)),
            f = null)
        }
        ,
        f.onerror = function() {
            r(new g("Network Error",g.ERR_NETWORK,e,f)),
            f = null
        }
        ,
        f.ontimeout = function() {
            let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const y = e.transitional || Bn;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
            r(new g(p,y.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,e,f)),
            f = null
        }
        ,
        M.hasStandardBrowserEnv && (a && u.isFunction(a) && (a = a(e)),
        a || a !== !1 && ls(m))) {
            const _ = e.xsrfHeaderName && e.xsrfCookieName && as.read(e.xsrfCookieName);
            _ && s.set(e.xsrfHeaderName, _)
        }
        i === void 0 && s.setContentType(null),
        "setRequestHeader"in f && u.forEach(s.toJSON(), function(p, y) {
            f.setRequestHeader(y, p)
        }),
        u.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
        o && o !== "json" && (f.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && f.addEventListener("progress", rn(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", rn(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (c = _ => {
            f && (r(!_ || _.type ? new _e(null,e,f) : _),
            f.abort(),
            f = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(c),
        e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const h = fs(m);
        if (h && M.protocols.indexOf(h) === -1) {
            r(new g("Unsupported protocol " + h + ":",g.ERR_BAD_REQUEST,e));
            return
        }
        f.send(i || null)
    }
    )
}
  , nt = {
    http: ki,
    xhr: hs
};
u.forEach(nt, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const sn = e => `- ${e}`
  , _s = e => u.isFunction(e) || e === null || e === !1
  , Hn = {
    getAdapter: e => {
        e = u.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let s = 0; s < t; s++) {
            n = e[s];
            let o;
            if (r = n,
            !_s(n) && (r = nt[(o = String(n)).toLowerCase()],
            r === void 0))
                throw new g(`Unknown adapter '${o}'`);
            if (r)
                break;
            i[o || "#" + s] = r
        }
        if (!r) {
            const s = Object.entries(i).map( ([a,c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let o = t ? s.length > 1 ? `since :
` + s.map(sn).join(`
`) : " " + sn(s[0]) : "as no adapter specified";
            throw new g("There is no suitable adapter to dispatch the request " + o,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: nt
};
function Xe(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new _e(null,e)
}
function on(e) {
    return Xe(e),
    e.headers = L.from(e.headers),
    e.data = Ve.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hn.getAdapter(e.adapter || vt.adapter)(e).then(function(r) {
        return Xe(e),
        r.data = Ve.call(e, e.transformResponse, r),
        r.headers = L.from(r.headers),
        r
    }, function(r) {
        return $n(r) || (Xe(e),
        r && r.response && (r.response.data = Ve.call(e, e.transformResponse, r.response),
        r.response.headers = L.from(r.response.headers))),
        Promise.reject(r)
    })
}
const an = e => e instanceof L ? {
    ...e
} : e;
function Y(e, t) {
    t = t || {};
    const n = {};
    function r(l, d, f) {
        return u.isPlainObject(l) && u.isPlainObject(d) ? u.merge.call({
            caseless: f
        }, l, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d
    }
    function i(l, d, f) {
        if (u.isUndefined(d)) {
            if (!u.isUndefined(l))
                return r(void 0, l, f)
        } else
            return r(l, d, f)
    }
    function s(l, d) {
        if (!u.isUndefined(d))
            return r(void 0, d)
    }
    function o(l, d) {
        if (u.isUndefined(d)) {
            if (!u.isUndefined(l))
                return r(void 0, l)
        } else
            return r(void 0, d)
    }
    function a(l, d, f) {
        if (f in t)
            return r(l, d);
        if (f in e)
            return r(void 0, l)
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (l, d) => i(an(l), an(d), !0)
    };
    return u.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const f = c[d] || i
          , m = f(e[d], t[d], d);
        u.isUndefined(m) && f !== a || (n[d] = m)
    }),
    n
}
const qn = "1.6.8"
  , Rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Rt[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const cn = {};
Rt.transitional = function(t, n, r) {
    function i(s, o) {
        return "[Axios v" + qn + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
    }
    return (s, o, a) => {
        if (t === !1)
            throw new g(i(o, " has been removed" + (n ? " in " + n : "")),g.ERR_DEPRECATED);
        return n && !cn[o] && (cn[o] = !0,
        console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(s, o, a) : !0
    }
}
;
function ms(e, t, n) {
    if (typeof e != "object")
        throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const s = r[i]
          , o = t[s];
        if (o) {
            const a = e[s]
              , c = a === void 0 || o(a, s, e);
            if (c !== !0)
                throw new g("option " + s + " must be " + c,g.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new g("Unknown option " + s,g.ERR_BAD_OPTION)
    }
}
const rt = {
    assertOptions: ms,
    validators: Rt
}
  , B = rt.validators;
class Pe {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new tn,
            response: new tn
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Y(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: s} = n;
        r !== void 0 && rt.assertOptions(r, {
            silentJSONParsing: B.transitional(B.boolean),
            forcedJSONParsing: B.transitional(B.boolean),
            clarifyTimeoutError: B.transitional(B.boolean)
        }, !1),
        i != null && (u.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : rt.assertOptions(i, {
            encode: B.function,
            serialize: B.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o = s && u.merge(s.common, s[n.method]);
        s && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h => {
            delete s[h]
        }
        ),
        n.headers = L.concat(o, s);
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function(_) {
            typeof _.runWhen == "function" && _.runWhen(n) === !1 || (c = c && _.synchronous,
            a.unshift(_.fulfilled, _.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(_) {
            l.push(_.fulfilled, _.rejected)
        });
        let d, f = 0, m;
        if (!c) {
            const h = [on.bind(this), void 0];
            for (h.unshift.apply(h, a),
            h.push.apply(h, l),
            m = h.length,
            d = Promise.resolve(n); f < m; )
                d = d.then(h[f++], h[f++]);
            return d
        }
        m = a.length;
        let b = n;
        for (f = 0; f < m; ) {
            const h = a[f++]
              , _ = a[f++];
            try {
                b = h(b)
            } catch (p) {
                _.call(this, p);
                break
            }
        }
        try {
            d = on.call(this, b)
        } catch (h) {
            return Promise.reject(h)
        }
        for (f = 0,
        m = l.length; f < m; )
            d = d.then(l[f++], l[f++]);
        return d
    }
    getUri(t) {
        t = Y(this.defaults, t);
        const n = Un(t.baseURL, t.url);
        return In(n, t.params, t.paramsSerializer)
    }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
    Pe.prototype[t] = function(n, r) {
        return this.request(Y(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
u.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, o, a) {
            return this.request(Y(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Pe.prototype[t] = n(),
    Pe.prototype[t + "Form"] = n(!0)
});
const Re = Pe;
class Tt {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0; )
                r._listeners[s](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let s;
            const o = new Promise(a => {
                r.subscribe(a),
                s = a
            }
            ).then(i);
            return o.cancel = function() {
                r.unsubscribe(s)
            }
            ,
            o
        }
        ,
        t(function(s, o, a) {
            r.reason || (r.reason = new _e(s,o,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Tt(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
const ys = Tt;
function gs(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function bs(e) {
    return u.isObject(e) && e.isAxiosError === !0
}
const it = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(it).forEach( ([e,t]) => {
    it[t] = e
}
);
const xs = it;
function zn(e) {
    const t = new Re(e)
      , n = An(Re.prototype.request, t);
    return u.extend(n, Re.prototype, t, {
        allOwnKeys: !0
    }),
    u.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return zn(Y(e, i))
    }
    ,
    n
}
const S = zn(vt);
S.Axios = Re;
S.CanceledError = _e;
S.CancelToken = ys;
S.isCancel = $n;
S.VERSION = qn;
S.toFormData = Be;
S.AxiosError = g;
S.Cancel = S.CanceledError;
S.all = function(t) {
    return Promise.all(t)
}
;
S.spread = gs;
S.isAxiosError = bs;
S.mergeConfig = Y;
S.AxiosHeaders = L;
S.formToJSON = e => kn(u.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Hn.getAdapter;
S.HttpStatusCode = xs;
S.default = S;
const ws = S;
window.axios = ws;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var st = !1
  , ot = !1
  , z = []
  , at = -1;
function Es(e) {
    Ss(e)
}
function Ss(e) {
    z.includes(e) || z.push(e),
    As()
}
function Kn(e) {
    let t = z.indexOf(e);
    t !== -1 && t > at && z.splice(t, 1)
}
function As() {
    !ot && !st && (st = !0,
    queueMicrotask(Os))
}
function Os() {
    st = !1,
    ot = !0;
    for (let e = 0; e < z.length; e++)
        z[e](),
        at = e;
    z.length = 0,
    at = -1,
    ot = !1
}
var te, V, ne, Jn, ct = !0;
function vs(e) {
    ct = !1,
    e(),
    ct = !0
}
function Rs(e) {
    te = e.reactive,
    ne = e.release,
    V = t => e.effect(t, {
        scheduler: n => {
            ct ? Es(n) : n()
        }
    }),
    Jn = e.raw
}
function un(e) {
    V = e
}
function Ts(e) {
    let t = () => {}
    ;
    return [r => {
        let i = V(r);
        return e._x_effects || (e._x_effects = new Set,
        e._x_runEffects = () => {
            e._x_effects.forEach(s => s())
        }
        ),
        e._x_effects.add(i),
        t = () => {
            i !== void 0 && (e._x_effects.delete(i),
            ne(i))
        }
        ,
        i
    }
    , () => {
        t()
    }
    ]
}
function Wn(e, t) {
    let n = !0, r, i = V( () => {
        let s = e();
        JSON.stringify(s),
        n ? r = s : queueMicrotask( () => {
            t(s, r),
            r = s
        }
        ),
        n = !1
    }
    );
    return () => ne(i)
}
function le(e, t, n={}) {
    e.dispatchEvent(new CustomEvent(t,{
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function k(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach(i => k(i, t));
        return
    }
    let n = !1;
    if (t(e, () => n = !0),
    n)
        return;
    let r = e.firstElementChild;
    for (; r; )
        k(r, t),
        r = r.nextElementSibling
}
function C(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
var ln = !1;
function Cs() {
    ln && C("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
    ln = !0,
    document.body || C("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    le(document, "alpine:init"),
    le(document, "alpine:initializing"),
    jt(),
    Fs(t => I(t, k)),
    Nt(t => Pt(t)),
    rr( (t, n) => {
        Dt(t, n).forEach(r => r())
    }
    );
    let e = t => !ke(t.parentElement, !0);
    Array.from(document.querySelectorAll(Gn().join(","))).filter(e).forEach(t => {
        I(t)
    }
    ),
    le(document, "alpine:initialized")
}
var Ct = []
  , Vn = [];
function Xn() {
    return Ct.map(e => e())
}
function Gn() {
    return Ct.concat(Vn).map(e => e())
}
function Yn(e) {
    Ct.push(e)
}
function Zn(e) {
    Vn.push(e)
}
function ke(e, t=!1) {
    return me(e, n => {
        if ((t ? Gn() : Xn()).some(i => n.matches(i)))
            return !0
    }
    )
}
function me(e, t) {
    if (e) {
        if (t(e))
            return e;
        if (e._x_teleportBack && (e = e._x_teleportBack),
        !!e.parentElement)
            return me(e.parentElement, t)
    }
}
function Ps(e) {
    return Xn().some(t => e.matches(t))
}
var Qn = [];
function Ns(e) {
    Qn.push(e)
}
function I(e, t=k, n= () => {}
) {
    Js( () => {
        t(e, (r, i) => {
            n(r, i),
            Qn.forEach(s => s(r, i)),
            Dt(r, r.attributes).forEach(s => s()),
            r._x_ignore && i()
        }
        )
    }
    )
}
function Pt(e, t=k) {
    t(e, n => {
        sr(n),
        Ms(n)
    }
    )
}
var er = []
  , tr = []
  , nr = [];
function Fs(e) {
    nr.push(e)
}
function Nt(e, t) {
    typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []),
    e._x_cleanups.push(t)) : (t = e,
    tr.push(t))
}
function rr(e) {
    er.push(e)
}
function ir(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n)
}
function sr(e, t) {
    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach( ([n,r]) => {
        (t === void 0 || t.includes(n)) && (r.forEach(i => i()),
        delete e._x_attributeCleanups[n])
    }
    )
}
function Ms(e) {
    if (e._x_cleanups)
        for (; e._x_cleanups.length; )
            e._x_cleanups.pop()()
}
var Ft = new MutationObserver(It)
  , Mt = !1;
function jt() {
    Ft.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    Mt = !0
}
function or() {
    js(),
    Ft.disconnect(),
    Mt = !1
}
var oe = [];
function js() {
    let e = Ft.takeRecords();
    oe.push( () => e.length > 0 && It(e));
    let t = oe.length;
    queueMicrotask( () => {
        if (oe.length === t)
            for (; oe.length > 0; )
                oe.shift()()
    }
    )
}
function O(e) {
    if (!Mt)
        return e();
    or();
    let t = e();
    return jt(),
    t
}
var Lt = !1
  , Ne = [];
function Ls() {
    Lt = !0
}
function Is() {
    Lt = !1,
    It(Ne),
    Ne = []
}
function It(e) {
    if (Lt) {
        Ne = Ne.concat(e);
        return
    }
    let t = new Set
      , n = new Set
      , r = new Map
      , i = new Map;
    for (let s = 0; s < e.length; s++)
        if (!e[s].target._x_ignoreMutationObserver && (e[s].type === "childList" && (e[s].addedNodes.forEach(o => o.nodeType === 1 && t.add(o)),
        e[s].removedNodes.forEach(o => o.nodeType === 1 && n.add(o))),
        e[s].type === "attributes")) {
            let o = e[s].target
              , a = e[s].attributeName
              , c = e[s].oldValue
              , l = () => {
                r.has(o) || r.set(o, []),
                r.get(o).push({
                    name: a,
                    value: o.getAttribute(a)
                })
            }
              , d = () => {
                i.has(o) || i.set(o, []),
                i.get(o).push(a)
            }
            ;
            o.hasAttribute(a) && c === null ? l() : o.hasAttribute(a) ? (d(),
            l()) : d()
        }
    i.forEach( (s, o) => {
        sr(o, s)
    }
    ),
    r.forEach( (s, o) => {
        er.forEach(a => a(o, s))
    }
    );
    for (let s of n)
        t.has(s) || (tr.forEach(o => o(s)),
        Pt(s));
    t.forEach(s => {
        s._x_ignoreSelf = !0,
        s._x_ignore = !0
    }
    );
    for (let s of t)
        n.has(s) || s.isConnected && (delete s._x_ignoreSelf,
        delete s._x_ignore,
        nr.forEach(o => o(s)),
        s._x_ignore = !0,
        s._x_ignoreSelf = !0);
    t.forEach(s => {
        delete s._x_ignoreSelf,
        delete s._x_ignore
    }
    ),
    t = null,
    n = null,
    r = null,
    i = null
}
function ar(e) {
    return ge(Z(e))
}
function ye(e, t, n) {
    return e._x_dataStack = [t, ...Z(n || e)],
    () => {
        e._x_dataStack = e._x_dataStack.filter(r => r !== t)
    }
}
function Z(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? Z(e.host) : e.parentNode ? Z(e.parentNode) : []
}
function ge(e) {
    return new Proxy({
        objects: e
    },Bs)
}
var Bs = {
    ownKeys({objects: e}) {
        return Array.from(new Set(e.flatMap(t => Object.keys(t))))
    },
    has({objects: e}, t) {
        return t == Symbol.unscopables ? !1 : e.some(n => Object.prototype.hasOwnProperty.call(n, t) || Reflect.has(n, t))
    },
    get({objects: e}, t, n) {
        return t == "toJSON" ? Ds : Reflect.get(e.find(r => Reflect.has(r, t)) || {}, t, n)
    },
    set({objects: e}, t, n, r) {
        const i = e.find(o => Object.prototype.hasOwnProperty.call(o, t)) || e[e.length - 1]
          , s = Object.getOwnPropertyDescriptor(i, t);
        return s != null && s.set && (s != null && s.get) ? Reflect.set(i, t, n, r) : Reflect.set(i, t, n)
    }
};
function Ds() {
    return Reflect.ownKeys(this).reduce( (t, n) => (t[n] = Reflect.get(this, n),
    t), {})
}
function cr(e) {
    let t = r => typeof r == "object" && !Array.isArray(r) && r !== null
      , n = (r, i="") => {
        Object.entries(Object.getOwnPropertyDescriptors(r)).forEach( ([s,{value: o, enumerable: a}]) => {
            if (a === !1 || o === void 0 || typeof o == "object" && o !== null && o.__v_skip)
                return;
            let c = i === "" ? s : `${i}.${s}`;
            typeof o == "object" && o !== null && o._x_interceptor ? r[s] = o.initialize(e, c, s) : t(o) && o !== r && !(o instanceof Element) && n(o, c)
        }
        )
    }
    ;
    return n(e)
}
function ur(e, t= () => {}
) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return e(this.initialValue, () => ks(r, i), o => ut(r, i, o), i, s)
        }
    };
    return t(n),
    r => {
        if (typeof r == "object" && r !== null && r._x_interceptor) {
            let i = n.initialize.bind(n);
            n.initialize = (s, o, a) => {
                let c = r.initialize(s, o, a);
                return n.initialValue = c,
                i(s, o, a)
            }
        } else
            n.initialValue = r;
        return n
    }
}
function ks(e, t) {
    return t.split(".").reduce( (n, r) => n[r], e)
}
function ut(e, t, n) {
    if (typeof t == "string" && (t = t.split(".")),
    t.length === 1)
        e[t[0]] = n;
    else {
        if (t.length === 0)
            throw error;
        return e[t[0]] || (e[t[0]] = {}),
        ut(e[t[0]], t.slice(1), n)
    }
}
var lr = {};
function N(e, t) {
    lr[e] = t
}
function lt(e, t) {
    return Object.entries(lr).forEach( ([n,r]) => {
        let i = null;
        function s() {
            if (i)
                return i;
            {
                let[o,a] = mr(t);
                return i = {
                    interceptor: ur,
                    ...o
                },
                Nt(t, a),
                i
            }
        }
        Object.defineProperty(e, `$${n}`, {
            get() {
                return r(t, s())
            },
            enumerable: !1
        })
    }
    ),
    e
}
function $s(e, t, n, ...r) {
    try {
        return n(...r)
    } catch (i) {
        pe(i, e, t)
    }
}
function pe(e, t, n=void 0) {
    e = Object.assign(e ?? {
        message: "No error message given."
    }, {
        el: t,
        expression: n
    }),
    console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t),
    setTimeout( () => {
        throw e
    }
    , 0)
}
var Te = !0;
function fr(e) {
    let t = Te;
    Te = !1;
    let n = e();
    return Te = t,
    n
}
function K(e, t, n={}) {
    let r;
    return v(e, t)(i => r = i, n),
    r
}
function v(...e) {
    return dr(...e)
}
var dr = pr;
function Us(e) {
    dr = e
}
function pr(e, t) {
    let n = {};
    lt(n, e);
    let r = [n, ...Z(e)]
      , i = typeof t == "function" ? Hs(r, t) : zs(r, t, e);
    return $s.bind(null, e, t, i)
}
function Hs(e, t) {
    return (n= () => {}
    , {scope: r={}, params: i=[]}={}) => {
        let s = t.apply(ge([r, ...e]), i);
        Fe(n, s)
    }
}
var Ge = {};
function qs(e, t) {
    if (Ge[e])
        return Ge[e];
    let n = Object.getPrototypeOf(async function() {}).constructor
      , r = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e
      , s = ( () => {
        try {
            let o = new n(["__self", "scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);
            return Object.defineProperty(o, "name", {
                value: `[Alpine] ${e}`
            }),
            o
        } catch (o) {
            return pe(o, t, e),
            Promise.resolve()
        }
    }
    )();
    return Ge[e] = s,
    s
}
function zs(e, t, n) {
    let r = qs(t, n);
    return (i= () => {}
    , {scope: s={}, params: o=[]}={}) => {
        r.result = void 0,
        r.finished = !1;
        let a = ge([s, ...e]);
        if (typeof r == "function") {
            let c = r(r, a).catch(l => pe(l, n, t));
            r.finished ? (Fe(i, r.result, a, o, n),
            r.result = void 0) : c.then(l => {
                Fe(i, l, a, o, n)
            }
            ).catch(l => pe(l, n, t)).finally( () => r.result = void 0)
        }
    }
}
function Fe(e, t, n, r, i) {
    if (Te && typeof t == "function") {
        let s = t.apply(n, r);
        s instanceof Promise ? s.then(o => Fe(e, o, n, r)).catch(o => pe(o, i, t)) : e(s)
    } else
        typeof t == "object" && t instanceof Promise ? t.then(s => e(s)) : e(t)
}
var Bt = "x-";
function re(e="") {
    return Bt + e
}
function Ks(e) {
    Bt = e
}
var ft = {};
function A(e, t) {
    return ft[e] = t,
    {
        before(n) {
            if (!ft[n]) {
                console.warn(String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`);
                return
            }
            const r = q.indexOf(n);
            q.splice(r >= 0 ? r : q.indexOf("DEFAULT"), 0, e)
        }
    }
}
function Dt(e, t, n) {
    if (t = Array.from(t),
    e._x_virtualDirectives) {
        let s = Object.entries(e._x_virtualDirectives).map( ([a,c]) => ({
            name: a,
            value: c
        }))
          , o = hr(s);
        s = s.map(a => o.find(c => c.name === a.name) ? {
            name: `x-bind:${a.name}`,
            value: `"${a.value}"`
        } : a),
        t = t.concat(s)
    }
    let r = {};
    return t.map(br( (s, o) => r[s] = o)).filter(wr).map(Vs(r, n)).sort(Xs).map(s => Ws(e, s))
}
function hr(e) {
    return Array.from(e).map(br()).filter(t => !wr(t))
}
var dt = !1
  , ue = new Map
  , _r = Symbol();
function Js(e) {
    dt = !0;
    let t = Symbol();
    _r = t,
    ue.set(t, []);
    let n = () => {
        for (; ue.get(t).length; )
            ue.get(t).shift()();
        ue.delete(t)
    }
      , r = () => {
        dt = !1,
        n()
    }
    ;
    e(n),
    r()
}
function mr(e) {
    let t = []
      , n = a => t.push(a)
      , [r,i] = Ts(e);
    return t.push(i),
    [{
        Alpine: be,
        effect: r,
        cleanup: n,
        evaluateLater: v.bind(v, e),
        evaluate: K.bind(K, e)
    }, () => t.forEach(a => a())]
}
function Ws(e, t) {
    let n = () => {}
      , r = ft[t.type] || n
      , [i,s] = mr(e);
    ir(e, t.original, s);
    let o = () => {
        e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i),
        r = r.bind(r, e, t, i),
        dt ? ue.get(_r).push(r) : r())
    }
    ;
    return o.runCleanups = s,
    o
}
var yr = (e, t) => ({name: n, value: r}) => (n.startsWith(e) && (n = n.replace(e, t)),
{
    name: n,
    value: r
})
  , gr = e => e;
function br(e= () => {}
) {
    return ({name: t, value: n}) => {
        let {name: r, value: i} = xr.reduce( (s, o) => o(s), {
            name: t,
            value: n
        });
        return r !== t && e(r, t),
        {
            name: r,
            value: i
        }
    }
}
var xr = [];
function kt(e) {
    xr.push(e)
}
function wr({name: e}) {
    return Er().test(e)
}
var Er = () => new RegExp(`^${Bt}([^:^.]+)\\b`);
function Vs(e, t) {
    return ({name: n, value: r}) => {
        let i = n.match(Er())
          , s = n.match(/:([a-zA-Z0-9\-_:]+)/)
          , o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , a = t || e[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map(c => c.replace(".", "")),
            expression: r,
            original: a
        }
    }
}
var pt = "DEFAULT"
  , q = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", pt, "teleport"];
function Xs(e, t) {
    let n = q.indexOf(e.type) === -1 ? pt : e.type
      , r = q.indexOf(t.type) === -1 ? pt : t.type;
    return q.indexOf(n) - q.indexOf(r)
}
var ht = []
  , $t = !1;
function Ut(e= () => {}
) {
    return queueMicrotask( () => {
        $t || setTimeout( () => {
            _t()
        }
        )
    }
    ),
    new Promise(t => {
        ht.push( () => {
            e(),
            t()
        }
        )
    }
    )
}
function _t() {
    for ($t = !1; ht.length; )
        ht.shift()()
}
function Gs() {
    $t = !0
}
function Ht(e, t) {
    return Array.isArray(t) ? fn(e, t.join(" ")) : typeof t == "object" && t !== null ? Ys(e, t) : typeof t == "function" ? Ht(e, t()) : fn(e, t)
}
function fn(e, t) {
    let n = i => i.split(" ").filter(s => !e.classList.contains(s)).filter(Boolean)
      , r = i => (e.classList.add(...i),
    () => {
        e.classList.remove(...i)
    }
    );
    return t = t === !0 ? t = "" : t || "",
    r(n(t))
}
function Ys(e, t) {
    let n = a => a.split(" ").filter(Boolean)
      , r = Object.entries(t).flatMap( ([a,c]) => c ? n(a) : !1).filter(Boolean)
      , i = Object.entries(t).flatMap( ([a,c]) => c ? !1 : n(a)).filter(Boolean)
      , s = []
      , o = [];
    return i.forEach(a => {
        e.classList.contains(a) && (e.classList.remove(a),
        o.push(a))
    }
    ),
    r.forEach(a => {
        e.classList.contains(a) || (e.classList.add(a),
        s.push(a))
    }
    ),
    () => {
        o.forEach(a => e.classList.add(a)),
        s.forEach(a => e.classList.remove(a))
    }
}
function $e(e, t) {
    return typeof t == "object" && t !== null ? Zs(e, t) : Qs(e, t)
}
function Zs(e, t) {
    let n = {};
    return Object.entries(t).forEach( ([r,i]) => {
        n[r] = e.style[r],
        r.startsWith("--") || (r = eo(r)),
        e.style.setProperty(r, i)
    }
    ),
    setTimeout( () => {
        e.style.length === 0 && e.removeAttribute("style")
    }
    ),
    () => {
        $e(e, n)
    }
}
function Qs(e, t) {
    let n = e.getAttribute("style", t);
    return e.setAttribute("style", t),
    () => {
        e.setAttribute("style", n || "")
    }
}
function eo(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function mt(e, t= () => {}
) {
    let n = !1;
    return function() {
        n ? t.apply(this, arguments) : (n = !0,
        e.apply(this, arguments))
    }
}
A("transition", (e, {value: t, modifiers: n, expression: r}, {evaluate: i}) => {
    typeof r == "function" && (r = i(r)),
    r !== !1 && (!r || typeof r == "boolean" ? no(e, n, t) : to(e, r, t))
}
);
function to(e, t, n) {
    Sr(e, Ht, ""),
    {
        enter: i => {
            e._x_transition.enter.during = i
        }
        ,
        "enter-start": i => {
            e._x_transition.enter.start = i
        }
        ,
        "enter-end": i => {
            e._x_transition.enter.end = i
        }
        ,
        leave: i => {
            e._x_transition.leave.during = i
        }
        ,
        "leave-start": i => {
            e._x_transition.leave.start = i
        }
        ,
        "leave-end": i => {
            e._x_transition.leave.end = i
        }
    }[n](t)
}
function no(e, t, n) {
    Sr(e, $e);
    let r = !t.includes("in") && !t.includes("out") && !n
      , i = r || t.includes("in") || ["enter"].includes(n)
      , s = r || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !r && (t = t.filter( (y, x) => x < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter( (y, x) => x > t.indexOf("out")));
    let o = !t.includes("opacity") && !t.includes("scale")
      , a = o || t.includes("opacity")
      , c = o || t.includes("scale")
      , l = a ? 0 : 1
      , d = c ? ae(t, "scale", 95) / 100 : 1
      , f = ae(t, "delay", 0) / 1e3
      , m = ae(t, "origin", "center")
      , b = "opacity, transform"
      , h = ae(t, "duration", 150) / 1e3
      , _ = ae(t, "duration", 75) / 1e3
      , p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (e._x_transition.enter.during = {
        transformOrigin: m,
        transitionDelay: `${f}s`,
        transitionProperty: b,
        transitionDuration: `${h}s`,
        transitionTimingFunction: p
    },
    e._x_transition.enter.start = {
        opacity: l,
        transform: `scale(${d})`
    },
    e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    s && (e._x_transition.leave.during = {
        transformOrigin: m,
        transitionDelay: `${f}s`,
        transitionProperty: b,
        transitionDuration: `${_}s`,
        transitionTimingFunction: p
    },
    e._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    e._x_transition.leave.end = {
        opacity: l,
        transform: `scale(${d})`
    })
}
function Sr(e, t, n={}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in(r= () => {}
        , i= () => {}
        ) {
            yt(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, r, i)
        },
        out(r= () => {}
        , i= () => {}
        ) {
            yt(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, r, i)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
    const i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let s = () => i(n);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : s() : e._x_transition ? e._x_transition.in(n) : s();
        return
    }
    e._x_hidePromise = e._x_transition ? new Promise( (o, a) => {
        e._x_transition.out( () => {}
        , () => o(r)),
        e._x_transitioning && e._x_transitioning.beforeCancel( () => a({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(r),
    queueMicrotask( () => {
        let o = Ar(e);
        o ? (o._x_hideChildren || (o._x_hideChildren = []),
        o._x_hideChildren.push(e)) : i( () => {
            let a = c => {
                let l = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(a)]).then( ([d]) => d());
                return delete c._x_hidePromise,
                delete c._x_hideChildren,
                l
            }
            ;
            a(e).catch(c => {
                if (!c.isFromCancelledTransition)
                    throw c
            }
            )
        }
        )
    }
    )
}
;
function Ar(e) {
    let t = e.parentNode;
    if (t)
        return t._x_hidePromise ? t : Ar(t)
}
function yt(e, t, {during: n, start: r, end: i}={}, s= () => {}
, o= () => {}
) {
    if (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
        s(),
        o();
        return
    }
    let a, c, l;
    ro(e, {
        start() {
            a = t(e, r)
        },
        during() {
            c = t(e, n)
        },
        before: s,
        end() {
            a(),
            l = t(e, i)
        },
        after: o,
        cleanup() {
            c(),
            l()
        }
    })
}
function ro(e, t) {
    let n, r, i, s = mt( () => {
        O( () => {
            n = !0,
            r || t.before(),
            i || (t.end(),
            _t()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning
        }
        )
    }
    );
    e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o)
        },
        cancel: mt(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            s()
        }),
        finish: s
    },
    O( () => {
        t.start(),
        t.during()
    }
    ),
    Gs(),
    requestAnimationFrame( () => {
        if (n)
            return;
        let o = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        o === 0 && (o = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        O( () => {
            t.before()
        }
        ),
        r = !0,
        requestAnimationFrame( () => {
            n || (O( () => {
                t.end()
            }
            ),
            _t(),
            setTimeout(e._x_transitioning.finish, o + a),
            i = !0)
        }
        )
    }
    )
}
function ae(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const r = e[e.indexOf(t) + 1];
    if (!r || t === "scale" && isNaN(r))
        return n;
    if (t === "duration" || t === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i)
            return i[1]
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
}
var $ = !1;
function X(e, t= () => {}
) {
    return (...n) => $ ? t(...n) : e(...n)
}
function io(e) {
    return (...t) => $ && e(...t)
}
var Or = [];
function Ue(e) {
    Or.push(e)
}
function so(e, t) {
    Or.forEach(n => n(e, t)),
    $ = !0,
    vr( () => {
        I(t, (n, r) => {
            r(n, () => {}
            )
        }
        )
    }
    ),
    $ = !1
}
var gt = !1;
function oo(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    $ = !0,
    gt = !0,
    vr( () => {
        ao(t)
    }
    ),
    $ = !1,
    gt = !1
}
function ao(e) {
    let t = !1;
    I(e, (r, i) => {
        k(r, (s, o) => {
            if (t && Ps(s))
                return o();
            t = !0,
            i(s, o)
        }
        )
    }
    )
}
function vr(e) {
    let t = V;
    un( (n, r) => {
        let i = t(n);
        return ne(i),
        () => {}
    }
    ),
    e(),
    un(t)
}
function Rr(e, t, n, r=[]) {
    switch (e._x_bindings || (e._x_bindings = te({})),
    e._x_bindings[t] = n,
    t = r.includes("camel") ? mo(t) : t,
    t) {
    case "value":
        co(e, n);
        break;
    case "style":
        lo(e, n);
        break;
    case "class":
        uo(e, n);
        break;
    case "selected":
    case "checked":
        fo(e, t, n);
        break;
    default:
        Tr(e, t, n);
        break
    }
}
function co(e, t) {
    if (e.type === "radio")
        e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (typeof t == "boolean" ? e.checked = Ce(e.value) === t : e.checked = dn(e.value, t));
    else if (e.type === "checkbox")
        Number.isInteger(t) ? e.value = t : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(n => dn(n, e.value)) : e.checked = !!t;
    else if (e.tagName === "SELECT")
        _o(e, t);
    else {
        if (e.value === t)
            return;
        e.value = t === void 0 ? "" : t
    }
}
function uo(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
    e._x_undoAddedClasses = Ht(e, t)
}
function lo(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
    e._x_undoAddedStyles = $e(e, t)
}
function fo(e, t, n) {
    Tr(e, t, n),
    ho(e, t, n)
}
function Tr(e, t, n) {
    [null, void 0, !1].includes(n) && yo(t) ? e.removeAttribute(t) : (Cr(t) && (n = t),
    po(e, t, n))
}
function po(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n)
}
function ho(e, t, n) {
    e[t] !== n && (e[t] = n)
}
function _o(e, t) {
    const n = [].concat(t).map(r => r + "");
    Array.from(e.options).forEach(r => {
        r.selected = n.includes(r.value)
    }
    )
}
function mo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase())
}
function dn(e, t) {
    return e == t
}
function Ce(e) {
    return [1, "1", "true", "on", "yes", !0].includes(e) ? !0 : [0, "0", "false", "off", "no", !1].includes(e) ? !1 : e ? !!e : null
}
function Cr(e) {
    return ["disabled", "checked", "required", "readonly", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}
function yo(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
}
function go(e, t, n) {
    return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : Pr(e, t, n)
}
function bo(e, t, n, r=!0) {
    if (e._x_bindings && e._x_bindings[t] !== void 0)
        return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
        let i = e._x_inlineBindings[t];
        return i.extract = r,
        fr( () => K(e, i.expression))
    }
    return Pr(e, t, n)
}
function Pr(e, t, n) {
    let r = e.getAttribute(t);
    return r === null ? typeof n == "function" ? n() : n : r === "" ? !0 : Cr(t) ? !![t, "true"].includes(r) : r
}
function Nr(e, t) {
    var n;
    return function() {
        var r = this
          , i = arguments
          , s = function() {
            n = null,
            e.apply(r, i)
        };
        clearTimeout(n),
        n = setTimeout(s, t)
    }
}
function Fr(e, t) {
    let n;
    return function() {
        let r = this
          , i = arguments;
        n || (e.apply(r, i),
        n = !0,
        setTimeout( () => n = !1, t))
    }
}
function Mr({get: e, set: t}, {get: n, set: r}) {
    let i = !0, s, o = V( () => {
        let a = e()
          , c = n();
        if (i)
            r(Ye(a)),
            i = !1;
        else {
            let l = JSON.stringify(a)
              , d = JSON.stringify(c);
            l !== s ? r(Ye(a)) : l !== d && t(Ye(c))
        }
        s = JSON.stringify(e()),
        JSON.stringify(n())
    }
    );
    return () => {
        ne(o)
    }
}
function Ye(e) {
    return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e
}
function xo(e) {
    (Array.isArray(e) ? e : [e]).forEach(n => n(be))
}
var H = {}
  , pn = !1;
function wo(e, t) {
    if (pn || (H = te(H),
    pn = !0),
    t === void 0)
        return H[e];
    H[e] = t,
    typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && H[e].init(),
    cr(H[e])
}
function Eo() {
    return H
}
var jr = {};
function So(e, t) {
    let n = typeof t != "function" ? () => t : t;
    return e instanceof Element ? Lr(e, n()) : (jr[e] = n,
    () => {}
    )
}
function Ao(e) {
    return Object.entries(jr).forEach( ([t,n]) => {
        Object.defineProperty(e, t, {
            get() {
                return (...r) => n(...r)
            }
        })
    }
    ),
    e
}
function Lr(e, t, n) {
    let r = [];
    for (; r.length; )
        r.pop()();
    let i = Object.entries(t).map( ([o,a]) => ({
        name: o,
        value: a
    }))
      , s = hr(i);
    return i = i.map(o => s.find(a => a.name === o.name) ? {
        name: `x-bind:${o.name}`,
        value: `"${o.value}"`
    } : o),
    Dt(e, i, n).map(o => {
        r.push(o.runCleanups),
        o()
    }
    ),
    () => {
        for (; r.length; )
            r.pop()()
    }
}
var Ir = {};
function Oo(e, t) {
    Ir[e] = t
}
function vo(e, t) {
    return Object.entries(Ir).forEach( ([n,r]) => {
        Object.defineProperty(e, n, {
            get() {
                return (...i) => r.bind(t)(...i)
            },
            enumerable: !1
        })
    }
    ),
    e
}
var Ro = {
    get reactive() {
        return te
    },
    get release() {
        return ne
    },
    get effect() {
        return V
    },
    get raw() {
        return Jn
    },
    version: "3.13.8",
    flushAndStopDeferringMutations: Is,
    dontAutoEvaluateFunctions: fr,
    disableEffectScheduling: vs,
    startObservingMutations: jt,
    stopObservingMutations: or,
    setReactivityEngine: Rs,
    onAttributeRemoved: ir,
    onAttributesAdded: rr,
    closestDataStack: Z,
    skipDuringClone: X,
    onlyDuringClone: io,
    addRootSelector: Yn,
    addInitSelector: Zn,
    interceptClone: Ue,
    addScopeToNode: ye,
    deferMutations: Ls,
    mapAttributes: kt,
    evaluateLater: v,
    interceptInit: Ns,
    setEvaluator: Us,
    mergeProxies: ge,
    extractProp: bo,
    findClosest: me,
    onElRemoved: Nt,
    closestRoot: ke,
    destroyTree: Pt,
    interceptor: ur,
    transition: yt,
    setStyles: $e,
    mutateDom: O,
    directive: A,
    entangle: Mr,
    throttle: Fr,
    debounce: Nr,
    evaluate: K,
    initTree: I,
    nextTick: Ut,
    prefixed: re,
    prefix: Ks,
    plugin: xo,
    magic: N,
    store: wo,
    start: Cs,
    clone: oo,
    cloneNode: so,
    bound: go,
    $data: ar,
    watch: Wn,
    walk: k,
    data: Oo,
    bind: So
}
  , be = Ro;
function To(e, t) {
    const n = Object.create(null)
      , r = e.split(",");
    for (let i = 0; i < r.length; i++)
        n[r[i]] = !0;
    return t ? i => !!n[i.toLowerCase()] : i => !!n[i]
}
var Co = Object.freeze({}), Po = Object.prototype.hasOwnProperty, He = (e, t) => Po.call(e, t), J = Array.isArray, fe = e => Br(e) === "[object Map]", No = e => typeof e == "string", qt = e => typeof e == "symbol", qe = e => e !== null && typeof e == "object", Fo = Object.prototype.toString, Br = e => Fo.call(e), Dr = e => Br(e).slice(8, -1), zt = e => No(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mo = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
, jo = Mo(e => e.charAt(0).toUpperCase() + e.slice(1)), kr = (e, t) => e !== t && (e === e || t === t), bt = new WeakMap, ce = [], F, W = Symbol("iterate"), xt = Symbol("Map key iterate");
function Lo(e) {
    return e && e._isEffect === !0
}
function Io(e, t=Co) {
    Lo(e) && (e = e.raw);
    const n = ko(e, t);
    return t.lazy || n(),
    n
}
function Bo(e) {
    e.active && ($r(e),
    e.options.onStop && e.options.onStop(),
    e.active = !1)
}
var Do = 0;
function ko(e, t) {
    const n = function() {
        if (!n.active)
            return e();
        if (!ce.includes(n)) {
            $r(n);
            try {
                return Uo(),
                ce.push(n),
                F = n,
                e()
            } finally {
                ce.pop(),
                Ur(),
                F = ce[ce.length - 1]
            }
        }
    };
    return n.id = Do++,
    n.allowRecurse = !!t.allowRecurse,
    n._isEffect = !0,
    n.active = !0,
    n.raw = e,
    n.deps = [],
    n.options = t,
    n
}
function $r(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
var Q = !0
  , Kt = [];
function $o() {
    Kt.push(Q),
    Q = !1
}
function Uo() {
    Kt.push(Q),
    Q = !0
}
function Ur() {
    const e = Kt.pop();
    Q = e === void 0 ? !0 : e
}
function P(e, t, n) {
    if (!Q || F === void 0)
        return;
    let r = bt.get(e);
    r || bt.set(e, r = new Map);
    let i = r.get(n);
    i || r.set(n, i = new Set),
    i.has(F) || (i.add(F),
    F.deps.push(i),
    F.options.onTrack && F.options.onTrack({
        effect: F,
        target: e,
        type: t,
        key: n
    }))
}
function U(e, t, n, r, i, s) {
    const o = bt.get(e);
    if (!o)
        return;
    const a = new Set
      , c = d => {
        d && d.forEach(f => {
            (f !== F || f.allowRecurse) && a.add(f)
        }
        )
    }
    ;
    if (t === "clear")
        o.forEach(c);
    else if (n === "length" && J(e))
        o.forEach( (d, f) => {
            (f === "length" || f >= r) && c(d)
        }
        );
    else
        switch (n !== void 0 && c(o.get(n)),
        t) {
        case "add":
            J(e) ? zt(n) && c(o.get("length")) : (c(o.get(W)),
            fe(e) && c(o.get(xt)));
            break;
        case "delete":
            J(e) || (c(o.get(W)),
            fe(e) && c(o.get(xt)));
            break;
        case "set":
            fe(e) && c(o.get(W));
            break
        }
    const l = d => {
        d.options.onTrigger && d.options.onTrigger({
            effect: d,
            target: e,
            key: n,
            type: t,
            newValue: r,
            oldValue: i,
            oldTarget: s
        }),
        d.options.scheduler ? d.options.scheduler(d) : d()
    }
    ;
    a.forEach(l)
}
var Ho = To("__proto__,__v_isRef,__isVue")
  , Hr = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(qt))
  , qo = qr()
  , zo = qr(!0)
  , hn = Ko();
function Ko() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = E(this);
            for (let s = 0, o = this.length; s < o; s++)
                P(r, "get", s + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(E)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            $o();
            const r = E(this)[t].apply(this, n);
            return Ur(),
            r
        }
    }
    ),
    e
}
function qr(e=!1, t=!1) {
    return function(r, i, s) {
        if (i === "__v_isReactive")
            return !e;
        if (i === "__v_isReadonly")
            return e;
        if (i === "__v_raw" && s === (e ? t ? aa : Wr : t ? oa : Jr).get(r))
            return r;
        const o = J(r);
        if (!e && o && He(hn, i))
            return Reflect.get(hn, i, s);
        const a = Reflect.get(r, i, s);
        return (qt(i) ? Hr.has(i) : Ho(i)) || (e || P(r, "get", i),
        t) ? a : wt(a) ? !o || !zt(i) ? a.value : a : qe(a) ? e ? Vr(a) : Xt(a) : a
    }
}
var Jo = Wo();
function Wo(e=!1) {
    return function(n, r, i, s) {
        let o = n[r];
        if (!e && (i = E(i),
        o = E(o),
        !J(n) && wt(o) && !wt(i)))
            return o.value = i,
            !0;
        const a = J(n) && zt(r) ? Number(r) < n.length : He(n, r)
          , c = Reflect.set(n, r, i, s);
        return n === E(s) && (a ? kr(i, o) && U(n, "set", r, i, o) : U(n, "add", r, i)),
        c
    }
}
function Vo(e, t) {
    const n = He(e, t)
      , r = e[t]
      , i = Reflect.deleteProperty(e, t);
    return i && n && U(e, "delete", t, void 0, r),
    i
}
function Xo(e, t) {
    const n = Reflect.has(e, t);
    return (!qt(t) || !Hr.has(t)) && P(e, "has", t),
    n
}
function Go(e) {
    return P(e, "iterate", J(e) ? "length" : W),
    Reflect.ownKeys(e)
}
var Yo = {
    get: qo,
    set: Jo,
    deleteProperty: Vo,
    has: Xo,
    ownKeys: Go
}
  , Zo = {
    get: zo,
    set(e, t) {
        return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
        !0
    },
    deleteProperty(e, t) {
        return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
        !0
    }
}
  , Jt = e => qe(e) ? Xt(e) : e
  , Wt = e => qe(e) ? Vr(e) : e
  , Vt = e => e
  , ze = e => Reflect.getPrototypeOf(e);
function xe(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = E(e)
      , s = E(t);
    t !== s && !n && P(i, "get", t),
    !n && P(i, "get", s);
    const {has: o} = ze(i)
      , a = r ? Vt : n ? Wt : Jt;
    if (o.call(i, t))
        return a(e.get(t));
    if (o.call(i, s))
        return a(e.get(s));
    e !== i && e.get(t)
}
function we(e, t=!1) {
    const n = this.__v_raw
      , r = E(n)
      , i = E(e);
    return e !== i && !t && P(r, "has", e),
    !t && P(r, "has", i),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Ee(e, t=!1) {
    return e = e.__v_raw,
    !t && P(E(e), "iterate", W),
    Reflect.get(e, "size", e)
}
function _n(e) {
    e = E(e);
    const t = E(this);
    return ze(t).has.call(t, e) || (t.add(e),
    U(t, "add", e, e)),
    this
}
function mn(e, t) {
    t = E(t);
    const n = E(this)
      , {has: r, get: i} = ze(n);
    let s = r.call(n, e);
    s ? Kr(n, r, e) : (e = E(e),
    s = r.call(n, e));
    const o = i.call(n, e);
    return n.set(e, t),
    s ? kr(t, o) && U(n, "set", e, t, o) : U(n, "add", e, t),
    this
}
function yn(e) {
    const t = E(this)
      , {has: n, get: r} = ze(t);
    let i = n.call(t, e);
    i ? Kr(t, n, e) : (e = E(e),
    i = n.call(t, e));
    const s = r ? r.call(t, e) : void 0
      , o = t.delete(e);
    return i && U(t, "delete", e, void 0, s),
    o
}
function gn() {
    const e = E(this)
      , t = e.size !== 0
      , n = fe(e) ? new Map(e) : new Set(e)
      , r = e.clear();
    return t && U(e, "clear", void 0, void 0, n),
    r
}
function Se(e, t) {
    return function(r, i) {
        const s = this
          , o = s.__v_raw
          , a = E(o)
          , c = t ? Vt : e ? Wt : Jt;
        return !e && P(a, "iterate", W),
        o.forEach( (l, d) => r.call(i, c(l), c(d), s))
    }
}
function Ae(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , s = E(i)
          , o = fe(s)
          , a = e === "entries" || e === Symbol.iterator && o
          , c = e === "keys" && o
          , l = i[e](...r)
          , d = n ? Vt : t ? Wt : Jt;
        return !t && P(s, "iterate", c ? xt : W),
        {
            next() {
                const {value: f, done: m} = l.next();
                return m ? {
                    value: f,
                    done: m
                } : {
                    value: a ? [d(f[0]), d(f[1])] : d(f),
                    done: m
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function D(e) {
    return function(...t) {
        {
            const n = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(`${jo(e)} operation ${n}failed: target is readonly.`, E(this))
        }
        return e === "delete" ? !1 : this
    }
}
function Qo() {
    const e = {
        get(s) {
            return xe(this, s)
        },
        get size() {
            return Ee(this)
        },
        has: we,
        add: _n,
        set: mn,
        delete: yn,
        clear: gn,
        forEach: Se(!1, !1)
    }
      , t = {
        get(s) {
            return xe(this, s, !1, !0)
        },
        get size() {
            return Ee(this)
        },
        has: we,
        add: _n,
        set: mn,
        delete: yn,
        clear: gn,
        forEach: Se(!1, !0)
    }
      , n = {
        get(s) {
            return xe(this, s, !0)
        },
        get size() {
            return Ee(this, !0)
        },
        has(s) {
            return we.call(this, s, !0)
        },
        add: D("add"),
        set: D("set"),
        delete: D("delete"),
        clear: D("clear"),
        forEach: Se(!0, !1)
    }
      , r = {
        get(s) {
            return xe(this, s, !0, !0)
        },
        get size() {
            return Ee(this, !0)
        },
        has(s) {
            return we.call(this, s, !0)
        },
        add: D("add"),
        set: D("set"),
        delete: D("delete"),
        clear: D("clear"),
        forEach: Se(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        e[s] = Ae(s, !1, !1),
        n[s] = Ae(s, !0, !1),
        t[s] = Ae(s, !1, !0),
        r[s] = Ae(s, !0, !0)
    }
    ),
    [e, n, t, r]
}
var [ea,ta,na,ra] = Qo();
function zr(e, t) {
    const n = t ? e ? ra : na : e ? ta : ea;
    return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(He(n, i) && i in r ? n : r, i, s)
}
var ia = {
    get: zr(!1, !1)
}
  , sa = {
    get: zr(!0, !1)
};
function Kr(e, t, n) {
    const r = E(n);
    if (r !== n && t.call(e, r)) {
        const i = Dr(e);
        console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var Jr = new WeakMap
  , oa = new WeakMap
  , Wr = new WeakMap
  , aa = new WeakMap;
function ca(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function ua(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ca(Dr(e))
}
function Xt(e) {
    return e && e.__v_isReadonly ? e : Xr(e, !1, Yo, ia, Jr)
}
function Vr(e) {
    return Xr(e, !0, Zo, sa, Wr)
}
function Xr(e, t, n, r, i) {
    if (!qe(e))
        return console.warn(`value cannot be made reactive: ${String(e)}`),
        e;
    if (e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = i.get(e);
    if (s)
        return s;
    const o = ua(e);
    if (o === 0)
        return e;
    const a = new Proxy(e,o === 2 ? r : n);
    return i.set(e, a),
    a
}
function E(e) {
    return e && E(e.__v_raw) || e
}
function wt(e) {
    return !!(e && e.__v_isRef === !0)
}
N("nextTick", () => Ut);
N("dispatch", e => le.bind(le, e));
N("watch", (e, {evaluateLater: t, cleanup: n}) => (r, i) => {
    let s = t(r)
      , a = Wn( () => {
        let c;
        return s(l => c = l),
        c
    }
    , i);
    n(a)
}
);
N("store", Eo);
N("data", e => ar(e));
N("root", e => ke(e));
N("refs", e => (e._x_refs_proxy || (e._x_refs_proxy = ge(la(e))),
e._x_refs_proxy));
function la(e) {
    let t = [];
    return me(e, n => {
        n._x_refs && t.push(n._x_refs)
    }
    ),
    t
}
var Ze = {};
function Gr(e) {
    return Ze[e] || (Ze[e] = 0),
    ++Ze[e]
}
function fa(e, t) {
    return me(e, n => {
        if (n._x_ids && n._x_ids[t])
            return !0
    }
    )
}
function da(e, t) {
    e._x_ids || (e._x_ids = {}),
    e._x_ids[t] || (e._x_ids[t] = Gr(t))
}
N("id", (e, {cleanup: t}) => (n, r=null) => {
    let i = `${n}${r ? `-${r}` : ""}`;
    return pa(e, i, t, () => {
        let s = fa(e, n)
          , o = s ? s._x_ids[n] : Gr(n);
        return r ? `${n}-${o}-${r}` : `${n}-${o}`
    }
    )
}
);
Ue( (e, t) => {
    e._x_id && (t._x_id = e._x_id)
}
);
function pa(e, t, n, r) {
    if (e._x_id || (e._x_id = {}),
    e._x_id[t])
        return e._x_id[t];
    let i = r();
    return e._x_id[t] = i,
    n( () => {
        delete e._x_id[t]
    }
    ),
    i
}
N("el", e => e);
Yr("Focus", "focus", "focus");
Yr("Persist", "persist", "persist");
function Yr(e, t, n) {
    N(t, r => C(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
A("modelable", (e, {expression: t}, {effect: n, evaluateLater: r, cleanup: i}) => {
    let s = r(t)
      , o = () => {
        let d;
        return s(f => d = f),
        d
    }
      , a = r(`${t} = __placeholder`)
      , c = d => a( () => {}
    , {
        scope: {
            __placeholder: d
        }
    })
      , l = o();
    c(l),
    queueMicrotask( () => {
        if (!e._x_model)
            return;
        e._x_removeModelListeners.default();
        let d = e._x_model.get
          , f = e._x_model.set
          , m = Mr({
            get() {
                return d()
            },
            set(b) {
                f(b)
            }
        }, {
            get() {
                return o()
            },
            set(b) {
                c(b)
            }
        });
        i(m)
    }
    )
}
);
A("teleport", (e, {modifiers: t, expression: n}, {cleanup: r}) => {
    e.tagName.toLowerCase() !== "template" && C("x-teleport can only be used on a <template> tag", e);
    let i = bn(n)
      , s = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = s,
    s._x_teleportBack = e,
    e.setAttribute("data-teleport-template", !0),
    s.setAttribute("data-teleport-target", !0),
    e._x_forwardEvents && e._x_forwardEvents.forEach(a => {
        s.addEventListener(a, c => {
            c.stopPropagation(),
            e.dispatchEvent(new c.constructor(c.type,c))
        }
        )
    }
    ),
    ye(s, {}, e);
    let o = (a, c, l) => {
        l.includes("prepend") ? c.parentNode.insertBefore(a, c) : l.includes("append") ? c.parentNode.insertBefore(a, c.nextSibling) : c.appendChild(a)
    }
    ;
    O( () => {
        o(s, i, t),
        I(s),
        s._x_ignore = !0
    }
    ),
    e._x_teleportPutBack = () => {
        let a = bn(n);
        O( () => {
            o(e._x_teleport, a, t)
        }
        )
    }
    ,
    r( () => s.remove())
}
);
var ha = document.createElement("div");
function bn(e) {
    let t = X( () => document.querySelector(e), () => ha)();
    return t || C(`Cannot find x-teleport element for selector: "${e}"`),
    t
}
var Zr = () => {}
;
Zr.inline = (e, {modifiers: t}, {cleanup: n}) => {
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
    n( () => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
    }
    )
}
;
A("ignore", Zr);
A("effect", X( (e, {expression: t}, {effect: n}) => {
    n(v(e, t))
}
));
function Et(e, t, n, r) {
    let i = e
      , s = c => r(c)
      , o = {}
      , a = (c, l) => d => l(c, d);
    if (n.includes("dot") && (t = _a(t)),
    n.includes("camel") && (t = ma(t)),
    n.includes("passive") && (o.passive = !0),
    n.includes("capture") && (o.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("debounce")) {
        let c = n[n.indexOf("debounce") + 1] || "invalid-wait"
          , l = Me(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = Nr(s, l)
    }
    if (n.includes("throttle")) {
        let c = n[n.indexOf("throttle") + 1] || "invalid-wait"
          , l = Me(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = Fr(s, l)
    }
    return n.includes("prevent") && (s = a(s, (c, l) => {
        l.preventDefault(),
        c(l)
    }
    )),
    n.includes("stop") && (s = a(s, (c, l) => {
        l.stopPropagation(),
        c(l)
    }
    )),
    n.includes("self") && (s = a(s, (c, l) => {
        l.target === e && c(l)
    }
    )),
    (n.includes("away") || n.includes("outside")) && (i = document,
    s = a(s, (c, l) => {
        e.contains(l.target) || l.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && c(l))
    }
    )),
    n.includes("once") && (s = a(s, (c, l) => {
        c(l),
        i.removeEventListener(t, s, o)
    }
    )),
    s = a(s, (c, l) => {
        ga(t) && ba(l, n) || c(l)
    }
    ),
    i.addEventListener(t, s, o),
    () => {
        i.removeEventListener(t, s, o)
    }
}
function _a(e) {
    return e.replace(/-/g, ".")
}
function ma(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase())
}
function Me(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function ya(e) {
    return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function ga(e) {
    return ["keydown", "keyup"].includes(e)
}
function ba(e, t) {
    let n = t.filter(s => !["window", "document", "prevent", "stop", "once", "capture"].includes(s));
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Me((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Me((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.length === 0 || n.length === 1 && xn(e.key).includes(n[0]))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(s => n.includes(s));
    return n = n.filter(s => !i.includes(s)),
    !(i.length > 0 && i.filter(o => ((o === "cmd" || o === "super") && (o = "meta"),
    e[`${o}Key`])).length === i.length && xn(e.key).includes(n[0]))
}
function xn(e) {
    if (!e)
        return [];
    e = ya(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return t[e] = e,
    Object.keys(t).map(n => {
        if (t[n] === e)
            return n
    }
    ).filter(n => n)
}
A("model", (e, {modifiers: t, expression: n}, {effect: r, cleanup: i}) => {
    let s = e;
    t.includes("parent") && (s = e.parentNode);
    let o = v(s, n), a;
    typeof n == "string" ? a = v(s, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? a = v(s, `${n()} = __placeholder`) : a = () => {}
    ;
    let c = () => {
        let m;
        return o(b => m = b),
        En(m) ? m.get() : m
    }
      , l = m => {
        let b;
        o(h => b = h),
        En(b) ? b.set(m) : a( () => {}
        , {
            scope: {
                __placeholder: m
            }
        })
    }
    ;
    typeof n == "string" && e.type === "radio" && O( () => {
        e.hasAttribute("name") || e.setAttribute("name", n)
    }
    );
    var d = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let f = $ ? () => {}
    : Et(e, d, t, m => {
        l(wn(e, t, m, c()))
    }
    );
    if (t.includes("fill") && ([void 0, null, ""].includes(c()) || e.type === "checkbox" && Array.isArray(c())) && l(wn(e, t, {
        target: e
    }, c())),
    e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    e._x_removeModelListeners.default = f,
    i( () => e._x_removeModelListeners.default()),
    e.form) {
        let m = Et(e.form, "reset", [], b => {
            Ut( () => e._x_model && e._x_model.set(e.value))
        }
        );
        i( () => m())
    }
    e._x_model = {
        get() {
            return c()
        },
        set(m) {
            l(m)
        }
    },
    e._x_forceModelUpdate = m => {
        m === void 0 && typeof n == "string" && n.match(/\./) && (m = ""),
        window.fromModel = !0,
        O( () => Rr(e, "value", m)),
        delete window.fromModel
    }
    ,
    r( () => {
        let m = c();
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(m)
    }
    )
}
);
function wn(e, t, n, r) {
    return O( () => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail !== null && n.detail !== void 0 ? n.detail : n.target.value;
        if (e.type === "checkbox")
            if (Array.isArray(r)) {
                let i = null;
                return t.includes("number") ? i = Qe(n.target.value) : t.includes("boolean") ? i = Ce(n.target.value) : i = n.target.value,
                n.target.checked ? r.concat([i]) : r.filter(s => !xa(s, i))
            } else
                return n.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
                return t.includes("number") ? Array.from(n.target.selectedOptions).map(i => {
                    let s = i.value || i.text;
                    return Qe(s)
                }
                ) : t.includes("boolean") ? Array.from(n.target.selectedOptions).map(i => {
                    let s = i.value || i.text;
                    return Ce(s)
                }
                ) : Array.from(n.target.selectedOptions).map(i => i.value || i.text);
            {
                let i;
                return e.type === "radio" ? n.target.checked ? i = n.target.value : i = r : i = n.target.value,
                t.includes("number") ? Qe(i) : t.includes("boolean") ? Ce(i) : t.includes("trim") ? i.trim() : i
            }
        }
    }
    )
}
function Qe(e) {
    let t = e ? parseFloat(e) : null;
    return wa(t) ? t : e
}
function xa(e, t) {
    return e == t
}
function wa(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function En(e) {
    return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function"
}
A("cloak", e => queueMicrotask( () => O( () => e.removeAttribute(re("cloak")))));
Zn( () => `[${re("init")}]`);
A("init", X( (e, {expression: t}, {evaluate: n}) => typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)));
A("text", (e, {expression: t}, {effect: n, evaluateLater: r}) => {
    let i = r(t);
    n( () => {
        i(s => {
            O( () => {
                e.textContent = s
            }
            )
        }
        )
    }
    )
}
);
A("html", (e, {expression: t}, {effect: n, evaluateLater: r}) => {
    let i = r(t);
    n( () => {
        i(s => {
            O( () => {
                e.innerHTML = s,
                e._x_ignoreSelf = !0,
                I(e),
                delete e._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
kt(yr(":", gr(re("bind:"))));
var Qr = (e, {value: t, modifiers: n, expression: r, original: i}, {effect: s, cleanup: o}) => {
    if (!t) {
        let c = {};
        Ao(c),
        v(e, r)(d => {
            Lr(e, d, i)
        }
        , {
            scope: c
        });
        return
    }
    if (t === "key")
        return Ea(e, r);
    if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract)
        return;
    let a = v(e, r);
    s( () => a(c => {
        c === void 0 && typeof r == "string" && r.match(/\./) && (c = ""),
        O( () => Rr(e, t, c, n))
    }
    )),
    o( () => {
        e._x_undoAddedClasses && e._x_undoAddedClasses(),
        e._x_undoAddedStyles && e._x_undoAddedStyles()
    }
    )
}
;
Qr.inline = (e, {value: t, modifiers: n, expression: r}) => {
    t && (e._x_inlineBindings || (e._x_inlineBindings = {}),
    e._x_inlineBindings[t] = {
        expression: r,
        extract: !1
    })
}
;
A("bind", Qr);
function Ea(e, t) {
    e._x_keyExpression = t
}
Yn( () => `[${re("data")}]`);
A("data", (e, {expression: t}, {cleanup: n}) => {
    if (Sa(e))
        return;
    t = t === "" ? "{}" : t;
    let r = {};
    lt(r, e);
    let i = {};
    vo(i, r);
    let s = K(e, t, {
        scope: i
    });
    (s === void 0 || s === !0) && (s = {}),
    lt(s, e);
    let o = te(s);
    cr(o);
    let a = ye(e, o);
    o.init && K(e, o.init),
    n( () => {
        o.destroy && K(e, o.destroy),
        a()
    }
    )
}
);
Ue( (e, t) => {
    e._x_dataStack && (t._x_dataStack = e._x_dataStack,
    t.setAttribute("data-has-alpine-state", !0))
}
);
function Sa(e) {
    return $ ? gt ? !0 : e.hasAttribute("data-has-alpine-state") : !1
}
A("show", (e, {modifiers: t, expression: n}, {effect: r}) => {
    let i = v(e, n);
    e._x_doHide || (e._x_doHide = () => {
        O( () => {
            e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
    e._x_doShow || (e._x_doShow = () => {
        O( () => {
            e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display")
        }
        )
    }
    );
    let s = () => {
        e._x_doHide(),
        e._x_isShown = !1
    }
    , o = () => {
        e._x_doShow(),
        e._x_isShown = !0
    }
    , a = () => setTimeout(o), c = mt(f => f ? o() : s(), f => {
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, f, o, s) : f ? a() : s()
    }
    ), l, d = !0;
    r( () => i(f => {
        !d && f === l || (t.includes("immediate") && (f ? a() : s()),
        c(f),
        l = f,
        d = !1)
    }
    ))
}
);
A("for", (e, {expression: t}, {effect: n, cleanup: r}) => {
    let i = Oa(t)
      , s = v(e, i.items)
      , o = v(e, e._x_keyExpression || "index");
    e._x_prevKeys = [],
    e._x_lookup = {},
    n( () => Aa(e, i, s, o)),
    r( () => {
        Object.values(e._x_lookup).forEach(a => a.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup
    }
    )
}
);
function Aa(e, t, n, r) {
    let i = o => typeof o == "object" && !Array.isArray(o)
      , s = e;
    n(o => {
        va(o) && o >= 0 && (o = Array.from(Array(o).keys(), p => p + 1)),
        o === void 0 && (o = []);
        let a = e._x_lookup
          , c = e._x_prevKeys
          , l = []
          , d = [];
        if (i(o))
            o = Object.entries(o).map( ([p,y]) => {
                let x = Sn(t, y, p, o);
                r(w => {
                    d.includes(w) && C("Duplicate key on x-for", e),
                    d.push(w)
                }
                , {
                    scope: {
                        index: p,
                        ...x
                    }
                }),
                l.push(x)
            }
            );
        else
            for (let p = 0; p < o.length; p++) {
                let y = Sn(t, o[p], p, o);
                r(x => {
                    d.includes(x) && C("Duplicate key on x-for", e),
                    d.push(x)
                }
                , {
                    scope: {
                        index: p,
                        ...y
                    }
                }),
                l.push(y)
            }
        let f = []
          , m = []
          , b = []
          , h = [];
        for (let p = 0; p < c.length; p++) {
            let y = c[p];
            d.indexOf(y) === -1 && b.push(y)
        }
        c = c.filter(p => !b.includes(p));
        let _ = "template";
        for (let p = 0; p < d.length; p++) {
            let y = d[p]
              , x = c.indexOf(y);
            if (x === -1)
                c.splice(p, 0, y),
                f.push([_, p]);
            else if (x !== p) {
                let w = c.splice(p, 1)[0]
                  , R = c.splice(x - 1, 1)[0];
                c.splice(p, 0, R),
                c.splice(x, 0, w),
                m.push([w, R])
            } else
                h.push(y);
            _ = y
        }
        for (let p = 0; p < b.length; p++) {
            let y = b[p];
            a[y]._x_effects && a[y]._x_effects.forEach(Kn),
            a[y].remove(),
            a[y] = null,
            delete a[y]
        }
        for (let p = 0; p < m.length; p++) {
            let[y,x] = m[p]
              , w = a[y]
              , R = a[x]
              , G = document.createElement("div");
            O( () => {
                R || C('x-for ":key" is undefined or invalid', s, x, a),
                R.after(G),
                w.after(R),
                R._x_currentIfEl && R.after(R._x_currentIfEl),
                G.before(w),
                w._x_currentIfEl && w.after(w._x_currentIfEl),
                G.remove()
            }
            ),
            R._x_refreshXForScope(l[d.indexOf(x)])
        }
        for (let p = 0; p < f.length; p++) {
            let[y,x] = f[p]
              , w = y === "template" ? s : a[y];
            w._x_currentIfEl && (w = w._x_currentIfEl);
            let R = l[x]
              , G = d[x]
              , ie = document.importNode(s.content, !0).firstElementChild
              , Gt = te(R);
            ye(ie, Gt, s),
            ie._x_refreshXForScope = ni => {
                Object.entries(ni).forEach( ([ri,ii]) => {
                    Gt[ri] = ii
                }
                )
            }
            ,
            O( () => {
                w.after(ie),
                X( () => I(ie))()
            }
            ),
            typeof G == "object" && C("x-for key cannot be an object, it must be a string or an integer", s),
            a[G] = ie
        }
        for (let p = 0; p < h.length; p++)
            a[h[p]]._x_refreshXForScope(l[d.indexOf(h[p])]);
        s._x_prevKeys = d
    }
    )
}
function Oa(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , n = /^\s*\(|\)\s*$/g
      , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , i = e.match(r);
    if (!i)
        return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim()
      , a = o.match(t);
    return a ? (s.item = o.replace(t, "").trim(),
    s.index = a[1].trim(),
    a[2] && (s.collection = a[2].trim())) : s.item = o,
    s
}
function Sn(e, t, n, r) {
    let i = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(o => o.trim()).forEach( (o, a) => {
        i[o] = t[a]
    }
    ) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(o => o.trim()).forEach(o => {
        i[o] = t[o]
    }
    ) : i[e.item] = t,
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
}
function va(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function ei() {}
ei.inline = (e, {expression: t}, {cleanup: n}) => {
    let r = ke(e);
    r._x_refs || (r._x_refs = {}),
    r._x_refs[t] = e,
    n( () => delete r._x_refs[t])
}
;
A("ref", ei);
A("if", (e, {expression: t}, {effect: n, cleanup: r}) => {
    e.tagName.toLowerCase() !== "template" && C("x-if can only be used on a <template> tag", e);
    let i = v(e, t)
      , s = () => {
        if (e._x_currentIfEl)
            return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return ye(a, {}, e),
        O( () => {
            e.after(a),
            X( () => I(a))()
        }
        ),
        e._x_currentIfEl = a,
        e._x_undoIf = () => {
            k(a, c => {
                c._x_effects && c._x_effects.forEach(Kn)
            }
            ),
            a.remove(),
            delete e._x_currentIfEl
        }
        ,
        a
    }
      , o = () => {
        e._x_undoIf && (e._x_undoIf(),
        delete e._x_undoIf)
    }
    ;
    n( () => i(a => {
        a ? s() : o()
    }
    )),
    r( () => e._x_undoIf && e._x_undoIf())
}
);
A("id", (e, {expression: t}, {evaluate: n}) => {
    n(t).forEach(i => da(e, i))
}
);
Ue( (e, t) => {
    e._x_ids && (t._x_ids = e._x_ids)
}
);
kt(yr("@", gr(re("on:"))));
A("on", X( (e, {value: t, modifiers: n, expression: r}, {cleanup: i}) => {
    let s = r ? v(e, r) : () => {}
    ;
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []),
    e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let o = Et(e, t, n, a => {
        s( () => {}
        , {
            scope: {
                $event: a
            },
            params: [a]
        })
    }
    );
    i( () => o())
}
));
Ke("Collapse", "collapse", "collapse");
Ke("Intersect", "intersect", "intersect");
Ke("Focus", "trap", "focus");
Ke("Mask", "mask", "mask");
function Ke(e, t, n) {
    A(t, r => C(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
be.setEvaluator(pr);
be.setReactivityEngine({
    reactive: Xt,
    effect: Io,
    release: Bo,
    raw: E
});
var Ra = be
  , ti = Ra;
window.Alpine = ti;
ti.start();
