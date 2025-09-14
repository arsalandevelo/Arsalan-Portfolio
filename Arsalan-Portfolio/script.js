    // Scroll Reveal
    const reveals = document.querySelectorAll(".reveal, .card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add("show"); }
      });
    },{threshold:0.2});
    reveals.forEach(r=>observer.observe(r));

    // Navbar Active Link on Scroll
    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll("nav a");
    window.addEventListener("scroll",()=>{
      let current="";
      sections.forEach(section=>{
        const sectionTop=section.offsetTop-80;
        const sectionHeight=section.clientHeight;
        if(pageYOffset>=sectionTop && pageYOffset<sectionTop+sectionHeight){
          current=section.getAttribute("id");
        }
      });
      navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
          link.classList.add("active");
        }
      });
    });

    // Contact Form
    const form=document.getElementById("contactForm");
    form.addEventListener("submit",e=>{
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });


    // Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
