function addAndRemoveClassToContactUs()
{
    
    const getContactId = document.getElementById('contactUs');
    const removeActiveClass = document.getElementById('whatWeDo');

    function addActiveClass(){

        getContactId.addEventListener("click", addClass);

        function addClass(){

            getContactId.classList.add('active');
            removeActiveClass.classList.remove('active');
        }

        addClass()

    }

addActiveClass()

}

addAndRemoveClassToContactUs()