const profilePicture = document.getElementById('img-profile');
const profileName = document.getElementById('p-name');
const profileGenser = document.getElementById('span-gender-icon');
const profileAddress = document.getElementById('p-address');
const profileEmail = document.getElementById('p-email');
const btnGenerateMore = document.getElementById('btn-random');

btnGenerateMore.onclick = async() => { getRandomProfile(); }

getRandomProfile = async() => {
  document.getElementById('div-user-card').style.display = "none";
  document.getElementById('div-loading-card').style.display = "";
  profileGenser.innerText = '';
  const resp = await axios.get("https://randomuser.me/api/");
  const user = resp.data.results[0];
  profilePicture.src = user.picture.large;
  profileName.innerText = (user.name.first + ' ' + user.name.last);
  profileAddress.innerText = user.location.city + ' ' + user.location.state + ' ' + user.location.country + ' ' + user.location.postcode;
  profileEmail.innerText = user.email;
  if(user.gender == 'male') profileGenser.innerText = '👨';
  if(user.gender == 'female') profileGenser.innerText = '👩';
  document.getElementById('div-user-card').style.display = "";
  document.getElementById('div-loading-card').style.display = "none";
};

getRandomProfile();