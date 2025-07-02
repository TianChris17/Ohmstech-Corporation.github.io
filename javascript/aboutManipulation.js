function addAndRemoveClassToAbout()
{
    
    const getAboutUsId = document.getElementById('aboutUs');
    const removeActiveClass = document.getElementById('home');

    function addActiveClass(){

        getAboutUsId.addEventListener("click", addClass);

        function addClass(){

            getAboutUsId.classList.add('active');
            removeActiveClass.classList.remove('active');
        }

        addClass()

    }

addActiveClass()

}

addAndRemoveClassToAbout()