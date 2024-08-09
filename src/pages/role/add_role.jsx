import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Select,
  Option,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { createrole } from '../../redux/slices/rolesslice'; // Adjust the path as necessary

export default function Add_role() {
  const dispatch = useDispatch();

  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');  // Default to 'Active' (as string)
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      const roleData = {
        "role_name": roleName,
        "description": description,
        "is_active": parseInt(status),  // Convert back to number for submission
        "created_by": 1,
      };
      dispatch(createrole(roleData));

      // Clear the form or show a success message if needed
      setRoleName('');
      setDescription('');
      setStatus('');  // Reset to 'Active'
      setAgreed(false);
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Create a new role
          </Typography >
        </CardHeader>
        <CardBody className="p-7" >
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-1">
                  <div className="mt-4">
                    <Input
                      label="Role Name"
                      size="lg"
                      required
                      value={roleName}
                      onChange={(e) => setRoleName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="mt-4">
                    <Input
                      label="Description"
                      size="lg"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <div className="mt-4">
                    
                    <Select
                      label="Status"
                      size="lg"
                      value={status}
                      onChange={(value) => {
                        setStatus(value)}} 
                    >
                      <Option value="1">Active</Option> 
                      <Option value="0">Block</Option>  
                    </Select>
                  </div>
                </div>
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <Button variant="filled" type="submit">Save</Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
