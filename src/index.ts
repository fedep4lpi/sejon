type Opts = {
    httpStatus: number,
    cookie?: {
        name: string,
        value: string | number,
        domain?: string,
        sameSite?: boolean,
        maxAge?: number,
        path?: string,
        secure?: boolean,
        httpOnly?: boolean,
    }
}

function sejon(body: object, opts: Opts): Response
{

    let parsedOpts: ResponseInit = {}

    parsedOpts.status = opts.httpStatus
    parsedOpts.headers = {'content-type': 'application/json'}

    if(opts.cookie!=undefined) {

        if(opts.cookie.sameSite===undefined) opts.cookie.sameSite=true
        if(opts.cookie.secure===undefined) opts.cookie.secure=true
        if(opts.cookie.httpOnly===undefined) opts.cookie.httpOnly=true

        parsedOpts.headers['Set-Cookie'] = ''
        +`${opts.cookie.name}=<${opts.cookie.value}>;`
        +`Domain=<${opts.cookie.domain}>;`
        +`Max-Age=<${opts.cookie.maxAge}>;`
        +`Path=<${opts.cookie.path}>;`
        +`SameSite=<${opts.cookie.sameSite?'Strict':'Lax'}>;`
        +`${opts.cookie.secure?'Secure;':''}`
        +`${opts.cookie.httpOnly?'HttpOnly;':''} `
    }

    return new Response(JSON.stringify(body), parsedOpts)
}

module.exports = sejon