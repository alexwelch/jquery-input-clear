(function ($) {
  $.fn.clearInputs = function () {
    var $inputs = $(this);
    $inputs.addClass('invalid_field');

    $inputs.focus(function () {
      if (this.defaultValue === this.value) {
        $(this).removeClass('invalid_field');
        this.value = "";
      }
      $(this).blur(function () {
        if (this.value === "") {
          $(this).addClass('invalid_field');
          this.value = this.defaultValue;
        } else if (this.value !== this.defaultValue && this.value !== "") {
          $(this).removeClass('invalid_field');
        }
      });
    });
    return $inputs;
  };
}(jQuery));
