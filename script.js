let rating = 1;

document.addEventListener('click', e => {
    const isRatingButton = e.target.matches("[data-rating]");
    const isSubmitButton = e.target.matches("[data-submit]");

    if(!isRatingButton && !isSubmitButton) return;
    let currentRating;

    if(isRatingButton) {
        currentRating = e.target;
        e.target.classList.toggle('active');
        rating = currentRating.textContent;
    }
    
    if(isSubmitButton) {
        thankYou = document.getElementById("thank-you-container");
        ratings = document.getElementById("rating-container")
        ratings.style.display = "none";
        thankYou.style.display = "flex";

        let caption = document.querySelector("#rating-caption");
        caption.textContent = "You selected " + rating + " out of 5.";
    }

    document.querySelectorAll("[data-rating].active").forEach(rating => {

        if(rating === currentRating) return;
        rating.classList.remove('active');
    })
})