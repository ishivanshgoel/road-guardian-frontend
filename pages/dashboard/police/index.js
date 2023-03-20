import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import Ashoka from "../../../public/ashoka.png";
import Navbar from "../../../components/navbar/navbar";
import { useRouter } from "next/router";

export default function PoliceDashboard() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Police Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row" style={{ height: "100vh", margin: 0 }}>
        <div className="col-12 d-flex flex-column justify-content-center px-20">
          <div className="d-flex justify-content-center">
            <Image src={Ashoka} className="img-fluid" height={200} />
          </div>
          <div className="d-flex justify-content-center flex-column text-center">
            <h1 style={{ fontFamily: "Poppins" }}>
              <b>Road Guardian</b>
            </h1>
            <h6 className="my-30" style={{ fontFamily: "Poppins" }}>
              Empowering citizens to create safer roads: Report hazards,
              accidents, and unsafe driving behavior with our citizen portal
              app.
            </h6>
          </div>
          <div className="d-flex justify-content-center my-2">
            <div class="card mx-2" style={{ width: "25rem" }}>
              <img
                class="card-img-top"
                src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20181016010405_Road-accidents.jpg&w=700&q=90&c=1"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-title"><b>Location: </b>[30.7560448, 76.791808] </p>
                <p class="card-text">
                  <b>Reported By: </b>Shivansh Goel
                </p>
                <a href="#" class="btn btn-primary" onClick={() => window.location.href = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13714.68210460069!2d76.79135525!3d30.755755000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679339026201!5m2!1sen!2sin"}>
                  View Location on Map
                </a>
              </div>
            </div>

            <div class="card mx-2" style={{ width: "25rem" }}>
              <img
                class="card-img-top"
                src="https://etimg.etb2bimg.com/photo/94033228.cms"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-title"><b>Location: </b>[30.7560448, 76.791808] </p>
                <p class="card-text">
                  <b>Reported By: </b>Shivansh Goel
                </p>
                <a href="#" class="btn btn-primary" onClick={() => window.location.href = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13714.68210460069!2d76.79135525!3d30.755755000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679339026201!5m2!1sen!2sin"}>
                  View Location on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
