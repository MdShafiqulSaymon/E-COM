import { templates, products } from './data.js';

document.addEventListener("DOMContentLoaded", function () {

  const allProductGrid=document.getElementById("all-product-grid");
  allProductGrid.innerHTML = products.map(product => `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden relative product-card">
      <div class="relative">
        <img src="${product.image}" alt="${product.alt}" class="w-full h-[28rem] object-cover" />
        <div class="hover-icons flex justify-center space-x-4 mt-4 absolute bottom-4 left-1/4 transform -translate-x-1/2">
          <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"><i class="fa fa-heart-o" style="font-size: 24px"></i></button>
          <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"><svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></button>
          <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"><i class="fa fa-shopping-cart" style="font-size: 24px"></i></button>
          <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"><i class="fa fa-eye" style="font-size: 24px"></i></button>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-gray-900">${product.alt}</h3>
        <p class="text-gray-700">${product.price}</p>
        <div class="flex space-x-2 mt-2">
          ${product.colors.map(color => `<span class="block w-4 h-4 ${color.bg} ${color.border ? color.border : ''} rounded-full"></span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
});
