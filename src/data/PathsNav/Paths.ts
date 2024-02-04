type PathType = {
    id: number;
    tag: string
    nav: string

}


const paths: PathType[] = [
    {
        id: 0,
        tag: "HOME",
        nav: "/"
    },
    {
        id: 1,
        tag: "PROFILE",
        nav: "/"
    },
    {
        id: 2,
        tag: "MAJOR",
        nav: "/"
    },
    {
        id: 3,
        tag: "DOCUMENTATION",
        nav: "/"
    },
    {
        id: 4,
        tag: "REGISTRATION",
        nav: "/"
    },
    {
        id: 5,
        tag: "NEWS",
        nav: "/"
    },
    {
        id: 6,
        tag: "EVENTS",
        nav: "/"
    },
    {
        id: 7,
        tag: "ALUMNI",
        nav: "/"
    },
        {
        id: 8,
        tag: "CONTACT",
        nav: "/"
    },
]

function getPaths(){
    return paths
}

export default getPaths;