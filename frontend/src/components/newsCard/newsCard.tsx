import type { NewsSummary } from "../../types/newsSummary";

const NewsCard = ({ title, body, date_published }: NewsSummary) => {
  return (
    <article>
      <div className="flex flex-col gap-2 p-10 border rounded-lg shadow-md li">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{new Date(date_published).toLocaleDateString("sv-SE")}</p>
        </div>
        <div>
          <img
            className="w-44 h-40 object-cover rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYyCDS7PhmFQWQwbD1B5lWjWLonuxWE5FFA&s"
            alt="News Image"
          />
        </div>
      </div>
    </article>
  );
};
export default NewsCard;