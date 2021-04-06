export interface IResult {
    _id: string,
    headline: IHeadline,
    multimedia: IMultimedia[],
    snippet: string,
    keywords: IKeywords[],
    web_url: string
}

export interface IHeadline {
    main: string;
}

interface IMultimedia {
    url: string;
}

export interface IKeywords {
    value: string;
}