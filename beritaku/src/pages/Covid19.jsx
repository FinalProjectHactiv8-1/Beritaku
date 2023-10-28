import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidData } from "../store/reducers/covid19";
import { Row, Col, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";
import "../styles/App.css";

const formatDate = (publishedAt) => {
  const date = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

function Covid19() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid.data);

  useEffect(() => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const formattedDate = oneMonthAgo.toISOString().split("T")[0];

    dispatch(fetchCovidData({ from: formattedDate }));
  }, [dispatch]);

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <h2 className="text-center">
        <b>Covid 19 News</b>
      </h2>
      <Row className="mt-4">
        {covidData &&
          covidData.articles.map((article, index) => (
            <Col sm={12} md={6} lg={3} key={index}>
              {/* {article.source.name} */}
              <Card
                className="card"
                style={{
                  marginBottom: "50px",
                  borderRadius: "10px",
                  backgroundColor: "#B4CFE6",
                  height: "90%",
                }}
              >
                <Link
                  to={`/detailscovid/${index}`}
                  style={{ textDecoration: "none" }}
                >
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </Link>
                <Card.Body className="card-content">
                  <Link
                    to={`/detailscovid/${index}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Title className="card-title text-center">
                      <b>{article.title}</b>
                    </Card.Title>
                  </Link>
                  {/* {article.author} */}
                  {article.description}
                  <div style={{ color: "#5A5A5A" }}>
                    {formatDate(article.publishedAt)}
                  </div>
                </Card.Body>
                <Row className="container">
                  <Col md={10} className="d-flex justify-content-end">
                    {/* <button
                      style={{
                        backgroundColor: "#1b3260",
                        color: "#FFFFFF",
                        border: "none",
                        width: "50%",
                        borderRadius: "7px",
                      }}
                    >
                      See Details
                    </button> */}
                    <Link
                      to={`/detailscovid/${index}`}
                      style={{ textDecoration: "none" }}
                    >
                      <FaInfoCircle
                        size={25}
                        style={{ color: "#1b3260", marginBottom: "10px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={2}>
                    <FaBookmark
                      size={25}
                      style={{ color: "#1b3260", marginBottom: "10px" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Covid19;
