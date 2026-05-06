< !DOCTYPE html >
    <html>
        <head>
            <title>Elegant Works</title>
            <style>
    /* CSS styling for splash screen */
                #splash-screen {
                    position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ffffff;
                animation: fade-in-out 2s forwards;
    }

                /* CSS animation for fade in/out */
                @keyframes fade-in-out {
                    0% { opacity: 0; }
      50% {opacity: 1; }
                100% {opacity: 0; }
    }

                /* CSS animation for section transitions */
                .section {
                    opacity: 0;
                transition: opacity 0.5s;
    }

                .section.visible {
                    opacity: 1;
    }
            </style>
        </head>
        <body>
            <!-- Splash screen -->
            <div id="splash-screen">
                <h1>Elegant Works</h1>
            </div>

            <!-- Rest of your HTML content -->

            <script>
    // JavaScript code for section transitions
                window.addEventListener('DOMContentLoaded', function() {
                    // Fade out splash screen after 2 seconds
                    setTimeout(function () {
                        document.getElementById('splash-screen').style.display = 'none';
                    }, 2000);

                // Add event listeners for section transitions
                const sections = document.querySelectorAll('.section');
                sections.forEach(function(section) {
                    section.addEventListener('transitionend', function () {
                        section.classList.remove('visible');
                    });
      });

                // Helper function to show a section with animation
                function showSection(section) {
                    section.classList.add('visible');
      }

                // Scroll event listener to trigger section animations
                window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Introduction section
                const introSection = document.getElementById('introduction');
        if (scrollTop >= introSection.offsetTop - window.innerHeight + 100) {
                    showSection(introSection);
        }

                // Work Samples section
                const workSamplesSection = document.getElementById('work-samples');
        if (scrollTop >= workSamplesSection.offsetTop - window.innerHeight + 100) {
                    showSection(workSamplesSection);
        }

                // CV section
                const cvSection = document.getElementById('curriculum-vitae');
        if (scrollTop >= cvSection.offsetTop - window.innerHeight + 100) {
                    showSection(cvSection);
        }

                // Testimonials section
                const testimonialsSection = document.getElementById('testimonials');
        if (scrollTop >= testimonialsSection.offsetTop - window.innerHeight + 100) {
                    showSection(testimonialsSection);
        }
      });
    });
            </script>
        </body>
    </html>
