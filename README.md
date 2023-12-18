## Movie Entertainment App
This is a simple movie entertainment app that displays a list of movies and their trailers. The app is written in Next.js to serve the web pages. The app uses the [The Movie Database API](https://www.themoviedb.org/documentation/api) to get the movie data.

## Sceeenshots
![desktop](assets/screen-tablet.png)
![desktop](assets/screen-desktop.png)

## Purpose
The purpose of this project is to demonstrate the use of Next.js and have a functional web app. Secondly, I want to demonstrate my ability to learn new technologies and apply them to a project.

## Stack
- Next.js
- Flexbox
- Mobile first design
- Tailwind CSS
- Next-Auth

## Features
- [x] User can sign up and login by using their Google account.
- [x] User can view the list of movies.(Popular, Top Rated, Upcoming, Now Playing)
- [X] User can view the movie details.
- [X] User can write review for the movie.
- [X] User can leave a comment for the review.
- [X] User can like the comment.
- [X] User can reply to the comment.
- [X] User can edit their profile.

The reasons for choosing Next.js are:
- Next.js is a React-based web development framework that allow developers to easily build fully-fledged websites.
- It offers the ability to choose different page rendering methods for each page.
- Support TypeScript out of the box.
- Adopted by various companies such as Netflix, Twitch, and Uber.

## Lesson learned:
1. At first, I was using the Tailwind CSS, but I found it difficult to maintain and use them.Then, I decided to use traditional css instead. Use whatever suits you!
2. Use mobile-first design, it makes it easier to scale up to larger screens, design your css mobile first, then scale up to larger screens with media query.
3. Implement a horizontal tab navigation bar and horizontal scrollable content:
    - set the container `as overflow-x: auto; white-space: nowrap;` to make the content scrollable horizontally.
    - set the child element as display: inline-block; to make the child element display in a row.
    - Implement the scroll function using useRef to reference the tab menu element, then change the scrollLeft property to scroll the content.
    - [How to implement the scrollable horizontal menu](https://www.youtube.com/watch?v=as01ehtBN0Y&t=1227s&ab_channel=CodingSnow)
## Problems encountered:
1. Next.js custom font with Radix UI and Tailwind css is not working, even though I have followed the instruction on the Radix UI website. I suspect it's related to SSR.
```
.radix-themes {
	--default-font-family: var(--your-custom-font) !important;
}
```
My workaround is simple, just add !important at the end of the radix-theme css file.

2. Make the div element scrollable horizontally when mouse hover.

3. In Next.js, we should use as much as possible SSR as it is more SEO friendly. However, there are many cases we need to use client-side rendering, such as if we want to useContext to pass data to the child component, but sadly it's not supported in SSR.
This is because SSR have no React state, and context. I need to pull data from external API which required authentication in the header, so I need to use client side rendering. I'm still thinking a better way to refactor the code to use SSR.
 - There are 2 workarounds for this:
 - Use getInitialProps to fetch data from the API, then pass the data to the child component as props.
 - Render providers as deep as possible in the component tree, it easier for Next.js to optimize the static parts of your components.

4. Nested comment module, the data structure should use self-referential table.
````
model Comment {
   id        String   @id @default(cuid())
   message   String   @db.Text
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   reviewId  String
   review    Review   @relation(fields: [reviewId], references: [id], onDelete: Cascade)
   userId    String
   user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

   // New fields for nested comments
   parentId String?
   parent   Comment?      @relation("CommentReplies", fields: [parentId], references: [id], onDelete: Cascade)
   replies  Comment[]     @relation("CommentReplies")
   likes    CommentLike[]
}
````
The parentId here is the foreign key that references to the comment table. It will be null if it's a top-level comment. The replies field is the child comments of the comment. The parent field is the parent comment of the comment. The parent field is optional because the top-level comment has no parent.

### Implement the nested comment in frontend:
  - Because as we know, the comment can have multiple replies, and the replies can have multiple replies, so it's a recursive data structure. We can use recursion to render the nested comments. And clearly it is a tree data structure.
  - We can build a tree data structure to render the nested comments in the frontend.The key is the parentId, and if there is no parentId(that means it's a root), we put the key as 'root' simply. 
```
const commentsByParentId = useMemo<{ [key: string]: Comment[] }>(()=> {
        const group: { [key: string]: Comment[] } = {};
        comments.forEach(comment => {
            const parentId = comment.parentId || 'root'; // Use 'root' as a key for root comments
            group[parentId] = group[parentId] || [];
            group[parentId].push(comment);
        });
        return group;
    }, [comments]);
    //The group object will be like this:
    {
         "1": [
         {
             "id": "3",
             "message": "this is child comment",
             "createdAt": "2023-12-14T20:16:15.000Z",
             "updatedAt": "2023-12-14T20:16:16.000Z",
             "reviewId": "clq4p7ttr0019fmos284t1tuw",
             "userId": "clq0h73n000065082pemzw2ex",
             "parentId": "1"
         }
     ],
         "root": [
         {
             "id": "1",
             "message": "this is root comment",
             "createdAt": "2023-12-14T20:15:10.000Z",
             "updatedAt": "2023-12-14T20:15:06.000Z",
             "reviewId": "clq4p7ttr0019fmos284t1tuw",
             "userId": "clq0h73n000065082pemzw2ex",
             "parentId": null
         },
        {
             "id": "2",
             "message": "this is root comment",
             "createdAt": "2023-12-14T20:15:47.000Z",
             "updatedAt": "2023-12-14T20:15:49.000Z",
             "reviewId": "clq4p7ttr0019fmos284t1tuw",
             "userId": "clq0h73n000065082pemzw2ex",
             "parentId": null
         }
     ]
     }
```
TODO features:
- [ ] Add a search bar to search for movies.
- [ ] Add a filter to filter the movies by genre.
- [ ] Add a pagination to display the movies.
- [ ] Build a recommendation system to recommend movies to users based on their preferences.

## How to run the app
1. Clone the repo
2. Follow the .env.example to create your own .env file
3. Run `docker-compose up --build -d`