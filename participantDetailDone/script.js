// Function to add a new participant

window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});



function addParticipant() {
  const participantCount = document.querySelectorAll('.participant ').length;
  
  // Check if the participant count is less than 10 before adding a new participant
  if (participantCount < 9) {
    const participantDiv = document.createElement('div');
    participantDiv.className = 'participant';
    participantDiv.innerHTML = `
      <h3>Participant ${participantCount + 2} details</h3>
      <div class="form-group">
        <label for="gender${participantCount + 1}">Gender *</label>
        <select id="gender${participantCount + 1}">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="fullName${participantCount + 1}">Full name *</label>
        <input type="text" id="fullName${participantCount + 1}" placeholder="First name">
        <input type="text" id="lastName${participantCount + 1}" placeholder="Last name">
      </div>
      <div class="form-group">
        <label for="age${participantCount + 1}">Contact Information</label>
        <input type="text" id="lastName${participantCount + 1}" placeholder="Contact Information">
      </div>
    `;
  
    document.getElementById('participants').appendChild(participantDiv);
  } else {
    alert('Maximum participant limit reached (10 participants).');
  }
}

// Add event listener to the button
document.getElementById('addParticipantBtn').addEventListener('click', addParticipant);
document.getElementById('submitBtn').addEventListener('click', submitDetails);