import Header from "./components/Header";
import AsideNav from "./components/AsideNav";
import PostCard from "./components/PostCard";
import CreatePost from "./components/CreatePost";
import AsideContacts from "./components/AsideContacts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex gap-5 items-start justify-between w-full">
        <AsideNav />
        <section className="py-6 max-w-[500px] flex flex-col gap-5 grow">
          <CreatePost />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
        <AsideContacts />
      </main>
    </>
  );
}
