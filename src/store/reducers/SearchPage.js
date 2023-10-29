import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/BeritakuNews/PageWrapper";
import Title from "../../components/BeritakuNews/Tittle";
import Loading from "../../components/BeritakuNews/Loading";
import Description from "../../components/BeritakuNews/Description";
import NewsWrapper from "../../components/BeritakuNews/NewsWrapper";
import NewsList from "../../components/BeritakuNews/NewsItem";
const apiKey = "5d36da2933504ce6b6b2d37afa6fdfd7";

function SearchPage() {
  let { keyword } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(apiKey);
      const data = await res.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [keyword]);

  return (
    <>
     <PageWrapper>
       <Title>Pencarian untuk : {keyword}</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {news.length === 0 ? (
            <Description> Maaf , BeritaMu Tidak ada </Description>
          ) : (
            <NewsWrapper>
              <NewsList news={news} />
            </NewsWrapper>
          )}
        </>
      )}
      </PageWrapper>
    </>
  );
}

export default SearchPage;