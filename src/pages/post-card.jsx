import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseapi } from "../constants/index.js";

const PostCard = () => {
    const params = useParams();
    const [post, setPost] = useState();
    console.log("from the post => ", params);

    console.log("the link => ", baseapi);

    // function to get the single blog post

    console.log("posts inside post data state => ", post);

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseapi}/post/${params.slug}`);
            const fullresponse = response.json();
            return fullresponse;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
            .then((miles) => {
                console.log("the post => ", miles);
                setPost(miles.post);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="p-3">
                <img src={post?.post_image} alt="img" />
                <h5 className="text-green-500">{post?.title}</h5>
                <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post?.post_content }}
                />
            </div>

            {/* a button that goes back to the blog page */}
            <button className="bg-black w-fit text-cyan-200 p-1 rounded">
                <Link to="/blog">Back</Link>
            </button>
        </div>
    );
};

export default PostCard;