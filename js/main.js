const toggle = document.getElementById('toggle-btn');
const sidebar = document.querySelector('.sidebar');
const toggleIcon = document.getElementById('toggle-icon');

toggle.onclick = () => {
   if (toggle.classList.contains('active')) {
      toggle.classList.remove('active');
      sidebar.classList.remove('show');
      toggleIcon.classList.remove('fa-times');
      toggleIcon.classList.add('fa-bars');
      toggleIcon.style.color = '#4158D0';
   } else {
      toggle.classList.add('active');
      sidebar.classList.add('show');
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-times');
      toggleIcon.style.color = '#be3144';
   }
};