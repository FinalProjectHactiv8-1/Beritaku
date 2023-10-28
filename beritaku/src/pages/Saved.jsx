import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Saved() {
  const savedIndonesiaArticles = useSelector(
    (state) => state.saved.indonesiaSaved
  );
  const savedCovidArticles = useSelector((state) => state.saved.covidSaved);
  const savedProgramArticles = useSelector(
    (state) => state.saved.programmingSaved
  );

  const filteredIndonesiaSavedArticles = savedIndonesiaArticles.filter(
    (article) => article.saved
  );

  const filteredCovidSavedArticles = savedCovidArticles.filter(
    (article) => article.saved
  );
  const filteredProgramSavedArticles = savedProgramArticles.filter(
    (article) => article.saved
  );

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {filteredIndonesiaSavedArticles.length > 0 ||
      filteredCovidSavedArticles.length > 0 ||
      filteredProgramSavedArticles > 0 ? (
        <Table striped bordered hover variant="primary">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Source</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          {filteredIndonesiaSavedArticles.map((article, index) => (
            <tbody key={article.index}>
              <tr>
                <td className="text-center">{index + 1}</td>
                <td>
                  {article.author} - {article.source.name}
                  <p style={{ textDecoration: "none" }}>
                    <Link to={article.url} target="_blank">
                      News Page
                    </Link>
                  </p>
                </td>
                <td>{article.title}</td>
                <td>{article.description}</td>
              </tr>
            </tbody>
          ))}
          {filteredCovidSavedArticles.map((article, index) => (
            <tbody key={article.index}>
              <tr>
                <td className="text-center">
                  {index + filteredIndonesiaSavedArticles.length + 1}
                </td>
                <td>
                  {article.author} - {article.source.name}
                  <p style={{ textDecoration: "none" }}>
                    <Link to={article.url} target="_blank">
                      News Page
                    </Link>
                  </p>
                </td>
                <td>{article.title}</td>
                <td>{article.description}</td>
              </tr>
            </tbody>
          ))}
          {filteredProgramSavedArticles.map((article, index) => (
            <tbody key={article.index}>
              <tr>
                <td className="text-center">
                  {index + filteredCovidSavedArticles.length + 1}
                </td>
                <td>
                  {article.author} - {article.source.name}
                  <p style={{ textDecoration: "none" }}>
                    <Link to={article.url} target="_blank">
                      News Page
                    </Link>
                  </p>
                </td>
                <td>{article.title}</td>
                <td>{article.description}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      ) : (
        <h3 className="d-flex align-items-center justify-content-center">
          <b>No Saved News</b>
        </h3>
      )}
    </div>
  );
}

export default Saved;
