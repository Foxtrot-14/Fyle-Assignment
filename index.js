$(document).ready(function () {
  $("#but").click(function () {
    $(".container").css("opacity", "0.4");
    $(".popup").css("display", "block");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".popup, #but").length) {
      $(".popup").css("display", "none");
      $(".container").css("opacity", "1");
    }
  });
  $(".image-container").hover(
    function () {
      $(this).find(".overlay").css({
        visibility: "visible",
        opacity: "1",
      });
    },
    function () {
      $(this).find(".overlay").css({
        visibility: "hidden",
        opacity: "0",
      });
    }
  );
  let currentIndex = 0;
  const images = $(".slider .image-container");
  const totalImages = images.length;
  const imagesPerPage = 4;

  function showImages(index) {
    if (index >= totalImages) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalImages - imagesPerPage;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 25 + "%"; // 25% for each image to show 4 at a time
    $(".slider").css("transform", "translateX(" + offset + ")");
  }
  $(".next").click(function () {
    showImages(currentIndex + imagesPerPage);
  });
  $(".prev").click(function () {
    showImages(currentIndex - imagesPerPage);
  });

  $("#one").click(function () {
    console.log("one clicked");
    var newImageSrc = $(this).data("new-image");
    $("#photo").attr("src", newImageSrc);
  });
  $("#two").click(function () {
    var newImageSrc = $(this).data("new-image");
    $("#photo").attr("src", newImageSrc);
  });
  $("#three").click(function () {
    var newImageSrc = $(this).data("new-image");
    $("#photo").attr("src", newImageSrc);
  });
  $(".pho").click(function () {
    window.open("https://www.fylehq.com", "_blank");
  });
});
