
function renderArray() {
  $('.js-shopping-list').append(
    `<li>${myArray}</li>`
  )
};
let myArray = [];

$('#js-add-item').on('click', function (e) {
  e.preventDefault();
  let item = $('.js-shopping-list-entry').val();
  myArray.push(item);
  console.log(myArray);
  renderArray();
})
