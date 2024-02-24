"use server";

import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formdata) => {
  const { title, desc, id, userId } = Object.fromEntries(formdata);

  try {
    connectDb();
    const newPost = new Post({
      title,
      desc,
      id,
      userId,
    });

    await newPost.save();
    console.log("Save to database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const addUser = async (previousState, formdata) => {
  const { username, email, password, img } = Object.fromEntries(formdata);

  try {
    connectDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("Save to database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deleteUser = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formdata) => {
  const { username, email, password, img, confirm_password } =
    Object.fromEntries(formdata);

  if (password !== confirm_password) {
    return { error: "Password does not match" };
  }

  try {
    connectDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("Saved to database");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState, formdata) => {
  const { username, password } = Object.fromEntries(formdata);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
