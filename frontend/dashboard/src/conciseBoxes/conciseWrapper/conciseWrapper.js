import React, { Fragment as F } from 'react';
import OrdersLength from '../getOrdersLength/getOrdersLength';
import ProductSold from '../getProductSold/getProductSold';
import Revenue from '../getRevenue/getRevenue';
import OrderValue from '../getOrderValue/getOrderValue';

const ConciseWrapper = () => {
    return (
<F>
<OrdersLength></OrdersLength>
<Revenue></Revenue>
<ProductSold></ProductSold>
<OrderValue></OrderValue>
</F>
    )
}

export default ConciseWrapper;