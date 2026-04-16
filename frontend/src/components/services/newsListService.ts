import type { NewsSummary } from "../../types/newsSummary";

const NewsListService = async () => {
  const response = await fetch(
    `https://localhost:7257/api/GetNewsSummaryList/10`,
  );

  const newsList: NewsSummary[] = await response.json();

  return newsList;
};

export default NewsListService;
