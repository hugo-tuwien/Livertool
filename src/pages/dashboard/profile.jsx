import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
    Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import banner from '/img/liverbanner2.png';
import itvgif from "/img/ITV.gif"
import './App.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography2 from '@mui/material/Typography';
import Button2 from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//import { Carousel } from 'antd';

const steps = [
  {
    label: 'ITV',
    description: itvgif,
  },
  {
    label: 'PTV',
    description:
    "./img/PTV.gif",
  },
  {
    label: 'Liver',
    description: "./img/liver.gif",
  },
  {
    label: 'Liver-ITV',
    description: "./img/Liver-itv.gif",
  },
];

//const carouselContent = [
  //<div key="1"><img src="/img/liver.gif" alt="GIF 1" /></div>,
  //<div key="2"><img src="/img/ITV.gif" alt="GIF 1" /></div>,
  //<div key="3"><img src="/img/PTV.gif" alt="GIF 1" /></div>,
  //<div key="4"><img src="/img/Liver-itv.gif" alt="GIF 1" /></div>,
//];

//const carouselStyles = {
  //height: '220px',
  //width: '220px', // Asegúrate de que también tengas un ancho fijo
  //alignItems: 'center',
  //color: '#fff',
  //lineHeight: '100px',
  //background: '#e91e63',
  //borderRadius: '100%',
//};

// <Carousel autoplay style={carouselStyles}>{carouselContent}</Carousel> 

