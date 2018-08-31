$(function () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const userInput = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    console.log(userInput);
    $('.js-shopping-list').append(
      `<li class="js-list-item" id="js-list-item">${userInput}<span>
      <button id="js-delete">Delete</button></span>
      <button id="js-check">Check</button></span>
      </li>`
    )
    $('#js-check').on('click', function () {
      $('.js-list-item').toggleClass('js-item');
    });
    $('#js-delete').on('click', function () {
      $('.js-list-item').remove();
    })
  })
})
