var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


                            // JavaScript code for section transitions
                            window.addEventListener('DOMContentLoaded', function () {
                                // Fade out splash screen after 2 seconds
                                setTimeout(function () {
                                    document.getElementById('splash-screen').style.display = 'none';
                                }, 2000);

                                // Add event listeners for section transitions
                                const sections = document.querySelectorAll('.section');
                                sections.forEach(function (section) {
                                    section.addEventListener('transitionend', function () {
                                        section.classList.remove('visible');
                                    });
                                });

                                // Helper function to show a section with animation
                                function showSection(section) {
                                    section.classList.add('visible');
                                }

                                // Scroll event listener to trigger section animations
                                window.addEventListener('scroll', function () {
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

//ModalToogles
                            // document.getElementById('works').onclick = function(){
                            //     document.getElementById('worksModal').modal();
                            // }

                            $(document).ready(function(){
                                $("#works").click(function(){
                                  $("#worksModal").modal('toggle');
                                });
                              });
