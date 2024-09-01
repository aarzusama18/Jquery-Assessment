$(document).ready(function () {
  $("#password").on("input", function () {
    var password = $(this).val();
    var strength = checkPasswordStrength(password);

    $("#password-strength")
      .removeClass("weak medium strong")
      .addClass(strength);
    $("#strength-message")
      .removeClass("weak-message medium-message strong-message")
      .text(getStrengthMessage(strength))
      .addClass(strength + "-message");
  });

  function checkPasswordStrength(password) {
    var strength = "weak";

    // Regular expressions for different password strength criteria
    var regexWeak = /[a-z]/;
    var regexMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    var regexStrong =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regexStrong.test(password)) {
      strength = "strong";
    } else if (regexMedium.test(password)) {
      strength = "medium";
    } else if (regexWeak.test(password)) {
      strength = "weak";
    }

    return strength;
  }

  function getStrengthMessage(strength) {
    switch (strength) {
      case "strong":
        return "This password is strong.";
      case "medium":
        return "This password is medium strength.";
      case "weak":
      default:
        return "This password is weak.";
    }
  }
});
