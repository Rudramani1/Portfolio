const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control'); // Updated to directly target buttons
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Remove active class from previous button
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Remove active class from previous section and show the corresponding one
            const sectionId = this.dataset.id; // Assuming each button has a `data-id` attribute corresponding to the section class
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            document.querySelector(`.${sectionId}`).classList.add('active');
        });
    });

    // Section Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove active class from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Show the targeted section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}


// Call the function
PageTransitions();


