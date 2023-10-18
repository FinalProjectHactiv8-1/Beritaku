import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";
import "../styles/App.css";
import { fetchIndonesiaData } from "../store/reducers/indonesia";

function formatDate(publishedAt) {
  const date = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function Indonesia() {
  const dispatch = useDispatch();
  const indonesiaData = useSelector((state) => state.indonesia.data);

   useEffect(() => {
     dispatch(fetchIndonesiaData());
   }, [dispatch]);

  return (
      <div className="container" style={{ paddingTop: "80px" }}>
        <h2 className="text-center">
          <b>Indonesia News</b>
        </h2>
        <Row className="mt-4">
          {indonesiaData &&
            indonesiaData.articles.map((article, index) => (
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
                    to={`/detailsindo/${index}`}
                    style={{ textDecoration: "none" }}
                  >
                  </Link>
                  <Card.Body className="card-content">
                    <Link
                      to={`/detailsindo/${index}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title className="card-title text-center">
                        <b>{article.title}</b>
                      </Card.Title>
                    </Link>
                    {/* {article.author} */}
                    <div style={{ color: "#A0A1A1" }}>
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
                        to={`/detailsindo/${index}`}
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

export default Indonesia;
