import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from './Layout';
import prods from "../db/prods.json"
import "../custom.css"

export default function Home() {

  return (
    <Layout>
      <div className="container-fluid featured-products">
        <div className="col-md-12" style={{ marginTop: '20px', marginBottom: '30px' }}>
          <h2 style={{ textAlign: 'left' }}>
            Welcome to Phone Shop!
          </h2>
        </div>
        <div className="row" style={{ marginLeft: '15px' }}>
          {prods.map((item) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={"phone:" + item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.price} VND
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
