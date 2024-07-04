import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(formData));
    navigate('/quiz');
  };
  return (
    <div className="sm:grid h-screen p-4 grid-cols-12 bg-slate-900 ">
      <div className="left m-3 sm:col-span-4 bg-slate-800 rounded-md flex flex-col flex-wrap items-center">
        <p className="welcome font-bold text-4xl mt-28 text-white  ">WELCOME TO</p> <br />
        <p className='font-semibold text-xl text-white'>Brain Inventory Quiz</p>
      </div>
      <div className="mt-10 right sm:col-span-8 bg-grey-900 sm:mt-28">
        <form class="md:px-40" onSubmit={handleSubmit}>

            <div className="sm:grid grid-cols-2 gap-2">
                <div class="mb-5">
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name </label>

                  <input type="text" id="first name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name Here" onChange={handleChange} required/>

                </div>

                <div class="mb-5">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name </label>

                  <input type="text" id="first name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Last Name Here" onChange={handleChange} required/>

                </div>
            </div>
            <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address </label>

                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abcd@xyz.com" onChange={handleChange} required/>

                </div>
            <div className="sm:grid grid-cols-2 gap-2">
                <div class="mb-5">
                  <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number </label>

                  <input type="text" id="first name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0987654321" onChange={handleChange} required/>

                </div>

                <div class="mb-5">
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth </label>

                  <input type="date" id="first name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required/>

                </div>
                
            </div>
            <button 
              type="submit"
              class="text-white bg-sky-400 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onChange={handleChange}>
              Submit & start Quiz
            </button>
        </form>
      </div>
    </div>
  )
};

export default LandingPage;
