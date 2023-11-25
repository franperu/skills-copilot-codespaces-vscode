function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    var skillsMemberValueLengthRemain = 100 - skillsMemberValueLength;
    skills.innerHTML = skillsMemberValueLengthRemain;
}