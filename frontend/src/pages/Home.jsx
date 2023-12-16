import React from "react";
import Layout from "../components/Layout";
import Header from "../components/HOME/Header";
import BestSelling from "../components/HOME/BestSelling";
import Headericon from "../components/HOME/Headericon";
import NewProduxts from "../components/HOME/NewProducts";
import Cake from "../components/HOME/Cake";


export default function Home() {
  return (
    <Layout>
      <Header />
      <Headericon />
      <NewProduxts />
      <Cake />
      <BestSelling />
    </Layout>
  );
}
