import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";
import toast from "react-hot-toast";

const fetchProfile = async () => {
  const res = await api.get("/user/profile");
  return res.data.data;
};

const UserProfile = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchProfile,
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !data) {
  return <p className="text-center mt-10">Unauthorized / Failed to load profile</p>;
}

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl shadow-xl rounded-2xl p-8 border border-gray-200">

        {/* Header */}
        <div className="flex flex-col items-center text-center border-b pb-6">
          <FaUserCircle className="text-7xl text-orange-500" />
          <h2 className="text-2xl font-bold text-gray-800 mt-3">User Profile</h2>
          <p className="text-gray-500 text-sm">Manage your account details</p>

          {/* UPDATE BUTTON */}
          <button
            onClick={() => navigate("/profile/edit")}
            className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-orange-600"
          >
            Update Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-6">

          <ProfileRow
            icon={<FaUserCircle />}
            label="Full Name"
            value={data?.name}
          />

          <ProfileRow
            icon={<FaEnvelope />}
            label="Email Address"
            value={data?.email}
          />

          <ProfileRow
            icon={<FaPhone />}
            label="Phone Number"
            value={data?.phone}
          />

          <ProfileRow
            icon={<FaMapMarkerAlt />}
            label="Address"
            value={data?.location}
          />

        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ icon, label, value }) => (
  <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border gap-3">
    <div className="text-xl text-orange-500">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default UserProfile;
