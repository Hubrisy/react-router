import React from 'react';

const Post = ({author,image}) =>{
    return(
<div className = "container-post">
    <img src = {author.photo} className = "avtor-img" alt = "" />
    <div className = "text">{author.name} <img src = "https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png" className = "lil" alt = ""/>  {author.nickname} {author.date}<br/>
    <span>{author.content}</span>
    </div>
    <img src = {author.image} className = "post-img" alt = "" />
</div>
    )
}

export default Post;