export function Profile() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="relative mt-8" style={{ height: '325px', width: '1170px' }}>
        <div className="relative mt-8 h-full w-full overflow-hidden rounded-xl">
        <div style={{ backgroundImage: `url(${banner})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        </div>
        </div>
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/summary.png"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Summary of the project
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Master Thesis
                </Typography>
              </div>
            </div>
          </div>

          <div className="gird-cols-1 mb-12 grid gap-12 px-5 lg:grid-cols-1 xl:grid-cols-1">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                What is the project about?
              </Typography>
              <div className="text-container" style={{ textAlign: 'justify' }}>
                <p> 
                  Liver cancer is a significant global health concern, with approximately <strong>700,000 deaths</strong> recorded each year, making it the third leading cause of cancer-related deaths worldwide. Additionally, the liver is a common site for the spread of cancer from other parts of the body, known as metastatic disease. This often happens with cancers originating in the bowel, breast, lung, kidney or skin (melanoma).
                </p>
                <br /> {/* Línea en blanco */}
                <p>
                  Both primary liver cancer and metastatic liver lesions can be treated with aggressive treatments or surgery to lead to long-term disease-free survival. However, there is a non-invasive alternative called Stereotactic Body Radiation Therapy (SBRT), a treatment approach where a high dose of radiation is precisely delivered in a small number of sessions (typically less than or equal to 5 fractions) using advanced radiation equipment.
                </p>
                <br /> {/* Línea en blanco */}
                <p>
                  It is essential to strike a balance between effectively treating the tumor and avoiding complications in nearby normal tissues, so determining the right radiation dose is crucial. <strong>Visual analytics</strong> can play a significant role in addressing the complex issue of liver cancer treatment, including the use of SBRT. It can help with data integration, treatment planning, decision support, and prediction.
                </p>
              </div>
            </div>
          </div>

        </CardBody>
      </Card>

    <div className="mb-6">

    <div className="flex">
      <div className="my-16 mb-6 mr-0 w-1/2">

      <Card className="mx-3 -mt-16 lg:mx-4">
        <CardBody className="p-4">

          <div className="gird-cols-1 mb-12 grid gap-12 px-5 lg:grid-cols-2 xl:grid-cols-1">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Why is this tool useful?
              </Typography>
              <div className="text-container" style={{ textAlign: 'justify' }}>
                <p> 
                The aim is to develop a comparative visual analytics tool that enables researchers and clinicians to explore and analyze multi-modal liver datasets, integrating clinical data. The tool should be designed to be user-friendly and assist with liver disease analysis, treatment planning and prognosis by making it easier to identify patterns and insights.
                </p>
                <br /> {/* Línea en blanco */}
                <p>
                It would bring together different types of data, present it in a way that is easy to understand, use statistics to uncover important details and help in making informed decisions.
                </p>
              </div>
            </div>
          </div>

          </CardBody>
        </Card>
      </div>

      <div className="mb-6 w-1/2 ml-1">

        <Card className="mx-8 lg:mx-2">

          <div className="px-2 pb-8">
            <Typography variant="h6" color="blue-gray" className="mb-2 ml-4 mt-4">
              Database
            </Typography>

            <div className="flex">
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <Card key="title" color="transparent" shadow={false}>
                  <div className="flex flex-col items-center justify-center">
                    <CardHeader
                      floated={false}
                      color="white"
                      className="mx-0 mt-10 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src="/img/sandiego.png"
                        alt="San Diego's University DB"
                        className="h-full w-full object-contain"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1 text-center">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-2 mb-2"
                      >
                        San Diego's University DB
                      </Typography>
                      
                    </CardBody>
                    <CardFooter className="mt-5 flex items-center justify-between py-0 px-1">
                      <Link to="/dashboard/tables">
                        <Button variant="outlined" size="sm">
                          view database
                        </Button>
                      </Link>
                    </CardFooter>
                    </div>
                  </Card>
                </div>
                
                <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <Card key="title" color="transparent" shadow={false} >
                  <CardBody className="py-5 px-1 text-center" style={{alignItems: 'center' }}>

                  <Box sx={{ maxWidth: 400, flexGrow: 1}}>
      <Paper
        square = {false}
        elevation={3}
        rounded corners
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 0,
          bgcolor: '#E91E63',
        }}
      >
        <Typography2 style={{ textAlign: 'center', color: '#FFFFFF',margin: 'auto', fontSize: '1.2rem',}}>{steps[activeStep].label}</Typography2>
      </Paper>
      <Box sx={{ height: 200, maxWidth: 400, width: '100%', p: 2 }}>
      <img
    src={steps[activeStep].description}
    
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
      </Box>
      <MobileStepper
        variant="text"
        square = {false}
        rounded corners
        elevation={3}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: '#E91E63', // Cambia el color de fondo según tu preferencia
          color: '#FFFFFF',
          fontSize: '0.9rem', // Cambia el color del texto según tu preferencia
        }}
        nextButton={
          <Button2
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: '#FFFFFF', // Cambia el color del texto del botón según tu preferencia
            }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Button2>
        }
        backButton={
          <Button2 size="small" onClick={handleBack} disabled={activeStep === 0}
          sx={{
            color: '#FFFFFF', // Cambia el color del texto del botón según tu preferencia
          }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
            Back
          </Button2>
        }
      />
    </Box>

                  </CardBody>
                  </Card>
            </div>
            </div>
          </div>
        </Card>
        </div>

        

    </div>
    <Card className="mx-3 -mt-18 mb-6 lg:mx-4">
        <CardBody className="p-4">
        <div class="container2">
                    <h1 class="level-1 rectangle">Patients from San Diego DB</h1>
                    <ol class="level-2-wrapper">
                      <li>
                        <h2 class="level-2 rectangle">CT's Scans</h2>
                        <ol class="level-3-wrapper">
                      <li>
                            <h3 class="level-3 rectangle">Doses</h3>
                          </li>
                          <li>
                            <h3 class="level-3 rectangle">Average</h3>
                          </li>
                          <li>
                            <h3 class="level-3 rectangle">Breathing Cycle</h3>
                            
                            <ol class="level-4-wrapper">
                              <li>
                                <h4 class="level-4 rectangle">0 - 100 %</h4>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h2 class="level-2 rectangle">Clinical Information</h2>
                        <ol class="level-3-wrapper">
                          <li>
                            <h3 class="level-3 rectangle">19 Patients</h3>
                            <ol class="level-4-wrapper">
                              <li>
                                <h4 class="level-4 rectangle">11 Women</h4>
                              </li>
                              <li>
                                <h4 class="level-4 rectangle">8 Men</h4>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <h3 class="level-3 rectangle">Tumor Type</h3>
                            <ol class="level-4-wrapper">
                              <li>
                                <h4 class="level-4 rectangle">7 HCC</h4>
                              </li>
                              <li>
                                <h4 class="level-4 rectangle">12 MET</h4>
                              </li>
                            </ol>
                          </li>
                          <li>
                    
                            <h3 class="level-3 rectangle">Radioterapy Side-Effects</h3>
                            <ol class="level-4-wrapper">
                              <li>
                                <h4 class="level-4 rectangle">7 Toxicity</h4>
                              </li>
                              <li>
                                <h4 class="level-4 rectangle">12 Non Toxicity</h4>
                              </li>
                                         
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
          

        </CardBody>
      </Card>

      <Card className="mx-3 -mt-18 mb-6 lg:mx-4">
        <CardBody className="p-4">

          <div className="gird-cols-1 mb-12 grid gap-12 px-5 lg:grid-cols-1 xl:grid-cols-1">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Pipeline of the project
              </Typography>
             
              <div className="timeline">
                <div className="timeline-event">
                <div className="timeline-event-icon">
                  <img src="./img/db.png" />
                </div>
                <div className="timeline-event-content">
                    1st step
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-event-icon">Icon</div>
                <div className="timeline-event-content">
                    2nd step
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-event-icon">
                <img src="./img/ct-scan.png" />
                </div>
                <div className="timeline-event-content">
                    3rd step
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-event-icon">Icon</div>
                <div className="timeline-event-content">
                    4th step
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-event-icon">
                <img src="./img/clustering.png" />
                </div>
                <div className="timeline-event-content">
                    5th step
                </div>
              </div>
              </div>

            </div>
          </div>

        </CardBody>
      </Card>






    </div> 
    </>
  );
}

export default Profile;
