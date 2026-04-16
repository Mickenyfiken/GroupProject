import type { NewsSummary } from "../../types/newsSummary";

const NewsCard = ({
  title,
  body,
  date_published,
  url,
  publisher,
}: NewsSummary) => {
  return (
    <div className="flex flex-col h-60 p-4 m-4 rounded-lg shadow-md bg-white">
      <div>
        <p className=" text-black/50 text-base font-family-FSE-Text">
          {new Date(date_published).toLocaleDateString("sv-SE", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {" | "}
          {publisher}
        </p>
      </div>
      <h2 className="font-bold text-article-title text-base mt-2">{title}</h2>
      <div className="flex flex-1 flex-row gap-2 mt-2 overflow-hidden text-sm text-gray-700">
        <p>{body}</p>
        <img className="w-34 h-30 rounded-md shrink-0" src={url} />
      </div>
    </div>
  );
};
export default NewsCard;
