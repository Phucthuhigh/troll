$(() => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  $("button").mouseenter(function () {
    $(this).animate(
      {
        left: `${getRandomInt(500) + 10}`,
        top: `${getRandomInt(500) + 10}`,
      },
      "fast"
    );
    $(this).click(function () {
      $(this).remove();
      $("body").append("<h1>Chúc mừng bạn đã ấn được vào nút!!!</h1>");
    });
  });
});
