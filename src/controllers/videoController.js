const fakeUser = {
    username : "kee",
    isLogged : true
}
const videos = [
    {
        title:"test1",
        rating : 5,
        comments : 2,
        createdAt : "2 month ago",
        views : 763,
        id : 1
    },
    {
        title:"test1",
        rating : 2,
        comments : 23,
        createdAt : "3 month ago",
        views : 763,
        id : 2
    },
    {
        title:"test3",
        rating : 3,
        comments : 22,
        createdAt : "4 month ago",
        views : 763,
        id : 3
    },
    {
        title:"test4",
        rating : 1,
        comments : 21,
        createdAt : "5 month ago",
        views : 763,
        id : 4
    }
]

export const trending = (req, res) => res.render("home",{pageTitle : "HOME", fakeUser, videos});
export const see = (req, res) => res.render("watch", {pageTitle : "WATCH"});
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");