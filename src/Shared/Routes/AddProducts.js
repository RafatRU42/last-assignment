import React from 'react';

const AddProducts = () => {
    return (
        <div className='flex items-center justify-center mr-20 pr-20 h-screen'>
            <div className="flex flex-col max-w-md p-6 rounded-md shadow sm:p-10 light:bg-gray-900 light:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Add A Product</h1>
                    <p className="text-sm dark:text-gray-400">You Can Add A Product Whatever You Want!</p>
                </div>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="name" id="email" placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 light:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="name" id="email" placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 light:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="name" id="email" placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 light:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="name" id="email" placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 light:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="name" id="email" placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 light:bg-gray-900 dark:text-gray-100" />
                        </div>
                      
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Add Product</button>
                        </div>
                      
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;