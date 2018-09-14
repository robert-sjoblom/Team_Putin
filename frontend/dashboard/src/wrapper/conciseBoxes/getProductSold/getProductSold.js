import React from 'react';

const ProductSold = () => {
    return (
<div class="col-xl-3 col-md-6">
                        <div class="card mini-stat bg-primary">
                            <div class="card-body mini-stat-img">
                                <div class="mini-stat-icon">
                                    <i class="mdi mdi-briefcase-check float-right"></i>
                                </div>
                                <div class="text-white">
                                    <h6 class="text-uppercase mb-3">Product Sold</h6>
                                    <h4 class="mb-4">1890</h4>
                                    <span class="badge badge-info"> +89% </span> <span class="ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ProductSold;