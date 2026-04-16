import { useState, useEffect } from "react";
import type { NewsSummary } from "../../types/newsSummary";
import NewsCard from "../newsCard/newsCard";
import NewsListService from "../services/newsListService";

const RenderNewsList = () => {
  const [newsList, setNewsList] = useState<NewsSummary[]>([]);

  useEffect(() => {
    const fetchNewsList = async () => {
      const newsList = await NewsListService();
      setNewsList(newsList);
    };
    fetchNewsList();
  }, []);

  return (
    <div>
      {newsList.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default RenderNewsList;
