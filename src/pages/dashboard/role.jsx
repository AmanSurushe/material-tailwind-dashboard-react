import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import DefaultPagination from "../Pagination/pagination";
import { fetchroles } from "../../redux/slices/rolesslice"; // Adjust the path as necessary
import {  PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export function Role() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles.roles);
  console.log('roles',roles);
  const status = useSelector((state) => state.roles.status);
  const error = useSelector((state) => state.roles.error);

  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchroles());
  }, [dispatch]);

  const handleOnClick = () => {
    setShowForm(true);
  };

  // Ensure roles is an array before slicing
  const rolesArray = Array.isArray(roles.data) ? roles.data : [];

  // Calculate the start and end indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rolesArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <div className="flex justify-between">
            <Typography variant="h6" color="white">
              Roles
            </Typography>
            <Link to='/dashboard/newrole'>
              <Button variant="outlined" color="white" className="absolute inset-y-4 right-7 w-18" onClick={handleOnClick}>
                Add
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "role", "description", "created by", "created at", "status", "", ""].map((el, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {status === 'loading' && (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Loading...
                  </td>
                </tr>
              )}
              {status === 'failed' && (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Error loading data: {error}
                  </td>
                </tr>
              )}
              {status === 'succeeded' && currentItems.map(
                ({ id, role_name, description, created_by, createdAt, is_active }, key) => {
                  const className = `py-3 px-4 ${
                    key === currentItems.length - 1 ? "" : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {id}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {role_name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {description}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {created_by}
                        </Typography>
                      </td>
                      
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {createdAt}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="ghost"
                          color={is_active ? "green" : "red"}
                          value={is_active ? "Active" : "Block"}
                          size="sm"
                          className="py-0.5 px-3 text-[12px] font-high w-fit"
                        />
                      </td>
                      <td className={className}>
                      <IconButton variant="text" size="sm">
                            <PencilIcon className="h-5 w-5 text-gray-900" />
                          </IconButton>
                      
                      </td>
                      <td className={className}>
                      <IconButton variant="text" size="sm">
                            <TrashIcon className="h-5 w-5 text-gray-900" />
                          </IconButton>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            <DefaultPagination
              active={currentPage}
              totalItems={rolesArray.length}
              itemsPerPage={itemsPerPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Role;
