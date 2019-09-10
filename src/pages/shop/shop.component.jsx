import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from "../collection/collection.component";
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionPage} />
    <Route path={`${match.path}/:collectionId`} />
  </div>
);

export default ShopPage;
