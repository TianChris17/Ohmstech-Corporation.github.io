function addAndRemoveClassToProduct()
{
    
    const getProductId = document.getElementById('product');
    const removeActiveClass = document.getElementById('whatWeDo');

    function addActiveClass(){

        getProductId.addEventListener("click", addClass);

        function addClass(){

            getProductId.classList.add('active');
            removeActiveClass.classList.remove('active');
        }

        addClass()

    }

addActiveClass()

}

addAndRemoveClassToProduct()