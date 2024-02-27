function redirect(path) {
    window.location.href = path;
}

function rating(rating) {
    var stars = "";
    for (var i = 0; i < rating; i++) {
        stars += "★";
    }
    return stars;
}

function getRating() {
    const givenRating = parseInt(prompt("Wprowadź ocenę (1-5): ", "5"));

    if (givenRating < 1 || givenRating > 5) return alert("Nieprawidłowa ocena!");

    alert(`Twoja ocena to: ${rating(givenRating)}`);
}

console.log("Uzycie console.log");
console.error("Błąd!");
