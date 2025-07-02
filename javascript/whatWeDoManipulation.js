function addAndRemoveClassToWhatWeDo()
{
    
    const getWhatWeDoId = document.getElementById('whatWeDo');
    const removeActiveClass = document.getElementById('aboutUs');

    function addActiveClass(){

        getWhatWeDoId.addEventListener("click", addClass);

        function addClass(){

            getWhatWeDoId.classList.add('active');
            removeActiveClass.classList.remove('active');
        }

        addClass()

    }

addActiveClass()

}

addAndRemoveClassToWhatWeDo()