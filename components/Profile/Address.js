'use client';

import { useEffect, useState } from "react";
import Profile from "./Profile";
import UserTabs from "./UserTabs";
import axios from "axios";
import { useSession } from "next-auth/react";

const Address = () => {
  const [address, setAddress] = useState({
    phone: "",
    street: "",
    town: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/profile");
        if (response.status === 200) {
          const userData = response.data;
          setAddress({
            phone: userData.phone,
            street: userData.street,
            town: userData.town,
            city: userData.city,
            state: userData.state,
            postalCode: userData.postalCode,
            country: userData.country,
          });
        } else {
          console.log("Response was not ok");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [session]);

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put("/api/profile", address);
      if (res.status >= 200 && res.status < 300) {
        console.log("Address updated successfully");
      } else {
        console.log("Server error:", res.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  return (
    <>
      <Profile />
      <div className="bg-white sm:max-w-6xl h-screen sm:grid grid-cols-[4fr,8fr] mx-auto">
        <UserTabs />
        <form onSubmit={handleAddressSubmit} className="block p-8 rounded-xl">
          <label htmlFor="name">Name</label>
          <input
            disabled={true}
            type="text"
            id="name"
            name="name"
            placeholder="user name"
            value={session?.user?.name}
          />
          <label htmlFor="email">Email</label>
          <input
            disabled={true}
            type="text"
            id="email"
            name="email"
            placeholder="user email"
            value={session?.user?.email}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            disabled={loading}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={address.phone || ""}
            onChange={handleInputChange}
          />

          <label htmlFor="street">Street Address</label>
          <input
            disabled={loading}
            type="text"
            id="street"
            name="street"
            placeholder="Street Address"
            value={address.street || ""}
            onChange={handleInputChange}
          />

          <div className="max-w-lg grid sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="town">Town/Village</label>
              <input
                disabled={loading}
                type="text"
                id="town"
                name="town"
                placeholder="Town/village"
                value={address.town || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                disabled={loading}
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={address.city || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="max-w-lg grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="state">State</label>
              <input
                disabled={loading}
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={address.state || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                disabled={loading}
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label htmlFor="country">Country</label>
          <input
            disabled={loading}
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            value={address.country || ""}
            onChange={handleInputChange}
          />
          <button type="submit" className="max-w-lg mt-4">
            {loading ? "Loading..." : "Add Address"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
