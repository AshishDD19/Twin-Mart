import React, { useState } from "react";
import { FaKey, FaLock } from "react-icons/fa";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    alert("Password Changed Successfully!");
  };

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-lg shadow-xl rounded-2xl p-8 border border-gray-200">

        {/* Header */}
        <div className="flex flex-col items-center text-center border-b pb-6">
          <FaKey className="text-5xl text-orange-500" />
          <h2 className="text-2xl font-bold text-gray-800 mt-3">Change Password</h2>
          <p className="text-gray-500 text-sm">Update your account security</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">

          {/* Old Password */}
          <div>
            <label className="text-gray-700 font-semibold">Old Password</label>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border shadow-sm mt-1">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Enter old password"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="text-gray-700 font-semibold">New Password</label>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border shadow-sm mt-1">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Enter new password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-700 font-semibold">Confirm Password</label>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border shadow-sm mt-1">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Update Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ChangePassword;
