import React from 'react';

const ProductSold = () => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="card mini-stat bg-primary">
                <div className="card-body mini-stat-img">
                    <div className="mini-stat-icon">
                        <i className="mdi mdi-briefcase-check float-right"></i>
                    </div>
                    <div className="text-white">
                        <h6 className="text-uppercase mb-3">Product Sold</h6>
                        <h4 className="mb-4">1890</h4>
                        <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSold;