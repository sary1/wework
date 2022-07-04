import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <Navbar />
      <div className="Profile-body">
        <Header />
        <h1 className="Profile-body-title">My Profile</h1>
        <div className="Profile-body-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ab
          earum provident error distinctio natus inventore facere quia, alias
          corporis dolores reprehenderit deleniti magni. Doloribus nulla
          aspernatur quod omnis voluptatem aut suscipit minima eius, ea
          perferendis culpa, obcaecati vel temporibus recusandae. Doloribus
          aliquam sapiente vitae odio itaque libero, laborum provident qui dicta
          ducimus at nam? Non perspiciatis dolorem ab praesentium laudantium
          harum nihil eius iusto omnis tempore! Fuga, maxime. Iure sapiente
          harum iusto quod ipsam dignissimos eius optio. Repudiandae magni rerum
          deleniti, tempore obcaecati sed dolores ab necessitatibus! Excepturi
          ducimus quidem officia quod aliquam, dignissimos natus beatae
          temporibus tempore adipisci!
        </div>
      </div>
    </div>
  );
};

export default Profile;
