let submitButton = document.querySelector(".submit-button");
document.addEventListener('click', e => {
    const isRatingButton = e.target.matches("[data-rating]")

    if(!isRatingButton) return;
    let currentRating;
    currentRating = e.target;
    e.target.classList.toggle('active');


    document.querySelectorAll("[data-rating].active").forEach(rating => {

        if(rating === currentRating) return;
        rating.classList.remove('active');
    })
})
submitButton.addEventListener('click', e => {

})