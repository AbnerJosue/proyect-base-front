import Head from 'next/head';
import {useState} from "react";
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { gettingDepartamentsResources } from "../services/rrhh.services"

const Customers = () => {
  const [data, setData]=useState(); 

  // const gettingData = async() => {
  //   let result = await gettingDepartamentsResources();
  //   setData(result); 
  // }
  // gettingData();

  console.log(data); 
  return (
    <>
      <Head>
        <title>
          Customers | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  )
}


Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
