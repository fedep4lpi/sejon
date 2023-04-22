type Opts = {
    httpStatus: number;
    cookie?: {
        name: string;
        value: string | number;
        domain?: string;
        sameSite?: boolean;
        maxAge?: number;
        path?: string;
        secure?: boolean;
        httpOnly?: boolean;
    };
};
declare function sejon(body: object, opts: Opts): Response;
