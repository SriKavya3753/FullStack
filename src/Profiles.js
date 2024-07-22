import './profile.css';
function Profile(){
    return (<div className="container">
        <div className="image">
            <img src="profile_logo.jpeg" alt="profile-img" />
        </div>    
        <div id="name">
            <h3>Scott Ayres</h3>
            <p>. 2nd</p>
        </div>
        <div id="about">
            <p>Busting social media myths at the Social Media Lab,...</p>
        </div>
        <div id="connections">
            <img src="profile_logo.jpeg" alt="profile-img" />
            <h4>23 shared connections</h4>
        </div>    
        <a href='#'>Connect</a>  
    </div>);
}
export default Profile;