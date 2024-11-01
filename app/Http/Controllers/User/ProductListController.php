<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductListController extends Controller
{
    public function index()
    {
        $products = cache()->remember('products', 600, function () {
            return ProductResource::collection(Product::with('category', 'brand', 'product_images')->filtered()->paginate(9)->withQueryString());
        });

        $categories = cache()->remember('categories', 600, function () {
            return Category::get();
        });

        $brands = cache()->remember('brands', 600, function () {
            return Brand::get();
        });

        return Inertia::render(
            'User/ProductList',
            [
                'categories' => $categories,
                'brands' => $brands,
                'products' => $products
                // 'products' => ProductResource::collection($filterProducts)
            ]
        );
    }


    public function detail($slug)
    {
        $product = cache()->remember('product_' . $slug, 600, function () use($slug) {
            return Product::with('category', 'brand', 'product_images')->where('slug', $slug)->first();
        });

        return Inertia::render(
            'User/ProductDetail',
            [
                'product' => $product
            ]
        );
    }
}
