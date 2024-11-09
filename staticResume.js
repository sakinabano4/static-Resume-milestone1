var ObjectiveBtn = document.getElementById('ObjectiveBtn');
var EducationBtn = document.getElementById('EducationBtn');
var SkillsBtn = document.getElementById('SkillsBtn');
var WorkExpBtn = document.getElementById('WorkExpBtn');
var ObjectiveSec = document.getElementById('objectiveSec');
var EducationSec = document.getElementById('eduSec');
var SkillsSec = document.getElementById('skillSec');
var WorkExpSec = document.getElementById('workExpSec');
ObjectiveBtn === null || ObjectiveBtn === void 0 ? void 0 : ObjectiveBtn.addEventListener('click', function () {
    if (ObjectiveSec.style.display == 'block') {
        ObjectiveSec.style.display = 'none';
    }
    else {
        ObjectiveSec.style.display = 'block';
    }
});
EducationBtn === null || EducationBtn === void 0 ? void 0 : EducationBtn.addEventListener('click', function () {
    if (EducationSec.style.display == 'block') {
        EducationSec.style.display = 'none';
    }
    else {
        EducationSec.style.display = 'block';
    }
});
SkillsBtn === null || SkillsBtn === void 0 ? void 0 : SkillsBtn.addEventListener('click', function () {
    if (SkillsSec.style.display == 'block') {
        SkillsSec.style.display = 'none';
    }
    else {
        SkillsSec.style.display = 'block';
    }
});
WorkExpBtn === null || WorkExpBtn === void 0 ? void 0 : WorkExpBtn.addEventListener('click', function () {
    if (WorkExpSec.style.display == 'block') {
        WorkExpSec.style.display = 'none';
    }
    else {
        WorkExpSec.style.display = 'block';
    }
});
