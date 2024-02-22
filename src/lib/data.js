import { connectDb } from "./connectDb";
import { Post, User } from "./models";

export const getPosts = async () => {
  connectDb();
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (id) => {
  connectDb();
  try {
    const post = await Post.findOne({ id });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
export const getUser = async (id) => {
  connectDb();
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};
export const getUsers = async () => {
  connectDb();
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
