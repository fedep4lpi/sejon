function sejon(body, opts) {
    let parsedOpts = {};
    parsedOpts.status = opts.httpStatus;
    parsedOpts.headers = { 'content-type': 'application/json' };
    if (opts.cookie != undefined) {
        const { cookie } = opts;
        if (cookie.sameSite === undefined)
            cookie.sameSite = true;
        if (cookie.secure === undefined)
            cookie.secure = true;
        if (cookie.httpOnly === undefined)
            cookie.httpOnly = true;
        parsedOpts.headers['Set-Cookie'] = ''
            + `${cookie.name}=${cookie.value};`
            + `${cookie.domain ? 'Domain=' + cookie.domain : ''}`
            + `${cookie.maxAge ? 'Max-Age=' + cookie.maxAge : ''}`
            + `${cookie.path ? 'Path=' + cookie.path : ''}`
            + `SameSite=${cookie.sameSite ? 'Strict' : 'Lax'};`
            + `${cookie.secure ? 'Secure;' : ''}`
            + `${cookie.httpOnly ? 'HttpOnly;' : ''} `;
    }
    return new Response(JSON.stringify(body), parsedOpts);
}
export default sejon;
