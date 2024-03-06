interface ProfileInfo {
    img: string;
    text: string;
}

export interface TagInfo {
    id: number;
    tag: string;
    title: string;
    text: string;
}

interface AboutInfo {
    tags: TagInfo[];
}

interface InfoProfile {
    profile: ProfileInfo;
    about: AboutInfo;
}


const infoProfile: InfoProfile = {
    profile: {
        img: "/drawable/fondo.jpg",
        text: "Lorem ipsum dolor sit amet consectetur. Morbi scelerisque egestas in id nunc turpis placerat libero sed. Pulvinar bibendum imperdiet platea enim sit sagittis. Tortor donec volutpat ornare erat vulputate morbi arcu. Tellus sit et mattis nisl duis nunc nulla in. Amet quis ac in in. Eget nisi amet fames nulla id malesuada augue ultrices cras. Augue donec euismod a in netus porta. Cras commodo justo varius a diam neque."
    },
    about: {
        tags: [
            {
                id: 0,
                tag: "Visión",
                title: "Shool Visión",
                text: "Lorem ipsum dolor sit amet consectetur. Morbi scelerisque egestas in id nunc turpis placerat libero sed. Pulvinar bibendum imperdiet platea enim sit sagittis. Tortor donec volutpat ornare erat vulputate morbi arcu. Tellus sit et mattis nisl duis nunc nulla in. Amet quis ac in in. Eget nisi amet fames nulla id malesuada augue ultrices cras. Augue donec euismod a in netus porta. Cras commodo justo varius a diam neque."
            },
            {
                id: 1,
                tag: "Misión",
                title: "Shool Misión",
                text: "lajlsdfja lkdfjaol jfaio jfajefansdfk aolsdfjlakfa lfna l ahjkdf ajklhdfkjah dfjkl sdf"
            },
            {
                id: 2,
                tag: "Structura",
                title: "Shool Estructura",
                text: "lajlsdfja fansdfk aolsdfjlakfa lfna l ahjkdf ajklhdfkjah dfjkl sdf"
            },
            {
                id: 3,
                tag: "Facilidad",
                title: "Shool Falidad",
                text: "lajlsdfja lkdfjaol jfaio jfasdfa asdfajefansdfk aolsdfjlakfa lfna l ahjkdf ajklhdfkjah dfjkl sdf"
            }
        ]
    }
}

function getInfoProfile(){
    return infoProfile
}

function getProfile(){
    return infoProfile.profile
}

function getInfoAbout(){
    return infoProfile.about
}

export {getInfoProfile, getProfile, getInfoAbout};