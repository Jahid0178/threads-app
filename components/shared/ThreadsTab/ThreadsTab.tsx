import ThreadCard from "@/components/cards/ThreadCard/ThreadCard";
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface ThreadsTabProps {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab = async ({
  currentUserId,
  accountId,
  accountType,
}: ThreadsTabProps) => {
  let result = await fetchUserPosts(accountId);

  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          } // todo
          community={thread.community} // todo
          createAt={thread.createdAt}
          comment={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;