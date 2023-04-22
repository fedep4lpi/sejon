function sejon(body, opts) {
    var parsedOpts = {};
    parsedOpts.status = opts.httpStatus;
    parsedOpts.headers = { 'content-type': 'application/json' };
    if (opts.cookie != undefined) {
        if (opts.cookie.sameSite === undefined)
            opts.cookie.sameSite = true;
        if (opts.cookie.secure === undefined)
            opts.cookie.secure = true;
        if (opts.cookie.httpOnly === undefined)
            opts.cookie.httpOnly = true;
        parsedOpts.headers['Set-Cookie'] = ''
            + "".concat(opts.cookie.name, "=<").concat(opts.cookie.value, ">;")
            + "Domain=<".concat(opts.cookie.domain, ">;")
            + "Max-Age=<".concat(opts.cookie.maxAge, ">;")
            + "Path=<".concat(opts.cookie.path, ">;")
            + "SameSite=<".concat(opts.cookie.sameSite ? 'Strict' : 'Lax', ">;")
            + "".concat(opts.cookie.secure ? 'Secure;' : '')
            + "".concat(opts.cookie.httpOnly ? 'HttpOnly;' : '', " ");
    }
    return new Response(JSON.stringify(body), parsedOpts);
}
module.exports = sejon;
