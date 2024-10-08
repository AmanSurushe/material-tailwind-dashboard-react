import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultPagination from "../Pagination/pagination";

export function User() {
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleOnClick = () => {
    setShowForm(true);
  };

  // Calculate the start and end indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = authorsTableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <div className="flex justify-between">
            <div>
              <Typography variant="h6" color="white">
                Users
              </Typography>
            </div>
            <div>
              <Link to="/dashboard/newuser">
                <Button
                  variant="outlined"
                  color="white"
                  className="absolute inset-y-4 right-7 w-18"
                  onClick={handleOnClick}
                >
                  Add
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["user", "contact", "role", "status", "created", "", ""].map(
                  (el, index) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {currentItems.map(
                (
                  { id, img, username, email, PhoneNumber, role, status, CreatedAt },
                  key
                ) => {
                  const className = `py-3 px-4 ${
                    key === currentItems.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={username} size="sm" variant="rounded" />
                          <div>
                            <a href="/dashboard/profile">
                              <Typography
                                variant="small"
                                color="black"
                                className="font-semibold"
                              >
                                {username}
                              </Typography>
                            </a>

                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {PhoneNumber}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {role}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="ghost"
                          color={status ? "green" : "red"}
                          value={status ? "Active" : "Block"}
                          className="py-0.5 px-3 text-[12px] font-high w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {CreatedAt}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-indigo-800"
                        >
                          Edit
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-indigo-800"
                        >
                          Delete
                        </Typography>
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
              totalItems={authorsTableData.length}
              itemsPerPage={itemsPerPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default User;
