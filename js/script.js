const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    const footer = document.querySelector('footer');
    

    header.classList.remove('active');
    footer.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
    },1100);
    setTimeout(() => {
        footer.classList.add('active');
    },2000);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
navLinks.forEach((link,idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            },1100);
        }
    });
});
logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        setTimeout(() => {
            sections[0].classList.add('active');
        },1100);
    }
})

const resumeBtns =  document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const postBox =  document.querySelectorAll('.posts-box');


postBox.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        posts.classList.remove('active');
        const postDetails = document.querySelectorAll('.post-detail');
        postDetails.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        postDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        postDetails[idx].classList.add('active');
    });
});