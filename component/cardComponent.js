export const cardComponent = (product)=>{
    return (
        `
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[250px]">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-[200px]">
                  <img src="${product?.mainImage || "data:image/jpeg;base64,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"}"/>
    
                  </div>
                <div class="p-6 text-center">
                  <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    ${product?.name || "Untitle product"}
                  </h4>
                  <p
                    class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                   $${product?.price.minPrice || "unknown" }
                  </p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                  <a href="#facebook"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#twitter"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                      class="fab fa-twitter" aria-hidden="true">
                    </i>
                  </a>
                  <a href="#instagram"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                      class="fab fa-instagram" aria-hidden="true">
                    </i>
                  </a>
                </div>
              </div>
        `
    )
}