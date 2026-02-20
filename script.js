const circles = document.querySelectorAll('.circle');

// Hover pe animation pause / resume
circles.forEach(circle=>{
  circle.addEventListener('mouseenter',()=>{
    circle.style.animationPlayState = 'paused';
  });
  circle.addEventListener('mouseleave',()=>{
    circle.style.animationPlayState = 'running';
  });
});

// Section open function
function openSection(id){
  // Close all content first
  document.querySelectorAll('.content').forEach(sec => sec.style.display='none');

  // Show selected section
  const section = document.getElementById(id);
  if(section){
    section.style.display = 'block';
    section.scrollIntoView({behavior:'smooth'});
  }
}

// Close all sections
function closeAll(){
  document.querySelectorAll('.content').forEach(sec => sec.style.display='none');
}

// Scroll to top button
function scrollToTop(){
  window.scrollTo({top:0, behavior:'smooth'});
}

// Optional: Add circle click animation effect
circles.forEach(circle=>{
  circle.addEventListener('click',()=>{
    circle.style.transform = 'scale(1.2)';
    setTimeout(()=>{circle.style.transform='scale(1)';}, 300);
  });
});