import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Pagination from './components/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from './components/Filter';
import Slider from './components/Slider';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchitems = async () => {
      const res = await axios.get('product_list.json');
      const productsList = getAllProduct(res.data);
      //     console.log(productsList);
      setItems(productsList);
      setProductItems(productsList);
      setLoading(false);
    };
    fetchitems();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // change Page 
  const paginate = (pageNumber) => {
    // console.log(pageNumber);
    setCurrentPage(pageNumber);
  }

  // handle filters here
  const handleChange = (event) => {
    // alert(event.target.value);
    if (event.target.value === "Exipred") {
      const expireProductsList = getExpiryProduct(items);
      console.log(expireProductsList);
      setItems(expireProductsList);
    } else if (event.target.value === "All Product") {
      console.log("All Products: " + productItems);
      setItems(productItems);
    } else {
      const expireProductsList = getGoingToExpireProduct(productItems);
      console.log(expireProductsList);
      setItems(expireProductsList);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <Header name="Universal Project" cartName="Cart" />
      </div>
      <div className="row" id="slideImage" style={{ marginTop: '-70px', padding: '150px' }}>
        <Slider />
      </div>
      <div className="row" id="filterRow">
        <Filter handleChange={handleChange.bind(this)} />
      </div>
      <div className="row">
        <Items
          items={currentItems} loading={loading} /*handleOnClick={productItemClick.bind(this)} */ />
      </div>
      <div className="row" id="pagination-row">
        <Pagination itemsPerPage={itemsPerPage}
          totalItem={items.length}
          paginate={paginate.bind(this)}
        />
      </div>
      <Footer name="copyright @ HCL Technologies 2019" />

    </div>
  );
}

// get all products here
const getAllProduct = ((json, products = []) => {
  if (json.hasOwnProperty("children")) {
    json.children.forEach(element => {
      getAllProduct(element, products);
    });
  } else {
    // Push the data in products array
    products.push(json);
  }
  return products;
});

// get Expire product
const getExpiryProduct = ((productsList, arrayOfExpiredProducts = []) => {
  productsList.filter(function (element) {
    var warrantyP = element.warrantyPeriod.charAt(0);
    if (isNaN(warrantyP)) {
      warrantyP = 0;
    } else {
      warrantyP = parseInt(warrantyP);
    }
    var extendedW = element.extendedWarranty.charAt(0);
    if (isNaN(extendedW)) {
      extendedW = 0;
    } else {
      extendedW = parseInt(extendedW)
    }
    // warranty expiry time
    var orderedDate = new Date(element.orderedDate);
    var year = orderedDate.getFullYear();
    var month = orderedDate.getMonth();
    var day = orderedDate.getDate();
    var expiryDate = new Date(year + (warrantyP + extendedW), month, day)
    if (expiryDate < new Date()) {
      arrayOfExpiredProducts.push(element);
    }
  });
  return arrayOfExpiredProducts;
});


const getGoingToExpireProduct = (allProducts) => {
  var goingToExpiredPro = allProducts.filter(function (element) {
    var warrantyP = element.warrantyPeriod.charAt(0);
    if (isNaN(warrantyP)) {
      warrantyP = 0;
    } else {
      warrantyP = parseInt(warrantyP);
    }
    var extendedW = element.extendedWarranty.charAt(0);
    if (isNaN(extendedW)) {
      extendedW = 0;
    } else {
      extendedW = parseInt(extendedW);
    }
    var orderedDate = new Date(element.orderedDate);
    var year = orderedDate.getFullYear();
    var month = orderedDate.getMonth();
    var day = orderedDate.getDate();
    var expiryDate = new Date(year + (warrantyP + extendedW), month, day);
    var currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - expiryDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffDays);
    if (diffDays <= 100) {
      return element;
    }
  });
  console.log("ExpireingProducts", goingToExpiredPro);
  return goingToExpiredPro;
};

export default App;
