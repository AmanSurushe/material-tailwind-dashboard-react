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
  import { roleTableData } from "@/data";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import DefaultPagination from "../Pagination/pagination";
  
  export function Role() {
    const [showForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    const handleOnClick = () => {
      setShowForm(true);
    };
  
    // Calculate the start and end indices for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = roleTableData.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
             <div class="flex justify-between ...">
              <div> <Typography variant="h6" color="white">
                Roles
              </Typography ></div>
              <div >
                <Link to='/dashboard/newrole'>
                <Button variant="outlined" color="white" class="absolute inset-y-0 right-0 w-16 ..." onClick={handleOnClick}>
                Add
              </Button>
                </Link></div>
            </div>
          </CardHeader>
          <CardBody className=" px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["id","role", "description", "created by", "created at", "status", "", ""].map((el) => (
                    <th
                      key={el}
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
                {currentItems.map(
                  ({ Id, RoleName, Description, CreatedBy, CreatedAt, isActive}, key) => {
                    const className = `py-3 px-4 ${
                      key === currentItems.length - 1 ? "" : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={Id}>
                         <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {Id}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {RoleName}
                              </Typography>
                              {/* <Typography className="text-xs font-normal text-blue-gray-500">
                                {Id}
                              </Typography> */}
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {Description}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {CreatedBy}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="ghost"
                            color={isActive ? "green" : "red"}
                            value={isActive ? "Active" : "Block"}
                            size="sm"
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
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            Edit
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
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
                totalItems={roleTableData.length}
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
  