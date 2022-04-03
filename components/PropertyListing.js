import React, { useState } from "react";
import Pagination from "./Pagination";

const PropertyListing = (props) => {
  const {properties} =props
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [listStyle, setListStyle] = useState("card");

  if(!properties.length){
    return null
  }

  return (
    <>
      <div
        className="content-area recent-property"
        style={{ paddingBottom: "60px", backgroundColor: "rgb(252, 252, 252)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12  padding-top-40 properties-page">
              <div className="col-md-12 ">
                <div className="col-xs-10 page-subheader sorting pl0">
                  {/* <ul className="sort-by-list">
                    <li className="active">
                      <a
                        className="order_by_date"
                        data-orderby="property_date"
                        data-order="ASC"
                      >
                        Property Date <i className="fa fa-sort-amount-asc"></i>
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="order_by_price"
                        data-orderby="property_price"
                        data-order="DESC"
                      >
                        Property Price{" "}
                        <i className="fa fa-sort-numeric-desc"></i>
                      </a>
                    </li>
                  </ul> */}

                  {/* <div className="items-per-page">
                    <label htmlFor="items_per_page">
                      <b>Property per page :</b>
                    </label>
                    <div className="sel">
                      <select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                        id="items_per_page"
                        name="per_page"
                      >
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                      </select>
                    </div>
                  </div> */}
                </div>

                <div className="col-xs-2 layout-switcher">
                  <a
                    className={
                      listStyle == "list" ? "layout-list active" : "layout-list"
                    }
                    onClick={() => setListStyle("list")}
                  >
                    {" "}
                    <i className="fa fa-th-list"></i>{" "}
                  </a>
                  <a
                    className={
                      listStyle == "card" ? "layout-grid active" : "layout-grid"
                    }
                    onClick={() => setListStyle("card")}
                  >
                    {" "}
                    <i className="fa fa-th"></i>{" "}
                  </a>
                </div>
              </div>
              <Pagination
                items={properties}
                itemsPerPage={itemsPerPage}
                listStyle={listStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
