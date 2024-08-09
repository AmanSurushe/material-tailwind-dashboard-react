
import { UserCircleIcon } from '@heroicons/react/24/solid'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Select,
  Option,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";
import { useState } from 'react';

export default function Add_user() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? URL.createObjectURL(file) : null);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Create a new user
          </Typography >
        </CardHeader>
        <CardBody className="p-8 " >
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <div className="col-span-full">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Profile Picture</h2>

                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        {selectedFile ? (
                          
                          <img src={selectedFile} alt="Profile Preview" className="h-96 w-96 rounded-full object-cover object-center" />
                        ) : (
                          <UserCircleIcon aria-hidden="true" className="mx-auto h-24 w-24 text-gray-300" />
                        )}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-black-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-blue-500"
                          >
                            <span>Upload your photo</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Input
                        label="First Name"
                        size="lg"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Input
                        label="Last Name"
                        size="lg"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-4">
                      <Input
                        label="Email"
                        size="lg"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Select label="Status" size="lg">
                        <Option>Developer</Option>
                        <Option>Administrator</Option>
                        <Option>Operations</Option>
                        <Option>Support</Option>
                      </Select>
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Select label="Gender" size="lg">
                        <Option>Male</Option>
                        <Option>Female</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Input
                        label="City"
                        size="lg"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <div className="mt-4">
                      <Input
                        label="State"
                        size="lg"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1s">
                    <div className="mt-4">
                      <Input
                        label="Zip Code"
                        size="lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="mt-4">
                      <Input
                        label="Address"
                        size="lg"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="mt-4">
                      <Input type="password" label="Password" />
                      <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Use at least 8 characters, one uppercase, one lowercase and one number.
                      </Typography>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-4">
                      <Input type="password" label="Confirm Password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <Button variant="filled" type="submit" >Save</Button>

            </div>
          </form>
        </CardBody>

      </Card>
    </div>
  )
}
