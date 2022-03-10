import { FC } from "react";
import { DateTime } from "luxon";

interface IPostCard {
  post: any;
}

const PostCard: FC<IPostCard> = ({ post }) => {
  return (
    <div
      className={`card card-compact card-bordered border-base-300 bg-base-100 transition-shadow shadow hover:shadow-lg ${
        post.image ? "image-full" : null
      }`}
    >
      {post.image ? (
        <figure>
          <img src={post.image} alt={post.title} />
        </figure>
      ) : null}
      <a href={post.url} className="card-body">
        <h3 className="card-title font-bold">{post.title}</h3>
        <div className="font-bold text-xs uppercase">
          <time dateTime={post.date}>
            {DateTime.fromISO(post.date)
              .setLocale("id")
              .toLocaleString(DateTime.DATE_FULL)}
          </time>
        </div>
      </a>
    </div>
  );
};

export default PostCard;
