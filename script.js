
// create a function to make the navigation bar responsive
function myMenuFunction(){
    console.log("Menu button clicked");
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu"){
        i.className += " responsive"; //must have space before responsive
    }
    else{
        i.className = "nav-menu";
    }
}


var hiddenContent = document.querySelector('.hidden');
var titleContent = document.querySelector('.content');
var downArrowCircle = document.querySelector('.arrow');
var upArrowCircle = document.querySelector('.arrow2');
var downArrow = document.getElementById("downArrow");
var upArrow = document.getElementById("upArrow")

function moveDown(){
    hiddenContent.scrollIntoView({behavior: 'smooth'});
    hiddenContent.style.display = 'flex';
    upArrowCircle.style.display = 'flex';
    upArrow.style.display = 'flex';
    titleContent.style.display = 'none';
    downArrowCircle.style.display = 'none';
    downArrow.style.display = 'none';
}
// add click event to down arrow
downArrow.addEventListener("click", moveDown);

function moveUp(){
    titleContent.scrollIntoView({behavior: 'smooth'});
    titleContent.style.display = 'flex';
    downArrowCircle.style.display = 'flex';
    downArrow.style.display = 'flex';
    hiddenContent.style.display = 'none';
    upArrowCircle.style.display = 'none';
    upArrow.style.display = 'none';
}
upArrow.addEventListener("click", moveUp);




// progress bar functionality 
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressBarLine = document.querySelector('.progress-line'); // Reference to the line element

    function updateProgress() {
        const activeSteps = Array.from(steps).filter(step => step.classList.contains('active'));
        const firstActiveIndex = activeSteps.length > 0 ? Array.from(steps).indexOf(activeSteps[0]) : null;
        const lastActiveIndex = activeSteps.length > 0 ? Array.from(steps).indexOf(activeSteps[activeSteps.length - 1]) : null;

        if (activeSteps.length > 1) {
            const firstStepCenter = steps[firstActiveIndex].offsetLeft + steps[firstActiveIndex].offsetWidth / 2;
            const lastStepCenter = steps[lastActiveIndex].offsetLeft + steps[lastActiveIndex].offsetWidth / 2;
            const lineWidth = lastStepCenter - firstStepCenter;
            progressBarLine.style.width = `${lineWidth}px`;
            progressBarLine.style.left = `${firstStepCenter}px`;
            progressBarLine.style.marginLeft = '0'; // Reset margin-left
            progressBarLine.style.backgroundColor = '#747474';
        } else {
            progressBarLine.style.width = '0';
        }

        steps.forEach((step, index) => {
            if (index === lastActiveIndex + 1 || (index === lastActiveIndex - 1 && index !== 0)) {
                step.style.pointerEvents = 'auto';
                step.style.opacity = '1';
            } else {
                step.style.pointerEvents = 'none';
                step.style.opacity = '1';
            }
        });

        steps[0].style.pointerEvents = 'auto'; // First step can always be clicked
        steps[0].style.opacity = '1';
    }

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            const activeSteps = Array.from(steps).filter(s => s.classList.contains('active'));
            if (index > 0 && !step.classList.contains('active') && index === activeSteps.length) {
                step.classList.add('active');
            } else if (index === 0 && activeSteps.length === 2 && activeSteps.includes(steps[1])) {
                steps[1].classList.remove('active'); // Specific case to deactivate the second point when the first is clicked
            } else if (step.classList.contains('active') && index === activeSteps.length - 2) {
                steps[index + 1].classList.remove('active');
            }
            updateProgress();
        });
    });

    function handleResize() {
        updateProgress();
    }

    window.addEventListener('resize', handleResize);

    // Initialize
    steps[0].classList.add('active'); // Set the first point active by default
    updateProgress();
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to show the content section corresponding to the clicked step
    function showContent(sectionClass) {
        // Hide all content sections
        document.querySelectorAll('.hidden > div').forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the content section corresponding to the clicked step
        document.querySelector('.hidden .' + sectionClass).style.display = 'block';
    }

    // Add click event listeners to each step to show the corresponding content section
    document.querySelectorAll('.step').forEach(function(step, index) {
        step.addEventListener('click', function() {
            // Determine which content section to show based on the clicked step
            switch (index) {
                case 0:
                    showContent('personal-info');
                    document.querySelector('.progress-bar').style.display = 'block'
                    document.querySelector('.personal-info').style.display = 'flex'
                    break;
                case 1:
                    showContent('skills');
                    document.querySelector('.progress-bar').style.display = 'block'
                    document.querySelector('.skills').style.display = 'flex'
                    break;
                case 2:
                    showContent('summary');
                    document.querySelector('.progress-bar').style.display = 'block'
                    document.querySelector('.summary').style.display = 'flex'
                    break;
                case 3:
                    showContent('hobbies');
                    document.querySelector('.progress-bar').style.display = 'block'
                    document.querySelector('.hobbies').style.display = 'flex'
                    break;
                default:
                    // Do nothing
                    break;
            }
        });
    });
});
