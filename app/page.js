import Header from "./components/Header";
import Aside from "./components/Aside";
import PostCard from "./components/PostCard";
import CreatePost from "./components/CreatePost";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-5 flex gap-5 items-start w-full">
        <Aside />
        <section className="flex flex-col gap-5 grow">
          <CreatePost />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </main>
    </>
  );
}
