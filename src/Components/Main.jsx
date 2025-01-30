import ComicsCard from "./ComicsCard";
import { comics } from "./ComicsLinks";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <button className="btn-series">CURRIENT SERIES</button>
          <div className="row">
            {comics.map((link, id) => {
              return (
                <div className="col" key={id}>
                  <ComicsCard image={link.thumb} />
                  <h5>{link.series}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="div-container">
        <button className="btn-load">LOAD MORE</button>
      </div>
    </main>
  );
}
