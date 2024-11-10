
import MainColorSwitcher from "../../components/MainColorSwitcher";

import {
  FormInput,

} from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { Routes, Route, useNavigate } from "react-router-dom";

import React, { useState, MouseEvent } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../stores/store';
import { AdminLogin } from '../../stores/authActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const key = "isConnecte";
    const value = true;
      const [login, setLogin] = useState('');
      const [password, setPassword] = useState('');
      const dispatch = useDispatch<AppDispatch>();
      const { loading, error, success } = useSelector(
        (state: RootState) => state.admin,
      );


      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const resultAction = await dispatch(AdminLogin({ login, password }));
        if (AdminLogin.fulfilled.match(resultAction)) {
          localStorage.setItem(key, JSON.stringify(value));
          navigate('/acceuil');
        } else {
          if (AdminLogin.rejected.match(resultAction)) {
            toast.error(resultAction.payload || 'Login failed');
           
          }
        }
      };

    return (
        <>
     
      
    
        
    
  
    
          <div
            className={clsx([
              "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
              "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
              "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
            ])}
          >
            <div className="container relative z-10 sm:px-10">
              <div className="block grid-cols-2 gap-4 xl:grid">
                <div className="flex-col hidden min-h-screen xl:flex">
                  {/* logo vnova */}
                  {/* <div className="my-auto">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="w-1/2 -mt-16 -intro-x"
                      src={illustrationUrl}
                    />
                    <div className="mt-10 text-5xl font-medium leading-tight text-white -intro-x">
                      Connectez-vous à votre compte. <br />
                    </div>
                    <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                      Gérez tous vos comptes Vnova en un seul endroit
                    </div>
                  </div> */}
                </div>
    
                <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
                  <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                      S'identifier
                    </h2>
                    <ToastContainer position="top-right" />
                    <div className="mt-8 intro-x">
                      <FormInput
                        type="text"
                        name="login"
                        onChange={(e) => setLogin(e.target.value)}
                        className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px] mb-3"
                        placeholder="login"
                      />
    
                      <div className="relative  container flex-1 mt-5  w-full  xl:mt-0">
                        <FormInput
                        onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="mot de passe"
                          name="password"
                          className="block px-4 py-3  xl:min-w-[350px]"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                          onClick={() => {
                            setIsPasswordVisible((prevState) => !prevState);
                          }}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                      <div className="flex items-center mr-auto">
                        {/* <FormCheck.Input
                          id="remember-me"
                          type="checkbox"
                          className="mr-2 border"
                        />
                        <label
                          className="cursor-pointer select-none"
                          htmlFor="remember-me"
                        >
                          Souviens de moi
                        </label> */}
                      </div>
                      <a href="/motdepasseoblier">Mot de passe oublié?</a>
                    </div>
                    <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                     onClick={handleSubmit}
                      >
                        Se connecter
                      </Button>
                  
                    </div>
                  
                  </div>
                </div>
                {/* END: Login Form */}
              </div>
            </div>
          </div>
        </>
      );
}

export default Login