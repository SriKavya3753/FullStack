import './profile.css';
function Profile(){
    return (
    <div className="container">
        <div className="image">
            <img src="profile_logo.jpeg" alt="profile-img" />
        </div>    
        <div id="name">
            <h5>Scott Ayres</h5>
            <p>. 2nd</p>
        </div>
        <div id="about">
            <p>Busting social media myths at the Social Media Lab,...</p>
        </div>
        <div id="connections">
            <img src="profile_logo.jpeg" alt="profile-img" />
            <h6>23 shared connections</h6>
        </div>    
        <a href='#'>Connect</a>
    </div>);
}
export default Profile;